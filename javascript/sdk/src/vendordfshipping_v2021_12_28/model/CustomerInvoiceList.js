/**
 * Selling Partner API for Direct Fulfillment Shipping
 * Use the Selling Partner API for Direct Fulfillment Shipping to access a direct fulfillment vendor's shipping data.
 *
 * The version of the OpenAPI document: 2021-12-28
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient.js';
import {CustomerInvoice} from './CustomerInvoice.js';
import {Pagination} from './Pagination.js';

/**
 * The CustomerInvoiceList model module.
 * @module vendordfshipping_v2021_12_28/model/CustomerInvoiceList
 * @version 2021-12-28
 */
export class CustomerInvoiceList {
  /**
   * Constructs a new <code>CustomerInvoiceList</code>.
   * Represents a list of customer invoices, potentially paginated.
   * @alias module:vendordfshipping_v2021_12_28/model/CustomerInvoiceList
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>CustomerInvoiceList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:vendordfshipping_v2021_12_28/model/CustomerInvoiceList} obj Optional instance to populate.
   * @return {module:vendordfshipping_v2021_12_28/model/CustomerInvoiceList} The populated <code>CustomerInvoiceList</code> instance.
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
      obj = obj || new CustomerInvoiceList();
      if (data.hasOwnProperty('pagination'))
        obj.pagination = Pagination.constructFromObject(data['pagination']);
      if (data.hasOwnProperty('customerInvoices'))
        obj.customerInvoices = ApiClient.convertToType(data['customerInvoices'], [CustomerInvoice]);
    }
    return obj;
  }
}

/**
 * @member {module:vendordfshipping_v2021_12_28/model/Pagination} pagination
 */
CustomerInvoiceList.prototype.pagination = undefined;

/**
 * Represents a customer invoice within the `CustomerInvoiceList`.
 * @member {Array.<module:vendordfshipping_v2021_12_28/model/CustomerInvoice>} customerInvoices
 */
CustomerInvoiceList.prototype.customerInvoices = undefined;


