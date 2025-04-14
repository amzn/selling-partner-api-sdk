/**
 * Selling Partner API for A+ Content Management
 * Use the A+ Content API to build applications that help selling partners add rich marketing content to their Amazon product detail pages. Selling partners can use A+ content to share their brand and product story, which helps buyers make informed purchasing decisions. Selling partners use content modules to add images and text.
 *
 * The version of the OpenAPI document: 2020-11-01
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient.js';
import {ContentDocument} from './ContentDocument.js';

/**
 * The PostContentDocumentRequest model module.
 * @module apluscontent_v2020_11_01/model/PostContentDocumentRequest
 * @version 2020-11-01
 */
export class PostContentDocumentRequest {
  /**
   * Constructs a new <code>PostContentDocumentRequest</code>.
   * @alias module:apluscontent_v2020_11_01/model/PostContentDocumentRequest
   * @class
   * @param contentDocument {module:apluscontent_v2020_11_01/model/ContentDocument} 
   */
  constructor(contentDocument) {
    this.contentDocument = contentDocument;
  }

  /**
   * Constructs a <code>PostContentDocumentRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:apluscontent_v2020_11_01/model/PostContentDocumentRequest} obj Optional instance to populate.
   * @return {module:apluscontent_v2020_11_01/model/PostContentDocumentRequest} The populated <code>PostContentDocumentRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      switch(typeof data) {
        case 'string':
          obj = String(data);
          break;
        case 'number':
          obj = Number(data);
          break;
        case 'boolean':
          obj = Boolean(data);
          break;
      }
      obj = obj || new PostContentDocumentRequest();
      if (data.hasOwnProperty('contentDocument'))
        obj.contentDocument = ContentDocument.constructFromObject(data['contentDocument']);
    }
    return obj;
  }
}

/**
 * @member {module:apluscontent_v2020_11_01/model/ContentDocument} contentDocument
 */
PostContentDocumentRequest.prototype.contentDocument = undefined;


