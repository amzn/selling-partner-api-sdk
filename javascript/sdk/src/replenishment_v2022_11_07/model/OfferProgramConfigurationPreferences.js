/**
 * Selling Partner API for Replenishment
 * The Selling Partner API for Replenishment (Replenishment API) provides programmatic access to replenishment program metrics and offers. These programs provide recurring delivery of any replenishable item at a frequency chosen by the customer.  The Replenishment API is available worldwide wherever Amazon Subscribe & Save is available or is supported. The API is available to vendors and FBA selling partners.
 *
 * The version of the OpenAPI document: 2022-11-07
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient.js';
import {AutoEnrollmentPreference} from './AutoEnrollmentPreference.js';

/**
 * The OfferProgramConfigurationPreferences model module.
 * @module replenishment_v2022_11_07/model/OfferProgramConfigurationPreferences
 * @version 2022-11-07
 */
export class OfferProgramConfigurationPreferences {
  /**
   * Constructs a new <code>OfferProgramConfigurationPreferences</code>.
   * An object which contains the preferences applied to the offer.
   * @alias module:replenishment_v2022_11_07/model/OfferProgramConfigurationPreferences
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>OfferProgramConfigurationPreferences</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:replenishment_v2022_11_07/model/OfferProgramConfigurationPreferences} obj Optional instance to populate.
   * @return {module:replenishment_v2022_11_07/model/OfferProgramConfigurationPreferences} The populated <code>OfferProgramConfigurationPreferences</code> instance.
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
      obj = obj || new OfferProgramConfigurationPreferences();
      if (data.hasOwnProperty('autoEnrollment'))
        obj.autoEnrollment = AutoEnrollmentPreference.constructFromObject(data['autoEnrollment']);
    }
    return obj;
  }
}

/**
 * @member {module:replenishment_v2022_11_07/model/AutoEnrollmentPreference} autoEnrollment
 */
OfferProgramConfigurationPreferences.prototype.autoEnrollment = undefined;


