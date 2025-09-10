/**
 * The TransportationDetails model module.
 * @module vendorshipments_v1/model/TransportationDetails
 * @version v1
 */
export class TransportationDetails {
    /**
     * Constructs a <code>TransportationDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {TransportationDetails} obj Optional instance to populate.
     * @return {TransportationDetails} The populated <code>TransportationDetails</code> instance.
     */
    static constructFromObject(data: any, obj: TransportationDetails): TransportationDetails;
    /**
     * The type of shipment.
     * @member {String} shipMode
     * @type {String}
     */
    shipMode: string;
    /**
     * The mode of transportation for this shipment.
     * @member {String} transportationMode
     * @type {String}
     */
    transportationMode: string;
    /**
     * Date when shipment is performed by the Vendor to Buyer
     * @member {Date} shippedDate
     * @type {Date}
     */
    shippedDate: Date;
    /**
     * Estimated Date on which shipment will be delivered from Vendor to Buyer
     * @member {Date} estimatedDeliveryDate
     * @type {Date}
     */
    estimatedDeliveryDate: Date;
    /**
     * Date on which shipment will be delivered from Vendor to Buyer
     * @member {Date} shipmentDeliveryDate
     * @type {Date}
     */
    shipmentDeliveryDate: Date;
    /**
     * @member {CarrierDetails} carrierDetails
     * @type {CarrierDetails}
     */
    carrierDetails: CarrierDetails;
    /**
     * The Bill of Lading (BOL) number is a unique number assigned to each shipment of goods by the vendor or shipper during the creation of the Bill of Lading. This number must be unique for every shipment and cannot be a date/time or single character. The BOL numer is mandatory in Shipment Confirmation message for FTL and LTL shipments, and must match the paper BOL provided with the shipment. Instead of BOL, an alternative reference number (like Delivery Note Number) for the shipment can also be sent in this field.
     * @member {String} billOfLadingNumber
     * @type {String}
     */
    billOfLadingNumber: string;
}
export namespace TransportationDetails {
    namespace ShipModeEnum {
        let TruckLoad: string;
        let LessThanTruckLoad: string;
        let SmallParcel: string;
    }
    /**
     * *
     */
    type ShipModeEnum = string;
    namespace TransportationModeEnum {
        let Road: string;
        let Air: string;
        let Ocean: string;
    }
    /**
     * *
     */
    type TransportationModeEnum = string;
}
import { CarrierDetails } from './CarrierDetails.js';
//# sourceMappingURL=TransportationDetails.d.ts.map