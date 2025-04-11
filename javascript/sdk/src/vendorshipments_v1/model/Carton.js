/**
 * Selling Partner API for Retail Procurement Shipments
 * The Selling Partner API for Retail Procurement Shipments provides programmatic access to retail shipping data for vendors.
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient.js';
import {ContainerIdentification} from './ContainerIdentification.js';
import {ContainerItem} from './ContainerItem.js';
import {Dimensions} from './Dimensions.js';
import {Weight} from './Weight.js';

/**
 * The Carton model module.
 * @module vendorshipments_v1/model/Carton
 * @version v1
 */
export class Carton {
  /**
   * Constructs a new <code>Carton</code>.
   * Details of the carton/package being shipped.
   * @alias module:vendorshipments_v1/model/Carton
   * @class
   * @param cartonSequenceNumber {String} Carton sequence number for the carton. The first carton will be 001, the second 002, and so on. This number is used as a reference to refer to this carton from the pallet level.
   * @param items {Array.<module:vendorshipments_v1/model/ContainerItem>} A list of container item details.
   */
  constructor(cartonSequenceNumber, items) {
    this.cartonSequenceNumber = cartonSequenceNumber;
    this.items = items;
  }

  /**
   * Constructs a <code>Carton</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:vendorshipments_v1/model/Carton} obj Optional instance to populate.
   * @return {module:vendorshipments_v1/model/Carton} The populated <code>Carton</code> instance.
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
      obj = obj || new Carton();
      if (data.hasOwnProperty('cartonIdentifiers'))
        obj.cartonIdentifiers = ApiClient.convertToType(data['cartonIdentifiers'], [ContainerIdentification]);
      if (data.hasOwnProperty('cartonSequenceNumber'))
        obj.cartonSequenceNumber = ApiClient.convertToType(data['cartonSequenceNumber'], 'String');
      if (data.hasOwnProperty('dimensions'))
        obj.dimensions = Dimensions.constructFromObject(data['dimensions']);
      if (data.hasOwnProperty('weight'))
        obj.weight = Weight.constructFromObject(data['weight']);
      if (data.hasOwnProperty('trackingNumber'))
        obj.trackingNumber = ApiClient.convertToType(data['trackingNumber'], 'String');
      if (data.hasOwnProperty('items'))
        obj.items = ApiClient.convertToType(data['items'], [ContainerItem]);
    }
    return obj;
  }
}

/**
 * A list of carton identifiers.
 * @member {Array.<module:vendorshipments_v1/model/ContainerIdentification>} cartonIdentifiers
 */
Carton.prototype.cartonIdentifiers = undefined;

/**
 * Carton sequence number for the carton. The first carton will be 001, the second 002, and so on. This number is used as a reference to refer to this carton from the pallet level.
 * @member {String} cartonSequenceNumber
 */
Carton.prototype.cartonSequenceNumber = undefined;

/**
 * @member {module:vendorshipments_v1/model/Dimensions} dimensions
 */
Carton.prototype.dimensions = undefined;

/**
 * @member {module:vendorshipments_v1/model/Weight} weight
 */
Carton.prototype.weight = undefined;

/**
 * This is required to be provided for every carton in the small parcel shipments.
 * @member {String} trackingNumber
 */
Carton.prototype.trackingNumber = undefined;

/**
 * A list of container item details.
 * @member {Array.<module:vendorshipments_v1/model/ContainerItem>} items
 */
Carton.prototype.items = undefined;


