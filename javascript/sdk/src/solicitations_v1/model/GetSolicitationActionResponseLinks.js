/**
 * Selling Partner API for Solicitations
 * With the Solicitations API you can build applications that send non-critical solicitations to buyers. You can get a list of solicitation types that are available for an order that you specify, then call an operation that sends a solicitation to the buyer for that order. Buyers cannot respond to solicitations sent by this API, and these solicitations do not appear in the Messaging section of Seller Central or in the recipient's Message Center. The Solicitations API returns responses that are formed according to the <a href=https://tools.ietf.org/html/draft-kelly-json-hal-08>JSON Hypertext Application Language</a> (HAL) standard.
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
import {LinkObject} from './LinkObject.js';

/**
 * The GetSolicitationActionResponseLinks model module.
 * @module solicitations_v1/model/GetSolicitationActionResponseLinks
 * @version v1
 */
export class GetSolicitationActionResponseLinks {
  /**
   * Constructs a new <code>GetSolicitationActionResponseLinks</code>.
   * @alias module:solicitations_v1/model/GetSolicitationActionResponseLinks
   * @class
   * @param self {module:solicitations_v1/model/LinkObject} 
   * @param schema {module:solicitations_v1/model/LinkObject} 
   */
  constructor(self, schema) {
    this.self = self;
    this.schema = schema;
  }

  /**
   * Constructs a <code>GetSolicitationActionResponseLinks</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:solicitations_v1/model/GetSolicitationActionResponseLinks} obj Optional instance to populate.
   * @return {module:solicitations_v1/model/GetSolicitationActionResponseLinks} The populated <code>GetSolicitationActionResponseLinks</code> instance.
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
      obj = obj || new GetSolicitationActionResponseLinks();
      if (data.hasOwnProperty('self'))
        obj.self = LinkObject.constructFromObject(data['self']);
      if (data.hasOwnProperty('schema'))
        obj.schema = LinkObject.constructFromObject(data['schema']);
    }
    return obj;
  }
}

/**
 * @member {module:solicitations_v1/model/LinkObject} self
 */
GetSolicitationActionResponseLinks.prototype.self = undefined;

/**
 * @member {module:solicitations_v1/model/LinkObject} schema
 */
GetSolicitationActionResponseLinks.prototype.schema = undefined;


