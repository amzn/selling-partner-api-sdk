/**
 * The Selling Partner API for Amazon Warehousing and Distribution
 * The Selling Partner API for Amazon Warehousing and Distribution (AWD) provides programmatic access to information about AWD shipments and inventory.
 *
 * The version of the OpenAPI document: 2024-05-09
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient.js';
import {DistributionPackageQuantity} from './DistributionPackageQuantity.js';
import {InboundEligibilityStatus} from './InboundEligibilityStatus.js';
import {SkuIneligibilityReason} from './SkuIneligibilityReason.js';

/**
 * The SkuEligibility model module.
 * @module awd_v2024_05_09/model/SkuEligibility
 * @version 2024-05-09
 */
export class SkuEligibility {
  /**
   * Constructs a new <code>SkuEligibility</code>.
   * Represents eligibility of one SKU.
   * @alias module:awd_v2024_05_09/model/SkuEligibility
   * @class
   * @param packageQuantity {module:awd_v2024_05_09/model/DistributionPackageQuantity} 
   * @param status {module:awd_v2024_05_09/model/InboundEligibilityStatus} 
   */
  constructor(packageQuantity, status) {
    this.packageQuantity = packageQuantity;
    this.status = status;
  }

  /**
   * Constructs a <code>SkuEligibility</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:awd_v2024_05_09/model/SkuEligibility} obj Optional instance to populate.
   * @return {module:awd_v2024_05_09/model/SkuEligibility} The populated <code>SkuEligibility</code> instance.
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
      obj = obj || new SkuEligibility();
      if (data.hasOwnProperty('ineligibilityReasons'))
        obj.ineligibilityReasons = ApiClient.convertToType(data['ineligibilityReasons'], [SkuIneligibilityReason]);
      if (data.hasOwnProperty('packageQuantity'))
        obj.packageQuantity = DistributionPackageQuantity.constructFromObject(data['packageQuantity']);
      if (data.hasOwnProperty('status'))
        obj.status = InboundEligibilityStatus.constructFromObject(data['status']);
    }
    return obj;
  }
}

/**
 * If not eligible, these are list of error codes and descriptions.
 * @member {Array.<module:awd_v2024_05_09/model/SkuIneligibilityReason>} ineligibilityReasons
 */
SkuEligibility.prototype.ineligibilityReasons = undefined;

/**
 * @member {module:awd_v2024_05_09/model/DistributionPackageQuantity} packageQuantity
 */
SkuEligibility.prototype.packageQuantity = undefined;

/**
 * @member {module:awd_v2024_05_09/model/InboundEligibilityStatus} status
 */
SkuEligibility.prototype.status = undefined;


