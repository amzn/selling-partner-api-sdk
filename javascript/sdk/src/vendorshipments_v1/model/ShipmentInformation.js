/**
 * Selling Partner API for Retail Procurement Shipments
 * The Selling Partner API for Retail Procurement Shipments provides programmatic access to retail shipping data for vendors.
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
import {PartyIdentification} from './PartyIdentification.js';
import {VendorDetails} from './VendorDetails.js';

/**
 * The ShipmentInformation model module.
 * @module vendorshipments_v1/model/ShipmentInformation
 * @version v1
 */
export class ShipmentInformation {
  /**
   * Constructs a new <code>ShipmentInformation</code>.
   * Shipment Information details for Label request.
   * @alias module:vendorshipments_v1/model/ShipmentInformation
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ShipmentInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:vendorshipments_v1/model/ShipmentInformation} obj Optional instance to populate.
   * @return {module:vendorshipments_v1/model/ShipmentInformation} The populated <code>ShipmentInformation</code> instance.
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
      obj = obj || new ShipmentInformation();
      if (data.hasOwnProperty('vendorDetails'))
        obj.vendorDetails = VendorDetails.constructFromObject(data['vendorDetails']);
      if (data.hasOwnProperty('buyerReferenceNumber'))
        obj.buyerReferenceNumber = ApiClient.convertToType(data['buyerReferenceNumber'], 'String');
      if (data.hasOwnProperty('shipToParty'))
        obj.shipToParty = PartyIdentification.constructFromObject(data['shipToParty']);
      if (data.hasOwnProperty('shipFromParty'))
        obj.shipFromParty = PartyIdentification.constructFromObject(data['shipFromParty']);
      if (data.hasOwnProperty('warehouseId'))
        obj.warehouseId = ApiClient.convertToType(data['warehouseId'], 'String');
      if (data.hasOwnProperty('masterTrackingId'))
        obj.masterTrackingId = ApiClient.convertToType(data['masterTrackingId'], 'String');
      if (data.hasOwnProperty('totalLabelCount'))
        obj.totalLabelCount = ApiClient.convertToType(data['totalLabelCount'], 'Number');
      if (data.hasOwnProperty('shipMode'))
        obj.shipMode = ApiClient.convertToType(data['shipMode'], 'String');
    }
    return obj;
  }
}

/**
 * @member {module:vendorshipments_v1/model/VendorDetails} vendorDetails
 */
ShipmentInformation.prototype.vendorDetails = undefined;

/**
 * The buyer reference number is a unique identifier generated by the buyer for all Collect and WePay shipments.
 * @member {String} buyerReferenceNumber
 */
ShipmentInformation.prototype.buyerReferenceNumber = undefined;

/**
 * @member {module:vendorshipments_v1/model/PartyIdentification} shipToParty
 */
ShipmentInformation.prototype.shipToParty = undefined;

/**
 * @member {module:vendorshipments_v1/model/PartyIdentification} shipFromParty
 */
ShipmentInformation.prototype.shipFromParty = undefined;

/**
 * Vendor Warehouse ID from where the shipment is scheduled to be picked up by buyer / Carrier.
 * @member {String} warehouseId
 */
ShipmentInformation.prototype.warehouseId = undefined;

/**
 * Unique Id with  which  the shipment can be tracked for Small Parcels.
 * @member {String} masterTrackingId
 */
ShipmentInformation.prototype.masterTrackingId = undefined;

/**
 * Number of Labels that are created as part of this shipment.
 * @member {Number} totalLabelCount
 */
ShipmentInformation.prototype.totalLabelCount = undefined;

/**
 * Allowed values for the <code>shipMode</code> property.
 * @enum {String}
 * @readonly
 */
ShipmentInformation['ShipModeEnum'] = {

    /**
     * value: "SmallParcel"
     * @const
     */
    "SmallParcel": "SmallParcel",

    /**
     * value: "LTL"
     * @const
     */
    "LTL": "LTL"
};

/**
 * Type of shipment whether it is Small Parcel
 * @member {module:vendorshipments_v1/model/ShipmentInformation.ShipModeEnum} shipMode
 */
ShipmentInformation.prototype.shipMode = undefined;


