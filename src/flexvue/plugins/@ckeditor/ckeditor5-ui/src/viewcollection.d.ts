/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/**
 * @module ui/viewcollection
 */
import { Collection, type EmitterMixinDelegateChain } from '@ckeditor/ckeditor5-utils';
import type View from './view';
/**
 * Collects {@link module:ui/view~View} instances.
 *
 * ```ts
 * const parentView = new ParentView( locale );
 * const collection = new ViewCollection( locale );
 *
 * collection.setParent( parentView.element );
 *
 * const viewA = new ChildView( locale );
 * const viewB = new ChildView( locale );
 * ```
 *
 * View collection renders and manages view {@link module:ui/view~View#element elements}:
 *
 * ```ts
 * collection.add( viewA );
 * collection.add( viewB );
 *
 * console.log( parentView.element.firsChild ); // -> viewA.element
 * console.log( parentView.element.lastChild ); // -> viewB.element
 * ```
 *
 * It {@link module:ui/viewcollection~ViewCollection#delegate propagates} DOM events too:
 *
 * ```ts
 * // Delegate #click and #keydown events from viewA and viewB to the parentView.
 * collection.delegate( 'click' ).to( parentView );
 *
 * parentView.on( 'click', ( evt ) => {
 * 	console.log( `${ evt.source } has been clicked.` );
 * } );
 *
 * // This event will be delegated to the parentView.
 * viewB.fire( 'click' );
 * ```
 *
 * **Note**: A view collection can be used directly in the {@link module:ui/template~TemplateDefinition definition}
 * of a {@link module:ui/template~Template template}.
 */
export default class ViewCollection<TView extends View = View> extends Collection<TView> {
    id?: string;
    /**
     * A parent element within which child views are rendered and managed in DOM.
     */
    private _parentElement;
    /**
     * Creates a new instance of the {@link module:ui/viewcollection~ViewCollection}.
     *
     * @param initialItems The initial items of the collection.
     */
    constructor(initialItems?: Iterable<TView>);
    /**
     * Destroys the view collection along with child views.
     * See the view {@link module:ui/view~View#destroy} method.
     */
    destroy(): void;
    /**
     * Sets the parent HTML element of this collection. When parent is set, {@link #add adding} and
     * {@link #remove removing} views in the collection synchronizes their
     * {@link module:ui/view~View#element elements} in the parent element.
     *
     * @param element A new parent element.
     */
    setParent(elementOrDocFragment: DocumentFragment | HTMLElement): void;
    /**
     * Delegates selected events coming from within views in the collection to any
     * {@link module:utils/emittermixin~Emitter}.
     *
     * For the following views and collection:
     *
     * ```ts
     * const viewA = new View();
     * const viewB = new View();
     * const viewC = new View();
     *
     * const views = parentView.createCollection();
     *
     * views.delegate( 'eventX' ).to( viewB );
     * views.delegate( 'eventX', 'eventY' ).to( viewC );
     *
     * views.add( viewA );
     * ```
     *
     * the `eventX` is delegated (fired by) `viewB` and `viewC` along with `customData`:
     *
     * ```ts
     * viewA.fire( 'eventX', customData );
     * ```
     *
     * and `eventY` is delegated (fired by) `viewC` along with `customData`:
     *
     * ```ts
     * viewA.fire( 'eventY', customData );
     * ```
     *
     * See {@link module:utils/emittermixin~Emitter#delegate}.
     *
     * @param events {@link module:ui/view~View} event names to be delegated to another
     * {@link module:utils/emittermixin~Emitter}.
     * @returns Object with `to` property, a function which accepts the destination
     * of {@link module:utils/emittermixin~Emitter#delegate delegated} events.
     */
    delegate(...events: Array<string>): EmitterMixinDelegateChain;
    /**
     * This method {@link module:ui/view~View#render renders} a new view added to the collection.
     *
     * If the {@link #_parentElement parent element} of the collection is set, this method also adds
     * the view's {@link module:ui/view~View#element} as a child of the parent in DOM at a specified index.
     *
     * **Note**: If index is not specified, the view's element is pushed as the last child
     * of the parent element.
     *
     * @param view A new view added to the collection.
     * @param index An index the view holds in the collection. When not specified,
     * the view is added at the end.
     */
    private _renderViewIntoCollectionParent;
    /**
     * Removes a child view from the collection. If the {@link #setParent parent element} of the
     * collection has been set, the {@link module:ui/view~View#element element} of the view is also removed
     * in DOM, reflecting the order of the collection.
     *
     * See the {@link #add} method.
     *
     * @param subject The view to remove, its id or index in the collection.
     * @returns The removed view.
     */
    remove(subject: TView | number | string): TView;
}
