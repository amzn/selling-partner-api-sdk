/**
 * Selling Partner API for Listings Items
 * The Selling Partner API for Listings Items (Listings Items API) provides programmatic access to selling partner listings on Amazon. Use this API in collaboration with the Selling Partner API for Product Type Definitions, which you use to retrieve the information about Amazon product types needed to use the Listings Items API.  For more information, see the [Listings Items API Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/listings-items-api-v2021-08-01-use-case-guide).
 *
 * The version of the OpenAPI document: 2021-08-01
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient.js';

/**
 * The IssueExemption model module.
 * @module listingsitems_v2021_08_01/model/IssueExemption
 * @version 2021-08-01
 */
export class IssueExemption {
  /**
   * Constructs a new <code>IssueExemption</code>.
   * Conveying the status of the listed enforcement actions and, if applicable, provides information about the exemption&#39;s expiry date.
   * @alias module:listingsitems_v2021_08_01/model/IssueExemption
   * @class
   * @param status {module:listingsitems_v2021_08_01/model/IssueExemption.StatusEnum} This field indicates the current exemption status for the listed enforcement actions. It can take values such as `EXEMPT`, signifying permanent exemption, `EXEMPT_UNTIL_EXPIRY_DATE` indicating temporary exemption until a specified date, or `NOT_EXEMPT` signifying no exemptions, and enforcement actions were already applied.
   */
  constructor(status) {
    this.status = status;
  }

  /**
   * Constructs a <code>IssueExemption</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:listingsitems_v2021_08_01/model/IssueExemption} obj Optional instance to populate.
   * @return {module:listingsitems_v2021_08_01/model/IssueExemption} The populated <code>IssueExemption</code> instance.
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
      obj = obj || new IssueExemption();
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
      if (data.hasOwnProperty('expiryDate'))
        obj.expiryDate = ApiClient.convertToType(data['expiryDate'], 'Date');
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
IssueExemption['StatusEnum'] = {

    /**
     * value: "EXEMPT"
     * @const
     */
    "EXEMPT": "EXEMPT",

    /**
     * value: "EXEMPT_UNTIL_EXPIRY_DATE"
     * @const
     */
    "EXEMPT_UNTIL_EXPIRY_DATE": "EXEMPT_UNTIL_EXPIRY_DATE",

    /**
     * value: "NOT_EXEMPT"
     * @const
     */
    "NOT_EXEMPT": "NOT_EXEMPT"
};

/**
 * This field indicates the current exemption status for the listed enforcement actions. It can take values such as `EXEMPT`, signifying permanent exemption, `EXEMPT_UNTIL_EXPIRY_DATE` indicating temporary exemption until a specified date, or `NOT_EXEMPT` signifying no exemptions, and enforcement actions were already applied.
 * @member {module:listingsitems_v2021_08_01/model/IssueExemption.StatusEnum} status
 */
IssueExemption.prototype.status = undefined;

/**
 * This field represents the timestamp, following the ISO 8601 format, which specifies the date when temporary exemptions, if applicable, will expire, and Amazon will begin enforcing the listed actions.
 * @member {Date} expiryDate
 */
IssueExemption.prototype.expiryDate = undefined;


