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

import { ApiClient } from '../ApiClient.js'

/**
 * The PatchOperation model module.
 * @module listingsitems_v2021_08_01/model/PatchOperation
 * @version 2021-08-01
 */
export class PatchOperation {
  /**
   * Constructs a new <code>PatchOperation</code>.
   * Individual JSON Patch operation for an HTTP PATCH request.
   * @alias module:listingsitems_v2021_08_01/model/PatchOperation
   * @class
   * @param op {module:listingsitems_v2021_08_01/model/PatchOperation.OpEnum} Type of JSON Patch operation. Supported JSON Patch operations include `add`, `replace`, `merge` and `delete`. Refer to <https://tools.ietf.org/html/rfc6902>.
   * @param path {String} JSON Pointer path of the element to patch. Refer to [JavaScript Object Notation (JSON) Patch](https://tools.ietf.org/html/rfc6902) for more information.
   */
  constructor (op, path) {
    this.op = op
    this.path = path
  }

  /**
   * Constructs a <code>PatchOperation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:listingsitems_v2021_08_01/model/PatchOperation} obj Optional instance to populate.
   * @return {module:listingsitems_v2021_08_01/model/PatchOperation} The populated <code>PatchOperation</code> instance.
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
      obj = obj || new PatchOperation()
      if (data.hasOwnProperty('op')) { obj.op = ApiClient.convertToType(data.op, 'String') }
      if (data.hasOwnProperty('path')) { obj.path = ApiClient.convertToType(data.path, 'String') }
      if (data.hasOwnProperty('value')) { obj.value = ApiClient.convertToType(data.value, [{ String: Object }]) }
    }
    return obj
  }
}

/**
 * Allowed values for the <code>op</code> property.
 * @enum {String}
 * @readonly
 */
PatchOperation.OpEnum = {

  /**
     * value: "add"
     * @const
     */
  add: 'add',

  /**
     * value: "replace"
     * @const
     */
  replace: 'replace',

  /**
     * value: "merge"
     * @const
     */
  merge: 'merge',

  /**
     * value: "delete"
     * @const
     */
  delete: 'delete'
}

/**
 * Type of JSON Patch operation. Supported JSON Patch operations include `add`, `replace`, `merge` and `delete`. Refer to <https://tools.ietf.org/html/rfc6902>.
 * @member {module:listingsitems_v2021_08_01/model/PatchOperation.OpEnum} op
 */
PatchOperation.prototype.op = undefined

/**
 * JSON Pointer path of the element to patch. Refer to [JavaScript Object Notation (JSON) Patch](https://tools.ietf.org/html/rfc6902) for more information.
 * @member {String} path
 */
PatchOperation.prototype.path = undefined

/**
 * JSON value to `add`, `replace`, `merge` or `delete`.
 * @member {Array.<Object.<String, Object>>} value
 */
PatchOperation.prototype.value = undefined
