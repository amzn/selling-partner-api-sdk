/**
 * Selling Partner API for Retail Procurement Payments
 * The Selling Partner API for Retail Procurement Payments provides programmatic access to vendors payments data.
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
import {Money} from './Money.js';

/**
 * The TaxDetails model module.
 * @module vendorinvoices_v1/model/TaxDetails
 * @version v1
 */
export class TaxDetails {
  /**
   * Constructs a new <code>TaxDetails</code>.
   * Details of tax amount applied.
   * @alias module:vendorinvoices_v1/model/TaxDetails
   * @class
   * @param taxType {module:vendorinvoices_v1/model/TaxDetails.TaxTypeEnum} Type of the tax applied.
   * @param taxAmount {module:vendorinvoices_v1/model/Money} 
   */
  constructor(taxType, taxAmount) {
    this.taxType = taxType;
    this.taxAmount = taxAmount;
  }

  /**
   * Constructs a <code>TaxDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:vendorinvoices_v1/model/TaxDetails} obj Optional instance to populate.
   * @return {module:vendorinvoices_v1/model/TaxDetails} The populated <code>TaxDetails</code> instance.
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
      obj = obj || new TaxDetails();
      if (data.hasOwnProperty('taxType'))
        obj.taxType = ApiClient.convertToType(data['taxType'], 'String');
      if (data.hasOwnProperty('taxRate'))
        obj.taxRate = ApiClient.convertToType(data['taxRate'], 'String');
      if (data.hasOwnProperty('taxAmount'))
        obj.taxAmount = Money.constructFromObject(data['taxAmount']);
      if (data.hasOwnProperty('taxableAmount'))
        obj.taxableAmount = Money.constructFromObject(data['taxableAmount']);
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>taxType</code> property.
 * @enum {String}
 * @readonly
 */
TaxDetails['TaxTypeEnum'] = {

    /**
     * value: "CGST"
     * @const
     */
    "CGST": "CGST",

    /**
     * value: "SGST"
     * @const
     */
    "SGST": "SGST",

    /**
     * value: "CESS"
     * @const
     */
    "CESS": "CESS",

    /**
     * value: "UTGST"
     * @const
     */
    "UTGST": "UTGST",

    /**
     * value: "IGST"
     * @const
     */
    "IGST": "IGST",

    /**
     * value: "MwSt."
     * @const
     */
    "MwSt.": "MwSt.",

    /**
     * value: "PST"
     * @const
     */
    "PST": "PST",

    /**
     * value: "TVA"
     * @const
     */
    "TVA": "TVA",

    /**
     * value: "VAT"
     * @const
     */
    "VAT": "VAT",

    /**
     * value: "GST"
     * @const
     */
    "GST": "GST",

    /**
     * value: "ST"
     * @const
     */
    "ST": "ST",

    /**
     * value: "Consumption"
     * @const
     */
    "Consumption": "Consumption",

    /**
     * value: "MutuallyDefined"
     * @const
     */
    "MutuallyDefined": "MutuallyDefined",

    /**
     * value: "DomesticVAT"
     * @const
     */
    "DomesticVAT": "DomesticVAT"
};

/**
 * Type of the tax applied.
 * @member {module:vendorinvoices_v1/model/TaxDetails.TaxTypeEnum} taxType
 */
TaxDetails.prototype.taxType = undefined;

/**
 * A decimal number with no loss of precision. Useful when precision loss is unacceptable, as with currencies. Follows RFC7159 for number representation. <br>**Pattern** : `^-?(0|([1-9]\\d*))(\\.\\d+)?([eE][+-]?\\d+)?$`.
 * @member {String} taxRate
 */
TaxDetails.prototype.taxRate = undefined;

/**
 * @member {module:vendorinvoices_v1/model/Money} taxAmount
 */
TaxDetails.prototype.taxAmount = undefined;

/**
 * @member {module:vendorinvoices_v1/model/Money} taxableAmount
 */
TaxDetails.prototype.taxableAmount = undefined;


