/**
 * Selling Partner API for Services
 * With the Services API, you can build applications that help service providers get and modify their service orders and manage their resources.
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
import {Warning} from './Warning.js';

/**
 * The AssignAppointmentResourcesResponsePayload model module.
 * @module services_v1/model/AssignAppointmentResourcesResponsePayload
 * @version v1
 */
export class AssignAppointmentResourcesResponsePayload {
  /**
   * Constructs a new <code>AssignAppointmentResourcesResponsePayload</code>.
   * The payload for the &#x60;assignAppointmentResource&#x60; operation.
   * @alias module:services_v1/model/AssignAppointmentResourcesResponsePayload
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>AssignAppointmentResourcesResponsePayload</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:services_v1/model/AssignAppointmentResourcesResponsePayload} obj Optional instance to populate.
   * @return {module:services_v1/model/AssignAppointmentResourcesResponsePayload} The populated <code>AssignAppointmentResourcesResponsePayload</code> instance.
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
      obj = obj || new AssignAppointmentResourcesResponsePayload();
      if (data.hasOwnProperty('warnings'))
        obj.warnings = ApiClient.convertToType(data['warnings'], [Warning]);
    }
    return obj;
  }
}

/**
 * A list of warnings returned in the sucessful execution response of an API request.
 * @member {Array.<module:services_v1/model/Warning>} warnings
 */
AssignAppointmentResourcesResponsePayload.prototype.warnings = undefined;


