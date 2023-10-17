/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/**
 * @module ckfinder/ckfinderui
 */
import { Plugin } from 'ckeditor5/src/core';
/**
 * The CKFinder UI plugin. It introduces the `'ckfinder'` toolbar button.
 */
export default class CKFinderUI extends Plugin {
    /**
     * @inheritDoc
     */
    static get pluginName(): "CKFinderUI";
    /**
     * @inheritDoc
     */
    init(): void;
}
