/**
 * The Selling Partner API for FBA inbound operations.
 * The Selling Partner API for Fulfillment By Amazon (FBA) Inbound. The FBA Inbound API enables building inbound workflows to create, manage, and send shipments into Amazon's fulfillment network. The API has interoperability with the Send-to-Amazon user interface.
 *
 * The version of the OpenAPI document: 2024-03-20
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient.js';
import {UnitOfWeight} from './UnitOfWeight.js';

/**
 * The WeightRange model module.
 * @module fulfillmentinbound_v2024_03_20/model/WeightRange
 * @version 2024-03-20
 */
export class WeightRange {
  /**
   * Constructs a new <code>WeightRange</code>.
   * The range of weights that are allowed for a package.
   * @alias module:fulfillmentinbound_v2024_03_20/model/WeightRange
   * @class
   * @param maximum {Number} Maximum allowed weight.
   * @param minimum {Number} Minimum allowed weight.
   * @param unit {module:fulfillmentinbound_v2024_03_20/model/UnitOfWeight} 
   */
  constructor(maximum, minimum, unit) {
    this.maximum = maximum;
    this.minimum = minimum;
    this.unit = unit;
  }

  /**
   * Constructs a <code>WeightRange</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:fulfillmentinbound_v2024_03_20/model/WeightRange} obj Optional instance to populate.
   * @return {module:fulfillmentinbound_v2024_03_20/model/WeightRange} The populated <code>WeightRange</code> instance.
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
      obj = obj || new WeightRange();
      if (data.hasOwnProperty('maximum'))
        obj.maximum = ApiClient.convertToType(data['maximum'], 'Number');
      if (data.hasOwnProperty('minimum'))
        obj.minimum = ApiClient.convertToType(data['minimum'], 'Number');
      if (data.hasOwnProperty('unit'))
        obj.unit = UnitOfWeight.constructFromObject(data['unit']);
    }
    return obj;
  }
}

/**
 * Maximum allowed weight.
 * @member {Number} maximum
 */
WeightRange.prototype.maximum = undefined;

/**
 * Minimum allowed weight.
 * @member {Number} minimum
 */
WeightRange.prototype.minimum = undefined;

/**
 * @member {module:fulfillmentinbound_v2024_03_20/model/UnitOfWeight} unit
 */
WeightRange.prototype.unit = undefined;


