/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/**
 * @module engine/model/schema
 */
import Element from './element';
import Position from './position';
import Range from './range';
import Text from './text';
import TreeWalker from './treewalker';
import { CKEditorError, ObservableMixin } from '@ckeditor/ckeditor5-utils';
/**
 * The model's schema. It defines the allowed and disallowed structures of nodes as well as nodes' attributes.
 * The schema is usually defined by the features and based on them, the editing framework and features
 * make decisions on how to change and process the model.
 *
 * The instance of schema is available in {@link module:engine/model/model~Model#schema `editor.model.schema`}.
 *
 * Read more about the schema in:
 *
 * * The {@glink framework/architecture/editing-engine#schema schema section} of the
 * {@glink framework/architecture/editing-engine Introduction to the Editing engine architecture} guide.
 * * The {@glink framework/deep-dive/schema Schema deep-dive} guide.
 */
export default class Schema extends ObservableMixin() {
    /**
     * Creates a schema instance.
     */
    constructor() {
        super();
        this._sourceDefinitions = {};
        /**
         * A dictionary containing attribute properties.
         */
        this._attributeProperties = {};
        this.decorate('checkChild');
        this.decorate('checkAttribute');
        this.on('checkAttribute', (evt, args) => {
            args[0] = new SchemaContext(args[0]);
        }, { priority: 'highest' });
        this.on('checkChild', (evt, args) => {
            args[0] = new SchemaContext(args[0]);
            args[1] = this.getDefinition(args[1]);
        }, { priority: 'highest' });
    }
    /**
     * Registers a schema item. Can only be called once for every item name.
     *
     * ```ts
     * schema.register( 'paragraph', {
     * 	inheritAllFrom: '$block'
     * } );
     * ```
     */
    register(itemName, definition) {
        if (this._sourceDefinitions[itemName]) {
            /**
             * A single item cannot be registered twice in the schema.
             *
             * This situation may happen when:
             *
             * * Two or more plugins called {@link module:engine/model/schema~Schema#register `register()`} with the same name.
             * This will usually mean that there is a collision between plugins which try to use the same element in the model.
             * Unfortunately, the only way to solve this is by modifying one of these plugins to use a unique model element name.
             * * A single plugin was loaded twice. This happens when it is installed by npm/yarn in two versions
             * and usually means one or more of the following issues:
             *     * a version mismatch (two of your dependencies require two different versions of this plugin),
             *     * incorrect imports (this plugin is somehow imported twice in a way which confuses webpack),
             *     * mess in `node_modules/` (`rm -rf node_modules/` may help).
             *
             * **Note:** Check the logged `itemName` to better understand which plugin was duplicated/conflicting.
             *
             * @param itemName The name of the model element that is being registered twice.
             * @error schema-cannot-register-item-twice
             */
            throw new CKEditorError('schema-cannot-register-item-twice', this, {
                itemName
            });
        }
        this._sourceDefinitions[itemName] = [
            Object.assign({}, definition)
        ];
        this._clearCache();
    }
    /**
     * Extends a {@link #register registered} item's definition.
     *
     * Extending properties such as `allowIn` will add more items to the existing properties,
     * while redefining properties such as `isBlock` will override the previously defined ones.
     *
     * ```ts
     * schema.register( 'foo', {
     * 	allowIn: '$root',
     * 	isBlock: true;
     * } );
     * schema.extend( 'foo', {
     * 	allowIn: 'blockQuote',
     * 	isBlock: false
     * } );
     *
     * schema.getDefinition( 'foo' );
     * //	{
     * //		allowIn: [ '$root', 'blockQuote' ],
     * // 		isBlock: false
     * //	}
     * ```
     */
    extend(itemName, definition) {
        if (!this._sourceDefinitions[itemName]) {
            /**
             * Cannot extend an item which was not registered yet.
             *
             * This error happens when a plugin tries to extend the schema definition of an item which was not
             * {@link module:engine/model/schema~Schema#register registered} yet.
             *
             * @param itemName The name of the model element which is being extended.
             * @error schema-cannot-extend-missing-item
             */
            throw new CKEditorError('schema-cannot-extend-missing-item', this, {
                itemName
            });
        }
        this._sourceDefinitions[itemName].push(Object.assign({}, definition));
        this._clearCache();
    }
    /**
     * Returns data of all registered items.
     *
     * This method should normally be used for reflection purposes (e.g. defining a clone of a certain element,
     * checking a list of all block elements, etc).
     * Use specific methods (such as {@link #checkChild `checkChild()`} or {@link #isLimit `isLimit()`})
     * in other cases.
     */
    getDefinitions() {
        if (!this._compiledDefinitions) {
            this._compile();
        }
        return this._compiledDefinitions;
    }
    /**
     * Returns a definition of the given item or `undefined` if an item is not registered.
     *
     * This method should normally be used for reflection purposes (e.g. defining a clone of a certain element,
     * checking a list of all block elements, etc).
     * Use specific methods (such as {@link #checkChild `checkChild()`} or {@link #isLimit `isLimit()`})
     * in other cases.
     */
    getDefinition(item) {
        let itemName;
        if (typeof item == 'string') {
            itemName = item;
        }
        else if ('is' in item && (item.is('$text') || item.is('$textProxy'))) {
            itemName = '$text';
        }
        // Element or module:engine/model/schema~SchemaContextItem.
        else {
            itemName = item.name;
        }
        return this.getDefinitions()[itemName];
    }
    /**
     * Returns `true` if the given item is registered in the schema.
     *
     * ```ts
     * schema.isRegistered( 'paragraph' ); // -> true
     * schema.isRegistered( editor.model.document.getRoot() ); // -> true
     * schema.isRegistered( 'foo' ); // -> false
     * ```
     */
    isRegistered(item) {
        return !!this.getDefinition(item);
    }
    /**
     * Returns `true` if the given item is defined to be
     * a block by the {@link module:engine/model/schema~SchemaItemDefinition}'s `isBlock` property.
     *
     * ```ts
     * schema.isBlock( 'paragraph' ); // -> true
     * schema.isBlock( '$root' ); // -> false
     *
     * const paragraphElement = writer.createElement( 'paragraph' );
     * schema.isBlock( paragraphElement ); // -> true
     * ```
     *
     * See the {@glink framework/deep-dive/schema#block-elements Block elements} section of
     * the {@glink framework/deep-dive/schema Schema deep-dive} guide for more details.
     */
    isBlock(item) {
        const def = this.getDefinition(item);
        return !!(def && def.isBlock);
    }
    /**
     * Returns `true` if the given item should be treated as a limit element.
     *
     * It considers an item to be a limit element if its
     * {@link module:engine/model/schema~SchemaItemDefinition}'s
     * {@link module:engine/model/schema~SchemaItemDefinition#isLimit `isLimit`} or
     * {@link module:engine/model/schema~SchemaItemDefinition#isObject `isObject`} property
     * was set to `true`.
     *
     * ```ts
     * schema.isLimit( 'paragraph' ); // -> false
     * schema.isLimit( '$root' ); // -> true
     * schema.isLimit( editor.model.document.getRoot() ); // -> true
     * schema.isLimit( 'imageBlock' ); // -> true
     * ```
     *
     * See the {@glink framework/deep-dive/schema#limit-elements Limit elements} section of
     * the {@glink framework/deep-dive/schema Schema deep-dive} guide for more details.
     */
    isLimit(item) {
        const def = this.getDefinition(item);
        if (!def) {
            return false;
        }
        return !!(def.isLimit || def.isObject);
    }
    /**
     * Returns `true` if the given item should be treated as an object element.
     *
     * It considers an item to be an object element if its
     * {@link module:engine/model/schema~SchemaItemDefinition}'s
     * {@link module:engine/model/schema~SchemaItemDefinition#isObject `isObject`} property
     * was set to `true`.
     *
     * ```ts
     * schema.isObject( 'paragraph' ); // -> false
     * schema.isObject( 'imageBlock' ); // -> true
     *
     * const imageElement = writer.createElement( 'imageBlock' );
     * schema.isObject( imageElement ); // -> true
     * ```
     *
     * See the {@glink framework/deep-dive/schema#object-elements Object elements} section of
     * the {@glink framework/deep-dive/schema Schema deep-dive} guide for more details.
     */
    isObject(item) {
        const def = this.getDefinition(item);
        if (!def) {
            return false;
        }
        // Note: Check out the implementation of #isLimit(), #isSelectable(), and #isContent()
        // to understand why these three constitute an object.
        return !!(def.isObject || (def.isLimit && def.isSelectable && def.isContent));
    }
    /**
     * Returns `true` if the given item is defined to be
     * an inline element by the {@link module:engine/model/schema~SchemaItemDefinition}'s `isInline` property.
     *
     * ```ts
     * schema.isInline( 'paragraph' ); // -> false
     * schema.isInline( 'softBreak' ); // -> true
     *
     * const text = writer.createText( 'foo' );
     * schema.isInline( text ); // -> true
     * ```
     *
     * See the {@glink framework/deep-dive/schema#inline-elements Inline elements} section of
     * the {@glink framework/deep-dive/schema Schema deep-dive} guide for more details.
     */
    isInline(item) {
        const def = this.getDefinition(item);
        return !!(def && def.isInline);
    }
    /**
     * Returns `true` if the given item is defined to be
     * a selectable element by the {@link module:engine/model/schema~SchemaItemDefinition}'s `isSelectable` property.
     *
     * ```ts
     * schema.isSelectable( 'paragraph' ); // -> false
     * schema.isSelectable( 'heading1' ); // -> false
     * schema.isSelectable( 'imageBlock' ); // -> true
     * schema.isSelectable( 'tableCell' ); // -> true
     *
     * const text = writer.createText( 'foo' );
     * schema.isSelectable( text ); // -> false
     * ```
     *
     * See the {@glink framework/deep-dive/schema#selectable-elements Selectable elements section} of
     * the {@glink framework/deep-dive/schema Schema deep-dive} guide for more details.
     */
    isSelectable(item) {
        const def = this.getDefinition(item);
        if (!def) {
            return false;
        }
        return !!(def.isSelectable || def.isObject);
    }
    /**
     * Returns `true` if the given item is defined to be
     * a content by the {@link module:engine/model/schema~SchemaItemDefinition}'s `isContent` property.
     *
     * ```ts
     * schema.isContent( 'paragraph' ); // -> false
     * schema.isContent( 'heading1' ); // -> false
     * schema.isContent( 'imageBlock' ); // -> true
     * schema.isContent( 'horizontalLine' ); // -> true
     *
     * const text = writer.createText( 'foo' );
     * schema.isContent( text ); // -> true
     * ```
     *
     * See the {@glink framework/deep-dive/schema#content-elements Content elements section} of
     * the {@glink framework/deep-dive/schema Schema deep-dive} guide for more details.
     */
    isContent(item) {
        const def = this.getDefinition(item);
        if (!def) {
            return false;
        }
        return !!(def.isContent || def.isObject);
    }
    /**
     * Checks whether the given node (`child`) can be a child of the given context.
     *
     * ```ts
     * schema.checkChild( model.document.getRoot(), paragraph ); // -> false
     *
     * schema.register( 'paragraph', {
     * 	allowIn: '$root'
     * } );
     * schema.checkChild( model.document.getRoot(), paragraph ); // -> true
     * ```
     *
     * Note: When verifying whether the given node can be a child of the given context, the
     * schema also verifies the entire context &mdash; from its root to its last element. Therefore, it is possible
     * for `checkChild()` to return `false` even though the context's last element can contain the checked child.
     * It happens if one of the context's elements does not allow its child.
     *
     * @fires checkChild
     * @param context The context in which the child will be checked.
     * @param def The child to check.
     */
    checkChild(context, def) {
        // Note: context and child are already normalized here to a SchemaContext and SchemaCompiledItemDefinition.
        if (!def) {
            return false;
        }
        return this._checkContextMatch(def, context);
    }
    /**
     * Checks whether the given attribute can be applied in the given context (on the last
     * item of the context).
     *
     * ```ts
     * schema.checkAttribute( textNode, 'bold' ); // -> false
     *
     * schema.extend( '$text', {
     * 	allowAttributes: 'bold'
     * } );
     * schema.checkAttribute( textNode, 'bold' ); // -> true
     * ```
     *
     * @fires checkAttribute
     * @param context The context in which the attribute will be checked.
     */
    checkAttribute(context, attributeName) {
        const def = this.getDefinition(context.last);
        if (!def) {
            return false;
        }
        return def.allowAttributes.includes(attributeName);
    }
    /**
     * Checks whether the given element (`elementToMerge`) can be merged with the specified base element (`positionOrBaseElement`).
     *
     * In other words &mdash; whether `elementToMerge`'s children {@link #checkChild are allowed} in the `positionOrBaseElement`.
     *
     * This check ensures that elements merged with {@link module:engine/model/writer~Writer#merge `Writer#merge()`}
     * will be valid.
     *
     * Instead of elements, you can pass the instance of the {@link module:engine/model/position~Position} class as the
     * `positionOrBaseElement`. It means that the elements before and after the position will be checked whether they can be merged.
     *
     * @param positionOrBaseElement The position or base element to which the `elementToMerge` will be merged.
     * @param elementToMerge The element to merge. Required if `positionOrBaseElement` is an element.
     */
    checkMerge(positionOrBaseElement, elementToMerge) {
        if (positionOrBaseElement instanceof Position) {
            const nodeBefore = positionOrBaseElement.nodeBefore;
            const nodeAfter = positionOrBaseElement.nodeAfter;
            if (!(nodeBefore instanceof Element)) {
                /**
                 * The node before the merge position must be an element.
                 *
                 * @error schema-check-merge-no-element-before
                 */
                throw new CKEditorError('schema-check-merge-no-element-before', this);
            }
            if (!(nodeAfter instanceof Element)) {
                /**
                 * The node after the merge position must be an element.
                 *
                 * @error schema-check-merge-no-element-after
                 */
                throw new CKEditorError('schema-check-merge-no-element-after', this);
            }
            return this.checkMerge(nodeBefore, nodeAfter);
        }
        for (const child of elementToMerge.getChildren()) {
            if (!this.checkChild(positionOrBaseElement, child)) {
                return false;
            }
        }
        return true;
    }
    /**
     * Allows registering a callback to the {@link #checkChild} method calls.
     *
     * Callbacks allow you to implement rules which are not otherwise possible to achieve
     * by using the declarative API of {@link module:engine/model/schema~SchemaItemDefinition}.
     * For example, by using this method you can disallow elements in specific contexts.
     *
     * This method is a shorthand for using the {@link #event:checkChild} event. For even better control,
     * you can use that event instead.
     *
     * Example:
     *
     * ```ts
     * // Disallow heading1 directly inside a blockQuote.
     * schema.addChildCheck( ( context, childDefinition ) => {
     * 	if ( context.endsWith( 'blockQuote' ) && childDefinition.name == 'heading1' ) {
     * 		return false;
     * 	}
     * } );
     * ```
     *
     * Which translates to:
     *
     * ```ts
     * schema.on( 'checkChild', ( evt, args ) => {
     * 	const context = args[ 0 ];
     * 	const childDefinition = args[ 1 ];
     *
     * 	if ( context.endsWith( 'blockQuote' ) && childDefinition && childDefinition.name == 'heading1' ) {
     * 		// Prevent next listeners from being called.
     * 		evt.stop();
     * 		// Set the checkChild()'s return value.
     * 		evt.return = false;
     * 	}
     * }, { priority: 'high' } );
     * ```
     *
     * @param callback The callback to be called. It is called with two parameters:
     * {@link module:engine/model/schema~SchemaContext} (context) instance and
     * {@link module:engine/model/schema~SchemaCompiledItemDefinition} (child-to-check definition).
     * The callback may return `true/false` to override `checkChild()`'s return value. If it does not return
     * a boolean value, the default algorithm (or other callbacks) will define `checkChild()`'s return value.
     */
    addChildCheck(callback) {
        this.on('checkChild', (evt, [ctx, childDef]) => {
            // checkChild() was called with a non-registered child.
            // In 99% cases such check should return false, so not to overcomplicate all callbacks
            // don't even execute them.
            if (!childDef) {
                return;
            }
            const retValue = callback(ctx, childDef);
            if (typeof retValue == 'boolean') {
                evt.stop();
                evt.return = retValue;
            }
        }, { priority: 'high' });
    }
    /**
     * Allows registering a callback to the {@link #checkAttribute} method calls.
     *
     * Callbacks allow you to implement rules which are not otherwise possible to achieve
     * by using the declarative API of {@link module:engine/model/schema~SchemaItemDefinition}.
     * For example, by using this method you can disallow attribute if node to which it is applied
     * is contained within some other element (e.g. you want to disallow `bold` on `$text` within `heading1`).
     *
     * This method is a shorthand for using the {@link #event:checkAttribute} event. For even better control,
     * you can use that event instead.
     *
     * Example:
     *
     * ```ts
     * // Disallow bold on $text inside heading1.
     * schema.addAttributeCheck( ( context, attributeName ) => {
     * 	if ( context.endsWith( 'heading1 $text' ) && attributeName == 'bold' ) {
     * 		return false;
     * 	}
     * } );
     * ```
     *
     * Which translates to:
     *
     * ```ts
     * schema.on( 'checkAttribute', ( evt, args ) => {
     * 	const context = args[ 0 ];
     * 	const attributeName = args[ 1 ];
     *
     * 	if ( context.endsWith( 'heading1 $text' ) && attributeName == 'bold' ) {
     * 		// Prevent next listeners from being called.
     * 		evt.stop();
     * 		// Set the checkAttribute()'s return value.
     * 		evt.return = false;
     * 	}
     * }, { priority: 'high' } );
     * ```
     *
     * @param callback The callback to be called. It is called with two parameters:
     * {@link module:engine/model/schema~SchemaContext} (context) instance and attribute name.
     * The callback may return `true/false` to override `checkAttribute()`'s return value. If it does not return
     * a boolean value, the default algorithm (or other callbacks) will define `checkAttribute()`'s return value.
     */
    addAttributeCheck(callback) {
        this.on('checkAttribute', (evt, [ctx, attributeName]) => {
            const retValue = callback(ctx, attributeName);
            if (typeof retValue == 'boolean') {
                evt.stop();
                evt.return = retValue;
            }
        }, { priority: 'high' });
    }
    /**
     * This method allows assigning additional metadata to the model attributes. For example,
     * {@link module:engine/model/schema~AttributeProperties `AttributeProperties#isFormatting` property} is
     * used to mark formatting attributes (like `bold` or `italic`).
     *
     * ```ts
     * // Mark bold as a formatting attribute.
     * schema.setAttributeProperties( 'bold', {
     * 	isFormatting: true
     * } );
     *
     * // Override code not to be considered a formatting markup.
     * schema.setAttributeProperties( 'code', {
     * 	isFormatting: false
     * } );
     * ```
     *
     * Properties are not limited to members defined in the
     * {@link module:engine/model/schema~AttributeProperties `AttributeProperties` type} and you can also use custom properties:
     *
     * ```ts
     * schema.setAttributeProperties( 'blockQuote', {
     * 	customProperty: 'value'
     * } );
     * ```
     *
     * Subsequent calls with the same attribute will extend its custom properties:
     *
     * ```ts
     * schema.setAttributeProperties( 'blockQuote', {
     * 	one: 1
     * } );
     *
     * schema.setAttributeProperties( 'blockQuote', {
     * 	two: 2
     * } );
     *
     * console.log( schema.getAttributeProperties( 'blockQuote' ) );
     * // Logs: { one: 1, two: 2 }
     * ```
     *
     * @param attributeName A name of the attribute to receive the properties.
     * @param properties A dictionary of properties.
     */
    setAttributeProperties(attributeName, properties) {
        this._attributeProperties[attributeName] = Object.assign(this.getAttributeProperties(attributeName), properties);
    }
    /**
     * Returns properties associated with a given model attribute. See {@link #setAttributeProperties `setAttributeProperties()`}.
     *
     * @param attributeName A name of the attribute.
     */
    getAttributeProperties(attributeName) {
        return this._attributeProperties[attributeName] || {};
    }
    /**
     * Returns the lowest {@link module:engine/model/schema~Schema#isLimit limit element} containing the entire
     * selection/range/position or the root otherwise.
     *
     * @param selectionOrRangeOrPosition The selection/range/position to check.
     * @returns The lowest limit element containing the entire `selectionOrRangeOrPosition`.
     */
    getLimitElement(selectionOrRangeOrPosition) {
        let element;
        if (selectionOrRangeOrPosition instanceof Position) {
            element = selectionOrRangeOrPosition.parent;
        }
        else {
            const ranges = selectionOrRangeOrPosition instanceof Range ?
                [selectionOrRangeOrPosition] :
                Array.from(selectionOrRangeOrPosition.getRanges());
            // Find the common ancestor for all selection's ranges.
            element = ranges
                .reduce((element, range) => {
                const rangeCommonAncestor = range.getCommonAncestor();
                if (!element) {
                    return rangeCommonAncestor;
                }
                return element.getCommonAncestor(rangeCommonAncestor, { includeSelf: true });
            }, null);
        }
        while (!this.isLimit(element)) {
            if (element.parent) {
                element = element.parent;
            }
            else {
                break;
            }
        }
        return element;
    }
    /**
     * Checks whether the attribute is allowed in selection:
     *
     * * if the selection is not collapsed, then checks if the attribute is allowed on any of nodes in that range,
     * * if the selection is collapsed, then checks if on the selection position there's a text with the
     * specified attribute allowed.
     *
     * @param selection Selection which will be checked.
     * @param attribute The name of the attribute to check.
     */
    checkAttributeInSelection(selection, attribute) {
        if (selection.isCollapsed) {
            const firstPosition = selection.getFirstPosition();
            const context = [
                ...firstPosition.getAncestors(),
                new Text('', selection.getAttributes())
            ];
            // Check whether schema allows for a text with the attribute in the selection.
            return this.checkAttribute(context, attribute);
        }
        else {
            const ranges = selection.getRanges();
            // For all ranges, check nodes in them until you find a node that is allowed to have the attribute.
            for (const range of ranges) {
                for (const value of range) {
                    if (this.checkAttribute(value.item, attribute)) {
                        // If we found a node that is allowed to have the attribute, return true.
                        return true;
                    }
                }
            }
        }
        // If we haven't found such node, return false.
        return false;
    }
    /**
     * Transforms the given set of ranges into a set of ranges where the given attribute is allowed (and can be applied).
     *
     * @param ranges Ranges to be validated.
     * @param attribute The name of the attribute to check.
     * @returns Ranges in which the attribute is allowed.
     */
    *getValidRanges(ranges, attribute) {
        ranges = convertToMinimalFlatRanges(ranges);
        for (const range of ranges) {
            yield* this._getValidRangesForRange(range, attribute);
        }
    }
    /**
     * Basing on given `position`, finds and returns a {@link module:engine/model/range~Range range} which is
     * nearest to that `position` and is a correct range for selection.
     *
     * The correct selection range might be collapsed when it is located in a position where the text node can be placed.
     * Non-collapsed range is returned when selection can be placed around element marked as an "object" in
     * the {@link module:engine/model/schema~Schema schema}.
     *
     * Direction of searching for the nearest correct selection range can be specified as:
     *
     * * `both` - searching will be performed in both ways,
     * * `forward` - searching will be performed only forward,
     * * `backward` - searching will be performed only backward.
     *
     * When valid selection range cannot be found, `null` is returned.
     *
     * @param position Reference position where new selection range should be looked for.
     * @param direction Search direction.
     * @returns Nearest selection range or `null` if one cannot be found.
     */
    getNearestSelectionRange(position, direction = 'both') {
        if (position.root.rootName == '$graveyard') {
            // No valid selection range in the graveyard.
            // This is important when getting the document selection default range.
            return null;
        }
        // Return collapsed range if provided position is valid.
        if (this.checkChild(position, '$text')) {
            return new Range(position);
        }
        let backwardWalker, forwardWalker;
        // Never leave a limit element.
        const limitElement = position.getAncestors().reverse().find(item => this.isLimit(item)) ||
            position.root;
        if (direction == 'both' || direction == 'backward') {
            backwardWalker = new TreeWalker({
                boundaries: Range._createIn(limitElement),
                startPosition: position,
                direction: 'backward'
            });
        }
        if (direction == 'both' || direction == 'forward') {
            forwardWalker = new TreeWalker({
                boundaries: Range._createIn(limitElement),
                startPosition: position
            });
        }
        for (const data of combineWalkers(backwardWalker, forwardWalker)) {
            const type = (data.walker == backwardWalker ? 'elementEnd' : 'elementStart');
            const value = data.value;
            if (value.type == type && this.isObject(value.item)) {
                return Range._createOn(value.item);
            }
            if (this.checkChild(value.nextPosition, '$text')) {
                return new Range(value.nextPosition);
            }
        }
        return null;
    }
    /**
     * Tries to find position ancestors that allow to insert a given node.
     * It starts searching from the given position and goes node by node to the top of the model tree
     * as long as a {@link module:engine/model/schema~Schema#isLimit limit element}, an
     * {@link module:engine/model/schema~Schema#isObject object element} or a topmost ancestor is not reached.
     *
     * @param position The position that the search will start from.
     * @param node The node for which an allowed parent should be found or its name.
     * @returns Allowed parent or null if nothing was found.
     */
    findAllowedParent(position, node) {
        let parent = position.parent;
        while (parent) {
            if (this.checkChild(parent, node)) {
                return parent;
            }
            // Do not split limit elements.
            if (this.isLimit(parent)) {
                return null;
            }
            parent = parent.parent;
        }
        return null;
    }
    /**
     * Sets attributes allowed by the schema on a given node.
     *
     * @param node A node to set attributes on.
     * @param attributes Attributes keys and values.
     * @param writer An instance of the model writer.
     */
    setAllowedAttributes(node, attributes, writer) {
        const model = writer.model;
        for (const [attributeName, attributeValue] of Object.entries(attributes)) {
            if (model.schema.checkAttribute(node, attributeName)) {
                writer.setAttribute(attributeName, attributeValue, node);
            }
        }
    }
    /**
     * Removes attributes disallowed by the schema.
     *
     * @param nodes Nodes that will be filtered.
     */
    removeDisallowedAttributes(nodes, writer) {
        for (const node of nodes) {
            // When node is a `Text` it has no children, so just filter it out.
            if (node.is('$text')) {
                removeDisallowedAttributeFromNode(this, node, writer);
            }
            // In a case of `Element` iterates through positions between nodes inside this element
            // and filter out node before the current position, or position parent when position
            // is at start of an element. Using positions prevent from omitting merged nodes
            // see https://github.com/ckeditor/ckeditor5-engine/issues/1789.
            else {
                const rangeInNode = Range._createIn(node);
                const positionsInRange = rangeInNode.getPositions();
                for (const position of positionsInRange) {
                    const item = position.nodeBefore || position.parent;
                    removeDisallowedAttributeFromNode(this, item, writer);
                }
            }
        }
    }
    /**
     * Gets attributes of a node that have a given property.
     *
     * @param node Node to get attributes from.
     * @param propertyName Name of the property that attribute must have to return it.
     * @param propertyValue Desired value of the property that we want to check.
     * When `undefined` attributes will be returned if they have set a given property no matter what the value is. If specified it will
     * return attributes which given property's value is equal to this parameter.
     * @returns Object with attributes' names as key and attributes' values as value.
     */
    getAttributesWithProperty(node, propertyName, propertyValue) {
        const attributes = {};
        for (const [attributeName, attributeValue] of node.getAttributes()) {
            const attributeProperties = this.getAttributeProperties(attributeName);
            if (attributeProperties[propertyName] === undefined) {
                continue;
            }
            if (propertyValue === undefined || propertyValue === attributeProperties[propertyName]) {
                attributes[attributeName] = attributeValue;
            }
        }
        return attributes;
    }
    /**
     * Creates an instance of the schema context.
     */
    createContext(context) {
        return new SchemaContext(context);
    }
    _clearCache() {
        this._compiledDefinitions = null;
    }
    _compile() {
        const compiledDefinitions = {};
        const sourceRules = this._sourceDefinitions;
        const itemNames = Object.keys(sourceRules);
        for (const itemName of itemNames) {
            compiledDefinitions[itemName] = compileBaseItemRule(sourceRules[itemName], itemName);
        }
        for (const itemName of itemNames) {
            compileAllowChildren(compiledDefinitions, itemName);
        }
        for (const itemName of itemNames) {
            compileAllowContentOf(compiledDefinitions, itemName);
        }
        for (const itemName of itemNames) {
            compileAllowWhere(compiledDefinitions, itemName);
        }
        for (const itemName of itemNames) {
            compileAllowAttributesOf(compiledDefinitions, itemName);
            compileInheritPropertiesFrom(compiledDefinitions, itemName);
        }
        for (const itemName of itemNames) {
            cleanUpAllowIn(compiledDefinitions, itemName);
            setupAllowChildren(compiledDefinitions, itemName);
            cleanUpAllowAttributes(compiledDefinitions, itemName);
        }
        this._compiledDefinitions = compiledDefinitions;
    }
    _checkContextMatch(def, context, contextItemIndex = context.length - 1) {
        const contextItem = context.getItem(contextItemIndex);
        if (def.allowIn.includes(contextItem.name)) {
            if (contextItemIndex == 0) {
                return true;
            }
            else {
                const parentRule = this.getDefinition(contextItem);
                return this._checkContextMatch(parentRule, context, contextItemIndex - 1);
            }
        }
        else {
            return false;
        }
    }
    /**
     * Takes a flat range and an attribute name. Traverses the range recursively and deeply to find and return all ranges
     * inside the given range on which the attribute can be applied.
     *
     * This is a helper function for {@link ~Schema#getValidRanges}.
     *
     * @param range The range to process.
     * @param attribute The name of the attribute to check.
     * @returns Ranges in which the attribute is allowed.
     */
    *_getValidRangesForRange(range, attribute) {
        let start = range.start;
        let end = range.start;
        for (const item of range.getItems({ shallow: true })) {
            if (item.is('element')) {
                yield* this._getValidRangesForRange(Range._createIn(item), attribute);
            }
            if (!this.checkAttribute(item, attribute)) {
                if (!start.isEqual(end)) {
                    yield new Range(start, end);
                }
                start = Position._createAfter(item);
            }
            end = Position._createAfter(item);
        }
        if (!start.isEqual(end)) {
            yield new Range(start, end);
        }
    }
}
/**
 * A schema context &mdash; a list of ancestors of a given position in the document.
 *
 * Considering such position:
 *
 * ```xml
 * <$root>
 * 	<blockQuote>
 * 		<paragraph>
 * 			^
 * 		</paragraph>
 * 	</blockQuote>
 * </$root>
 * ```
 *
 * The context of this position is its {@link module:engine/model/position~Position#getAncestors lists of ancestors}:
 *
 *		[ rootElement, blockQuoteElement, paragraphElement ]
 *
 * Contexts are used in the {@link module:engine/model/schema~Schema#event:checkChild `Schema#checkChild`} and
 * {@link module:engine/model/schema~Schema#event:checkAttribute `Schema#checkAttribute`} events as a definition
 * of a place in the document where the check occurs. The context instances are created based on the first arguments
 * of the {@link module:engine/model/schema~Schema#checkChild `Schema#checkChild()`} and
 * {@link module:engine/model/schema~Schema#checkAttribute `Schema#checkAttribute()`} methods so when
 * using these methods you need to use {@link module:engine/model/schema~SchemaContextDefinition}s.
 */
