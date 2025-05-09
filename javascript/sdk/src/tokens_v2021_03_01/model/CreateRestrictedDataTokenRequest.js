/**
 * Selling Partner API for Tokens
 * The Selling Partner API for Tokens provides a secure way to access a customer's PII (Personally Identifiable Information). You can call the Tokens API to get a Restricted Data Token (RDT) for one or more restricted resources that you specify. The RDT authorizes subsequent calls to restricted operations that correspond to the restricted resources that you specified.  For more information, see the [Tokens API Use Case Guide](doc:tokens-api-use-case-guide).
 *
 * The version of the OpenAPI document: 2021-03-01
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import { ApiClient } from '../ApiClient.js'
import { RestrictedResource } from './RestrictedResource.js'

/**
 * The CreateRestrictedDataTokenRequest model module.
 * @module tokens_v2021_03_01/model/CreateRestrictedDataTokenRequest
 * @version 2021-03-01
 */
export class CreateRestrictedDataTokenRequest {
  /**
   * Constructs a new <code>CreateRestrictedDataTokenRequest</code>.
   * The request schema for the createRestrictedDataToken operation.
   * @alias module:tokens_v2021_03_01/model/CreateRestrictedDataTokenRequest
   * @class
   * @param restrictedResources {Array.<module:tokens_v2021_03_01/model/RestrictedResource>} A list of restricted resources. Maximum: 50
   */
  constructor (restrictedResources) {
    this.restrictedResources = restrictedResources
  }

  /**
   * Constructs a <code>CreateRestrictedDataTokenRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:tokens_v2021_03_01/model/CreateRestrictedDataTokenRequest} obj Optional instance to populate.
   * @return {module:tokens_v2021_03_01/model/CreateRestrictedDataTokenRequest} The populated <code>CreateRestrictedDataTokenRequest</code> instance.
   */
  static constructFromObject (data, obj) {
    if (data) {
      switch (typeof data) {
        case 'string':
          obj = String(data)
          break
        case 'number':
          obj = Number(data)
          break
        case 'boolean':
          obj = Boolean(data)
          break
      }
      obj = obj || new CreateRestrictedDataTokenRequest()
      if (data.hasOwnProperty('targetApplication')) { obj.targetApplication = ApiClient.convertToType(data.targetApplication, 'String') }
      if (data.hasOwnProperty('restrictedResources')) { obj.restrictedResources = ApiClient.convertToType(data.restrictedResources, [RestrictedResource]) }
    }
    return obj
  }
}

/**
 * The application ID for the target application to which access is being delegated.
 * @member {String} targetApplication
 */
CreateRestrictedDataTokenRequest.prototype.targetApplication = undefined

/**
 * A list of restricted resources. Maximum: 50
 * @member {Array.<module:tokens_v2021_03_01/model/RestrictedResource>} restrictedResources
 */
CreateRestrictedDataTokenRequest.prototype.restrictedResources = undefined
