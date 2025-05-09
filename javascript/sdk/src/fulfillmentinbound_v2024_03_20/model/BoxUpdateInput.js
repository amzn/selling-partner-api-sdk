/**
 * The Selling Partner API for FBA inbound operations.
 * The Selling Partner API for Fulfillment By Amazon (FBA) Inbound. The FBA Inbound API enables building inbound workflows to create, manage, and send shipments into Amazon's fulfillment network. The API has interoperability with the Send-to-Amazon user interface.
 *
 * The version of the OpenAPI document: 2024-03-20
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import { ApiClient } from '../ApiClient.js'
import { BoxContentInformationSource } from './BoxContentInformationSource.js'
import { Dimensions } from './Dimensions.js'
import { ItemInput } from './ItemInput.js'
import { Weight } from './Weight.js'

/**
 * The BoxUpdateInput model module.
 * @module fulfillmentinbound_v2024_03_20/model/BoxUpdateInput
 * @version 2024-03-20
 */
export class BoxUpdateInput {
  /**
   * Constructs a new <code>BoxUpdateInput</code>.
   * Input information for updating a box
   * @alias module:fulfillmentinbound_v2024_03_20/model/BoxUpdateInput
   * @class
   * @param contentInformationSource {module:fulfillmentinbound_v2024_03_20/model/BoxContentInformationSource}
   * @param dimensions {module:fulfillmentinbound_v2024_03_20/model/Dimensions}
   * @param quantity {Number} The number of containers where all other properties like weight or dimensions are identical.
   * @param weight {module:fulfillmentinbound_v2024_03_20/model/Weight}
   */
  constructor (contentInformationSource, dimensions, quantity, weight) {
    this.contentInformationSource = contentInformationSource
    this.dimensions = dimensions
    this.quantity = quantity
    this.weight = weight
  }

  /**
   * Constructs a <code>BoxUpdateInput</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:fulfillmentinbound_v2024_03_20/model/BoxUpdateInput} obj Optional instance to populate.
   * @return {module:fulfillmentinbound_v2024_03_20/model/BoxUpdateInput} The populated <code>BoxUpdateInput</code> instance.
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
      obj = obj || new BoxUpdateInput()
      if (data.hasOwnProperty('contentInformationSource')) { obj.contentInformationSource = BoxContentInformationSource.constructFromObject(data.contentInformationSource) }
      if (data.hasOwnProperty('dimensions')) { obj.dimensions = Dimensions.constructFromObject(data.dimensions) }
      if (data.hasOwnProperty('items')) { obj.items = ApiClient.convertToType(data.items, [ItemInput]) }
      if (data.hasOwnProperty('packageId')) { obj.packageId = ApiClient.convertToType(data.packageId, 'String') }
      if (data.hasOwnProperty('quantity')) { obj.quantity = ApiClient.convertToType(data.quantity, 'Number') }
      if (data.hasOwnProperty('weight')) { obj.weight = Weight.constructFromObject(data.weight) }
    }
    return obj
  }
}

/**
 * @member {module:fulfillmentinbound_v2024_03_20/model/BoxContentInformationSource} contentInformationSource
 */
BoxUpdateInput.prototype.contentInformationSource = undefined

/**
 * @member {module:fulfillmentinbound_v2024_03_20/model/Dimensions} dimensions
 */
BoxUpdateInput.prototype.dimensions = undefined

/**
 * The items and their quantity in the box. This must be empty if the box `contentInformationSource` is `BARCODE_2D` or `MANUAL_PROCESS`.
 * @member {Array.<module:fulfillmentinbound_v2024_03_20/model/ItemInput>} items
 */
BoxUpdateInput.prototype.items = undefined

/**
 * Primary key to uniquely identify a Box Package. PackageId must be provided if the intent is to update an existing box. Adding a new box will not require providing this value. Any existing PackageIds not provided will be treated as to-be-removed
 * @member {String} packageId
 */
BoxUpdateInput.prototype.packageId = undefined

/**
 * The number of containers where all other properties like weight or dimensions are identical.
 * @member {Number} quantity
 */
BoxUpdateInput.prototype.quantity = undefined

/**
 * @member {module:fulfillmentinbound_v2024_03_20/model/Weight} weight
 */
BoxUpdateInput.prototype.weight = undefined