export class SchemaContext {
    /**
     * Creates an instance of the context.
     */
    constructor(context) {
        if (context instanceof SchemaContext) {
            return context;
        }
        let items;
        if (typeof context == 'string') {
            items = [context];
        }
        else if (!Array.isArray(context)) {
            // `context` is item or position.
            // Position#getAncestors() doesn't accept any parameters but it works just fine here.
            items = context.getAncestors({ includeSelf: true });
        }
        else {
            items = context;
        }
        this._items = items.map(mapContextItem);
    }
    /**
     * The number of items.
     */
    get length() {
        return this._items.length;
    }
    /**
     * The last item (the lowest node).
     */
    get last() {
        return this._items[this._items.length - 1];
    }
    /**
     * Iterable interface.
     *
     * Iterates over all context items.
     */
    [Symbol.iterator]() {
        return this._items[Symbol.iterator]();
    }
    /**
     * Returns a new schema context instance with an additional item.
     *
     * Item can be added as:
     *
     * ```ts
     * const context = new SchemaContext( [ '$root' ] );
     *
     * // An element.
     * const fooElement = writer.createElement( 'fooElement' );
     * const newContext = context.push( fooElement ); // [ '$root', 'fooElement' ]
     *
     * // A text node.
     * const text = writer.createText( 'foobar' );
     * const newContext = context.push( text ); // [ '$root', '$text' ]
     *
     * // A string (element name).
     * const newContext = context.push( 'barElement' ); // [ '$root', 'barElement' ]
     * ```
     *
     * **Note** {@link module:engine/model/node~Node} that is already in the model tree will be added as the only item
     * (without ancestors).
     *
     * @param item An item that will be added to the current context.
     * @returns A new schema context instance with an additional item.
     */
    push(item) {
        const ctx = new SchemaContext([item]);
        ctx._items = [...this._items, ...ctx._items];
        return ctx;
    }
    /**
     * Gets an item on the given index.
     */
    getItem(index) {
        return this._items[index];
    }
    /**
     * Returns the names of items.
     */
    *getNames() {
        yield* this._items.map(item => item.name);
    }
    /**
     * Checks whether the context ends with the given nodes.
     *
     * ```ts
     * const ctx = new SchemaContext( [ rootElement, paragraphElement, textNode ] );
     *
     * ctx.endsWith( '$text' ); // -> true
     * ctx.endsWith( 'paragraph $text' ); // -> true
     * ctx.endsWith( '$root' ); // -> false
     * ctx.endsWith( 'paragraph' ); // -> false
     * ```
     */
    endsWith(query) {
        return Array.from(this.getNames()).join(' ').endsWith(query);
    }
    /**
     * Checks whether the context starts with the given nodes.
     *
     * ```ts
     * const ctx = new SchemaContext( [ rootElement, paragraphElement, textNode ] );
     *
     * ctx.endsWith( '$root' ); // -> true
     * ctx.endsWith( '$root paragraph' ); // -> true
     * ctx.endsWith( '$text' ); // -> false
     * ctx.endsWith( 'paragraph' ); // -> false
     * ```
     */
    startsWith(query) {
        return Array.from(this.getNames()).join(' ').startsWith(query);
    }
}
function compileBaseItemRule(sourceItemRules, itemName) {
    const itemRule = {
        name: itemName,
        allowIn: [],
        allowContentOf: [],
        allowWhere: [],
        allowAttributes: [],
        allowAttributesOf: [],
        allowChildren: [],
        inheritTypesFrom: []
    };
    copyTypes(sourceItemRules, itemRule);
    copyProperty(sourceItemRules, itemRule, 'allowIn');
    copyProperty(sourceItemRules, itemRule, 'allowContentOf');
    copyProperty(sourceItemRules, itemRule, 'allowWhere');
    copyProperty(sourceItemRules, itemRule, 'allowAttributes');
    copyProperty(sourceItemRules, itemRule, 'allowAttributesOf');
    copyProperty(sourceItemRules, itemRule, 'allowChildren');
    copyProperty(sourceItemRules, itemRule, 'inheritTypesFrom');
    makeInheritAllWork(sourceItemRules, itemRule);
    return itemRule;
}
function compileAllowChildren(compiledDefinitions, itemName) {
    const item = compiledDefinitions[itemName];
    for (const allowChildrenItem of item.allowChildren) {
        const allowedChildren = compiledDefinitions[allowChildrenItem];
        // The allowChildren property may point to an unregistered element.
        if (!allowedChildren) {
            continue;
        }
        allowedChildren.allowIn.push(itemName);
    }
    // The allowIn property already includes correct items, reset the allowChildren property
    // to avoid duplicates later when setting up compilation results.
    item.allowChildren.length = 0;
}
function compileAllowContentOf(compiledDefinitions, itemName) {
    for (const allowContentOfItemName of compiledDefinitions[itemName].allowContentOf) {
        // The allowContentOf property may point to an unregistered element.
        if (compiledDefinitions[allowContentOfItemName]) {
            const allowedChildren = getAllowedChildren(compiledDefinitions, allowContentOfItemName);
            allowedChildren.forEach(allowedItem => {
                allowedItem.allowIn.push(itemName);
            });
        }
    }
    delete compiledDefinitions[itemName].allowContentOf;
}
function compileAllowWhere(compiledDefinitions, itemName) {
    for (const allowWhereItemName of compiledDefinitions[itemName].allowWhere) {
        const inheritFrom = compiledDefinitions[allowWhereItemName];
        // The allowWhere property may point to an unregistered element.
        if (inheritFrom) {
            const allowedIn = inheritFrom.allowIn;
            compiledDefinitions[itemName].allowIn.push(...allowedIn);
        }
    }
    delete compiledDefinitions[itemName].allowWhere;
}
function compileAllowAttributesOf(compiledDefinitions, itemName) {
    for (const allowAttributeOfItem of compiledDefinitions[itemName].allowAttributesOf) {
        const inheritFrom = compiledDefinitions[allowAttributeOfItem];
        if (inheritFrom) {
            const inheritAttributes = inheritFrom.allowAttributes;
            compiledDefinitions[itemName].allowAttributes.push(...inheritAttributes);
        }
    }
    delete compiledDefinitions[itemName].allowAttributesOf;
}
function compileInheritPropertiesFrom(compiledDefinitions, itemName) {
    const item = compiledDefinitions[itemName];
    for (const inheritPropertiesOfItem of item.inheritTypesFrom) {
        const inheritFrom = compiledDefinitions[inheritPropertiesOfItem];
        if (inheritFrom) {
            const typeNames = Object.keys(inheritFrom).filter(name => name.startsWith('is'));
            for (const name of typeNames) {
                if (!(name in item)) {
                    item[name] = inheritFrom[name];
                }
            }
        }
    }
    delete item.inheritTypesFrom;
}
// Remove items which weren't registered (because it may break some checks or we'd need to complicate them).
// Make sure allowIn doesn't contain repeated values.
function cleanUpAllowIn(compiledDefinitions, itemName) {
    const itemRule = compiledDefinitions[itemName];
    const existingItems = itemRule.allowIn.filter(itemToCheck => compiledDefinitions[itemToCheck]);
    itemRule.allowIn = Array.from(new Set(existingItems));
}
// Setup allowChildren items based on allowIn.
function setupAllowChildren(compiledDefinitions, itemName) {
    const itemRule = compiledDefinitions[itemName];
    for (const allowedParentItemName of itemRule.allowIn) {
        const allowedParentItem = compiledDefinitions[allowedParentItemName];
        allowedParentItem.allowChildren.push(itemName);
    }
}
function cleanUpAllowAttributes(compiledDefinitions, itemName) {
    const itemRule = compiledDefinitions[itemName];
    itemRule.allowAttributes = Array.from(new Set(itemRule.allowAttributes));
}
function copyTypes(sourceItemRules, itemRule) {
    for (const sourceItemRule of sourceItemRules) {
        const typeNames = Object.keys(sourceItemRule).filter(name => name.startsWith('is'));
        for (const name of typeNames) {
            itemRule[name] = !!sourceItemRule[name];
        }
    }
}
function copyProperty(sourceItemRules, itemRule, propertyName) {
    for (const sourceItemRule of sourceItemRules) {
        const value = sourceItemRule[propertyName];
        if (typeof value == 'string') {
            itemRule[propertyName].push(value);
        }
        else if (Array.isArray(value)) {
            itemRule[propertyName].push(...value);
        }
    }
}
function makeInheritAllWork(sourceItemRules, itemRule) {
    for (const sourceItemRule of sourceItemRules) {
        const inheritFrom = sourceItemRule.inheritAllFrom;
        if (inheritFrom) {
            itemRule.allowContentOf.push(inheritFrom);
            itemRule.allowWhere.push(inheritFrom);
            itemRule.allowAttributesOf.push(inheritFrom);
            itemRule.inheritTypesFrom.push(inheritFrom);
        }
    }
}
function getAllowedChildren(compiledDefinitions, itemName) {
    const itemRule = compiledDefinitions[itemName];
    return getValues(compiledDefinitions).filter(def => def.allowIn.includes(itemRule.name));
}
function getValues(obj) {
    return Object.keys(obj).map(key => obj[key]);
}
function mapContextItem(ctxItem) {
    if (typeof ctxItem == 'string' || ctxItem.is('documentFragment')) {
        return {
            name: typeof ctxItem == 'string' ? ctxItem : '$documentFragment',
            *getAttributeKeys() { },
            getAttribute() { }
        };
    }
    else {
        return {
            // '$text' means text nodes and text proxies.
            name: ctxItem.is('element') ? ctxItem.name : '$text',
            *getAttributeKeys() {
                yield* ctxItem.getAttributeKeys();
            },
            getAttribute(key) {
                return ctxItem.getAttribute(key);
            }
        };
    }
}
/**
 * Generator function returning values from provided walkers, switching between them at each iteration. If only one walker
 * is provided it will return data only from that walker.
 *
 * @param backward Walker iterating in backward direction.
 * @param forward Walker iterating in forward direction.
 * @returns Object returned at each iteration contains `value` and `walker` (informing which walker returned
 * given value) fields.
 */
function* combineWalkers(backward, forward) {
    let done = false;
    while (!done) {
        done = true;
        if (backward) {
            const step = backward.next();
            if (!step.done) {
                done = false;
                yield {
                    walker: backward,
                    value: step.value
                };
            }
        }
        if (forward) {
            const step = forward.next();
            if (!step.done) {
                done = false;
                yield {
                    walker: forward,
                    value: step.value
                };
            }
        }
    }
}
/**
 * Takes an array of non-intersecting ranges. For each of them gets minimal flat ranges covering that range and returns
 * all those minimal flat ranges.
 *
 * @param ranges Ranges to process.
 * @returns Minimal flat ranges of given `ranges`.
 */
function* convertToMinimalFlatRanges(ranges) {
    for (const range of ranges) {
        yield* range.getMinimalFlatRanges();
    }
}
function removeDisallowedAttributeFromNode(schema, node, writer) {
    for (const attribute of node.getAttributeKeys()) {
        if (!schema.checkAttribute(node, attribute)) {
            writer.removeAttribute(attribute, node);
        }
    }
}
