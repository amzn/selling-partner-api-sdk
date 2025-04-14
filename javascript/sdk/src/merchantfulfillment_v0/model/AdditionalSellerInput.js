/**
 * Selling Partner API for Merchant Fulfillment
 * With the Selling Partner API for Merchant Fulfillment, you can build applications that sellers can use to purchase shipping for non-Prime and Prime orders using Amazon's Buy Shipping Services.
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient.js';
import {Address} from './Address.js';
import {CurrencyAmount} from './CurrencyAmount.js';
import {Length} from './Length.js';
import {Weight} from './Weight.js';

/**
 * The AdditionalSellerInput model module.
 * @module merchantfulfillment_v0/model/AdditionalSellerInput
 * @version v0
 */
export class AdditionalSellerInput {
  /**
   * Constructs a new <code>AdditionalSellerInput</code>.
   * Additional information required to purchase shipping.
   * @alias module:merchantfulfillment_v0/model/AdditionalSellerInput
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>AdditionalSellerInput</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:merchantfulfillment_v0/model/AdditionalSellerInput} obj Optional instance to populate.
   * @return {module:merchantfulfillment_v0/model/AdditionalSellerInput} The populated <code>AdditionalSellerInput</code> instance.
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
      obj = obj || new AdditionalSellerInput();
      if (data.hasOwnProperty('DataType'))
        obj.dataType = ApiClient.convertToType(data['DataType'], 'String');
      if (data.hasOwnProperty('ValueAsString'))
        obj.valueAsString = ApiClient.convertToType(data['ValueAsString'], 'String');
      if (data.hasOwnProperty('ValueAsBoolean'))
        obj.valueAsBoolean = ApiClient.convertToType(data['ValueAsBoolean'], 'Boolean');
      if (data.hasOwnProperty('ValueAsInteger'))
        obj.valueAsInteger = ApiClient.convertToType(data['ValueAsInteger'], 'Number');
      if (data.hasOwnProperty('ValueAsTimestamp'))
        obj.valueAsTimestamp = ApiClient.convertToType(data['ValueAsTimestamp'], 'Date');
      if (data.hasOwnProperty('ValueAsAddress'))
        obj.valueAsAddress = Address.constructFromObject(data['ValueAsAddress']);
      if (data.hasOwnProperty('ValueAsWeight'))
        obj.valueAsWeight = Weight.constructFromObject(data['ValueAsWeight']);
      if (data.hasOwnProperty('ValueAsDimension'))
        obj.valueAsDimension = Length.constructFromObject(data['ValueAsDimension']);
      if (data.hasOwnProperty('ValueAsCurrency'))
        obj.valueAsCurrency = CurrencyAmount.constructFromObject(data['ValueAsCurrency']);
    }
    return obj;
  }
}

/**
 * The data type of the additional information.
 * @member {String} dataType
 */
AdditionalSellerInput.prototype.dataType = undefined;

/**
 * The value when the data type is string.
 * @member {String} valueAsString
 */
AdditionalSellerInput.prototype.valueAsString = undefined;

/**
 * The value when the data type is boolean.
 * @member {Boolean} valueAsBoolean
 */
AdditionalSellerInput.prototype.valueAsBoolean = undefined;

/**
 * The value when the data type is integer.
 * @member {Number} valueAsInteger
 */
AdditionalSellerInput.prototype.valueAsInteger = undefined;

/**
 * Date-time formatted timestamp.
 * @member {Date} valueAsTimestamp
 */
AdditionalSellerInput.prototype.valueAsTimestamp = undefined;

/**
 * @member {module:merchantfulfillment_v0/model/Address} valueAsAddress
 */
AdditionalSellerInput.prototype.valueAsAddress = undefined;

/**
 * @member {module:merchantfulfillment_v0/model/Weight} valueAsWeight
 */
AdditionalSellerInput.prototype.valueAsWeight = undefined;

/**
 * @member {module:merchantfulfillment_v0/model/Length} valueAsDimension
 */
AdditionalSellerInput.prototype.valueAsDimension = undefined;

/**
 * @member {module:merchantfulfillment_v0/model/CurrencyAmount} valueAsCurrency
 */
AdditionalSellerInput.prototype.valueAsCurrency = undefined;


