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
import {TextComponent} from './TextComponent.js';

/**
 * The StandardTextPairBlock model module.
 * @module apluscontent_v2020_11_01/model/StandardTextPairBlock
 * @version 2020-11-01
 */
export class StandardTextPairBlock {
  /**
   * Constructs a new <code>StandardTextPairBlock</code>.
   * The A+ Content standard label and description block, which contains a pair of text components.
   * @alias module:apluscontent_v2020_11_01/model/StandardTextPairBlock
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>StandardTextPairBlock</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:apluscontent_v2020_11_01/model/StandardTextPairBlock} obj Optional instance to populate.
   * @return {module:apluscontent_v2020_11_01/model/StandardTextPairBlock} The populated <code>StandardTextPairBlock</code> instance.
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
      obj = obj || new StandardTextPairBlock();
      if (data.hasOwnProperty('label'))
        obj.label = TextComponent.constructFromObject(data['label']);
      if (data.hasOwnProperty('description'))
        obj.description = TextComponent.constructFromObject(data['description']);
    }
    return obj;
  }
}

/**
 * @member {module:apluscontent_v2020_11_01/model/TextComponent} label
 */
StandardTextPairBlock.prototype.label = undefined;

/**
 * @member {module:apluscontent_v2020_11_01/model/TextComponent} description
 */
StandardTextPairBlock.prototype.description = undefined;


