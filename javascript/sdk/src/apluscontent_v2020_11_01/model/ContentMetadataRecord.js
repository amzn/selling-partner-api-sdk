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
import {ContentMetadata} from './ContentMetadata.js';

/**
 * The ContentMetadataRecord model module.
 * @module apluscontent_v2020_11_01/model/ContentMetadataRecord
 * @version 2020-11-01
 */
export class ContentMetadataRecord {
  /**
   * Constructs a new <code>ContentMetadataRecord</code>.
   * The metadata for an A+ Content document, with additional information for content management.
   * @alias module:apluscontent_v2020_11_01/model/ContentMetadataRecord
   * @class
   * @param contentReferenceKey {String} A unique reference key for the A+ Content document. A content reference key cannot form a permalink and might change in the future. A content reference key is not guaranteed to match any A+ content identifier.
   * @param contentMetadata {module:apluscontent_v2020_11_01/model/ContentMetadata} 
   */
  constructor(contentReferenceKey, contentMetadata) {
    this.contentReferenceKey = contentReferenceKey;
    this.contentMetadata = contentMetadata;
  }

  /**
   * Constructs a <code>ContentMetadataRecord</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:apluscontent_v2020_11_01/model/ContentMetadataRecord} obj Optional instance to populate.
   * @return {module:apluscontent_v2020_11_01/model/ContentMetadataRecord} The populated <code>ContentMetadataRecord</code> instance.
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
      obj = obj || new ContentMetadataRecord();
      if (data.hasOwnProperty('contentReferenceKey'))
        obj.contentReferenceKey = ApiClient.convertToType(data['contentReferenceKey'], 'String');
      if (data.hasOwnProperty('contentMetadata'))
        obj.contentMetadata = ContentMetadata.constructFromObject(data['contentMetadata']);
    }
    return obj;
  }
}

/**
 * A unique reference key for the A+ Content document. A content reference key cannot form a permalink and might change in the future. A content reference key is not guaranteed to match any A+ content identifier.
 * @member {String} contentReferenceKey
 */
ContentMetadataRecord.prototype.contentReferenceKey = undefined;

/**
 * @member {module:apluscontent_v2020_11_01/model/ContentMetadata} contentMetadata
 */
ContentMetadataRecord.prototype.contentMetadata = undefined;


