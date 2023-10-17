var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/**
 * @module cloud-services/cloudservices
 */
import { ContextPlugin } from 'ckeditor5/src/core';
import { CKEditorError } from 'ckeditor5/src/utils';
import CloudServicesCore from "./cloudservicescore";
/**
 * Plugin introducing the integration between CKEditor 5 and CKEditor Cloud Services .
 *
 * It initializes the token provider based on
 * the {@link module:cloud-services/cloudservicesconfig~CloudServicesConfig `config.cloudService`}.
 */
export default class CloudServices extends ContextPlugin {
  constructor() {
    super(...arguments);
    /**
     * Other plugins use this token for the authorization process. It handles token requesting and refreshing.
     * Its value is `null` when {@link module:cloud-services/cloudservicesconfig~CloudServicesConfig#tokenUrl} is not provided.
     *
     * @readonly
     */
    this.token = null;
    /**
     * A map of token object instances keyed by the token URLs.
     */
    this._tokens = new Map();
  }
  /**
   * @inheritDoc
   */
  static get pluginName() {
    return 'CloudServices';
  }
  /**
   * @inheritDoc
   */
  static get requires() {
    return [CloudServicesCore];
  }
  /**
   * @inheritDoc
   */
  init() {
    return __awaiter(this, void 0, void 0, function* () {
      const config = this.context.config;
      const options = config.get('cloudServices') || {};
      for (const [key, value] of Object.entries(options)) {
        this[key] = value;
      }
      if (!this.tokenUrl) {
        this.token = null;
        return;
      }
      const cloudServicesCore = this.context.plugins.get('CloudServicesCore');
      this.token = yield cloudServicesCore.createToken(this.tokenUrl).init();
      this._tokens.set(this.tokenUrl, this.token);
    });
  }
  /**
   * Registers an additional authentication token URL for CKEditor Cloud Services or a callback to the token value promise. See the
   * {@link module:cloud-services/cloudservicesconfig~CloudServicesConfig#tokenUrl} for more details.
   *
   * @param tokenUrl The authentication token URL for CKEditor Cloud Services or a callback to the token value promise.
   */
  registerTokenUrl(tokenUrl) {
    return __awaiter(this, void 0, void 0, function* () {
      // Reuse the token instance in case of multiple features using the same token URL.
      if (this._tokens.has(tokenUrl)) {
        return this.getTokenFor(tokenUrl);
      }
      const cloudServicesCore = this.context.plugins.get('CloudServicesCore');
      const token = yield cloudServicesCore.createToken(tokenUrl).init();
      this._tokens.set(tokenUrl, token);
      return token;
    });
  }
  /**
   * Returns an authentication token provider previously registered by {@link #registerTokenUrl}.
   *
   * @param tokenUrl The authentication token URL for CKEditor Cloud Services or a callback to the token value promise.
   */
  getTokenFor(tokenUrl) {
    const token = this._tokens.get(tokenUrl);
    if (!token) {
      /**
       * The provided `tokenUrl` was not registered by {@link module:cloud-services/cloudservices~CloudServices#registerTokenUrl}.
       *
       * @error cloudservices-token-not-registered
       */
      throw new CKEditorError('cloudservices-token-not-registered', this);
    }
    return token;
  }
  /**
   * @inheritDoc
   */
  destroy() {
    super.destroy();
    for (const token of this._tokens.values()) {
      token.destroy();
    }
  }
}