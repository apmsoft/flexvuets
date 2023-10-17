/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import { isWidget } from 'ckeditor5/src/widget';
/**
 * Returns a table widget editing view element if one is selected.
 */
export function getSelectedTableWidget(selection) {
    const viewElement = selection.getSelectedElement();
    if (viewElement && isTableWidget(viewElement)) {
        return viewElement;
    }
    return null;
}
/**
 * Returns a table widget editing view element if one is among the selection's ancestors.
 */
export function getTableWidgetAncestor(selection) {
    const selectionPosition = selection.getFirstPosition();
    if (!selectionPosition) {
        return null;
    }
    let parent = selectionPosition.parent;
    while (parent) {
        if (parent.is('element') && isTableWidget(parent)) {
            return parent;
        }
        parent = parent.parent;
    }
    return null;
}
/**
 * Checks if a given view element is a table widget.
 */
function isTableWidget(viewElement) {
    return !!viewElement.getCustomProperty('table') && isWidget(viewElement);
}
