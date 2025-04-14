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
 * The ItemClassificationSalesRank model module.
 * @module catalogitems_v2022_04_01/model/ItemClassificationSalesRank
 * @version 2022-04-01
 */
export class ItemClassificationSalesRank {
  /**
   * Constructs a new <code>ItemClassificationSalesRank</code>.
   * Sales rank of an Amazon catalog item.
   * @alias module:catalogitems_v2022_04_01/model/ItemClassificationSalesRank
   * @class
   * @param classificationId {String} Identifier of the classification that is associated with the sales rank.
   * @param title {String} Name of the sales rank.
   * @param rank {Number} Sales rank.
   */
  constructor(classificationId, title, rank) {
    this.classificationId = classificationId;
    this.title = title;
    this.rank = rank;
  }

  /**
   * Constructs a <code>ItemClassificationSalesRank</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:catalogitems_v2022_04_01/model/ItemClassificationSalesRank} obj Optional instance to populate.
   * @return {module:catalogitems_v2022_04_01/model/ItemClassificationSalesRank} The populated <code>ItemClassificationSalesRank</code> instance.
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
      obj = obj || new ItemClassificationSalesRank();
      if (data.hasOwnProperty('classificationId'))
        obj.classificationId = ApiClient.convertToType(data['classificationId'], 'String');
      if (data.hasOwnProperty('title'))
        obj.title = ApiClient.convertToType(data['title'], 'String');
      if (data.hasOwnProperty('link'))
        obj.link = ApiClient.convertToType(data['link'], 'String');
      if (data.hasOwnProperty('rank'))
        obj.rank = ApiClient.convertToType(data['rank'], 'Number');
    }
    return obj;
  }
}

/**
 * Identifier of the classification that is associated with the sales rank.
 * @member {String} classificationId
 */
ItemClassificationSalesRank.prototype.classificationId = undefined;

/**
 * Name of the sales rank.
 * @member {String} title
 */
ItemClassificationSalesRank.prototype.title = undefined;

/**
 * Corresponding Amazon retail website URL for the sales category.
 * @member {String} link
 */
ItemClassificationSalesRank.prototype.link = undefined;

/**
 * Sales rank.
 * @member {Number} rank
 */
ItemClassificationSalesRank.prototype.rank = undefined;


