/**
 * Selling Partner API for Catalog Items
 * Use the Selling Partner API for Catalog Items to retrieve information about items in the Amazon catalog.  For more information, refer to the [Catalog Items API Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/:catalog-items-api-v2022-04-01-use-case-guide).
 *
 * The version of the OpenAPI document: 2022-04-01
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient.js';

/**
 * The ItemBrowseClassification model module.
 * @module catalogitems_v2022_04_01/model/ItemBrowseClassification
 * @version 2022-04-01
 */
export class ItemBrowseClassification {
  /**
   * Constructs a new <code>ItemBrowseClassification</code>.
   * Classification (browse node) for an Amazon catalog item.
   * @alias module:catalogitems_v2022_04_01/model/ItemBrowseClassification
   * @class
   * @param displayName {String} Display name for the classification.
   * @param classificationId {String} Identifier of the classification.
   */
  constructor(displayName, classificationId) {
    this.displayName = displayName;
    this.classificationId = classificationId;
  }

  /**
   * Constructs a <code>ItemBrowseClassification</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:catalogitems_v2022_04_01/model/ItemBrowseClassification} obj Optional instance to populate.
   * @return {module:catalogitems_v2022_04_01/model/ItemBrowseClassification} The populated <code>ItemBrowseClassification</code> instance.
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
      obj = obj || new ItemBrowseClassification();
      if (data.hasOwnProperty('displayName'))
        obj.displayName = ApiClient.convertToType(data['displayName'], 'String');
      if (data.hasOwnProperty('classificationId'))
        obj.classificationId = ApiClient.convertToType(data['classificationId'], 'String');
      if (data.hasOwnProperty('parent'))
        obj.parent = ItemBrowseClassification.constructFromObject(data['parent']);
    }
    return obj;
  }
}

/**
 * Display name for the classification.
 * @member {String} displayName
 */
ItemBrowseClassification.prototype.displayName = undefined;

/**
 * Identifier of the classification.
 * @member {String} classificationId
 */
ItemBrowseClassification.prototype.classificationId = undefined;

/**
 * @member {module:catalogitems_v2022_04_01/model/ItemBrowseClassification} parent
 */
ItemBrowseClassification.prototype.parent = undefined;


