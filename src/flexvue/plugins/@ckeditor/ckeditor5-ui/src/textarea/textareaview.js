/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/**
 * @module ui/textarea/textareaview
 */
import { Rect, toUnit, getBorderWidths, global, CKEditorError } from '@ckeditor/ckeditor5-utils';
import InputBase from '../input/inputbase';
import '../../theme/components/input/input.css';
import '../../theme/components/textarea/textarea.css';
/**
 * The textarea view class.
 *
 * ```ts
 * const textareaView = new TextareaView();
 *
 * textareaView.minRows = 2;
 * textareaView.maxRows = 10;
 *
 * textareaView.render();
 *
 * document.body.append( textareaView.element );
 * ```
 */
export default class TextareaView extends InputBase {
    /**
     * @inheritDoc
     */
    constructor(locale) {
        super(locale);
        const toPx = toUnit('px');
        this.set('minRows', 2);
        this.set('maxRows', 5);
        this.set('_height', null);
        this.set('resize', 'none');
        this.on('change:minRows', this._validateMinMaxRows.bind(this));
        this.on('change:maxRows', this._validateMinMaxRows.bind(this));
        const bind = this.bindTemplate;
        this.template.tag = 'textarea';
        this.extendTemplate({
            attributes: {
                class: ['ck-textarea'],
                style: {
                    height: bind.to('_height', height => height ? toPx(height) : null),
                    resize: bind.to('resize')
                },
                rows: bind.to('minRows')
            }
        });
    }
    /**
     * @inheritDoc
     */
    render() {
        super.render();
        this.on('input', () => {
            this._updateAutoGrowHeight(true);
            this.fire('update');
        });
        this.on('change:value', () => {
            // The content needs to be updated by the browser after the value is changed. It takes a few ms.
            global.window.requestAnimationFrame(() => {
                this._updateAutoGrowHeight();
                this.fire('update');
            });
        });
    }
    /**
     * @inheritDoc
     */
    reset() {
        super.reset();
        this._updateAutoGrowHeight();
        this.fire('update');
    }
    /**
     * Updates the {@link #_height} of the view depending on {@link #minRows}, {@link #maxRows}, and the current content size.
     *
     * **Note**: This method overrides manual resize done by the user using a handle. It's a known bug.
     */
    _updateAutoGrowHeight(shouldScroll) {
        const viewElement = this.element;
        const singleLineContentClone = getTextareaElementClone(viewElement, '1');
        const fullTextValueClone = getTextareaElementClone(viewElement, viewElement.value);
        const singleLineContentStyles = singleLineContentClone.ownerDocument.defaultView.getComputedStyle(singleLineContentClone);
        const verticalPaddings = parseFloat(singleLineContentStyles.paddingTop) + parseFloat(singleLineContentStyles.paddingBottom);
        const borders = getBorderWidths(singleLineContentClone);
        const lineHeight = parseFloat(singleLineContentStyles.lineHeight);
        const verticalBorder = borders.top + borders.bottom;
        const singleLineAreaDefaultHeight = new Rect(singleLineContentClone).height;
        const numberOfLines = Math.round((fullTextValueClone.scrollHeight - verticalPaddings) / lineHeight);
        const maxHeight = this.maxRows * lineHeight + verticalPaddings + verticalBorder;
        // There's a --ck-ui-component-min-height CSS custom property that enforces min height of the component.
        // This min-height is relevant only when there's one line of text. Other than that, we can rely on line-height.
        const minHeight = numberOfLines === 1 ? singleLineAreaDefaultHeight : this.minRows * lineHeight + verticalPaddings + verticalBorder;
        // The size of textarea is controlled by height style instead of rows attribute because event though it is
        // a more complex solution, it is immune to the layout textarea has been rendered in (gird, flex).
        this._height = Math.min(Math.max(Math.max(numberOfLines, this.minRows) * lineHeight + verticalPaddings + verticalBorder, minHeight), maxHeight);
        if (shouldScroll) {
            viewElement.scrollTop = viewElement.scrollHeight;
        }
        singleLineContentClone.remove();
        fullTextValueClone.remove();
    }
    /**
     * Validates the {@link #minRows} and {@link #maxRows} properties and warns in the console if the configuration is incorrect.
     */
    _validateMinMaxRows() {
        if (this.minRows > this.maxRows) {
            /**
             * The minimum number of rows is greater than the maximum number of rows.
             *
             * @error ui-textarea-view-min-rows-greater-than-max-rows
             * @param textareaView The misconfigured textarea view instance.
             * @param minRows The value of `minRows` property.
             * @param maxRows The value of `maxRows` property.
             */
            throw new CKEditorError('ui-textarea-view-min-rows-greater-than-max-rows', {
                textareaView: this,
                minRows: this.minRows,
                maxRows: this.maxRows
            });
        }
    }
}
function getTextareaElementClone(element, value) {
    const clone = element.cloneNode();
    clone.style.position = 'absolute';
    clone.style.top = '-99999px';
    clone.style.left = '-99999px';
    clone.style.height = 'auto';
    clone.style.overflow = 'hidden';
    clone.style.width = element.ownerDocument.defaultView.getComputedStyle(element).width;
    clone.tabIndex = -1;
    clone.rows = 1;
    clone.value = value;
    element.parentNode.insertBefore(clone, element);
    return clone;
}
