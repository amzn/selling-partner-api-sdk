/**
 * The TransportationDetailsForShipmentConfirmation model module.
 * @module vendorshipments_v1/model/TransportationDetailsForShipmentConfirmation
 * @version v1
 */
export class TransportationDetailsForShipmentConfirmation {
    /**
     * Constructs a <code>TransportationDetailsForShipmentConfirmation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {TransportationDetailsForShipmentConfirmation} obj Optional instance to populate.
     * @return {TransportationDetailsForShipmentConfirmation} The populated <code>TransportationDetailsForShipmentConfirmation</code> instance.
     */
    static constructFromObject(data: any, obj: TransportationDetailsForShipmentConfirmation): TransportationDetailsForShipmentConfirmation;
    /**
     * Code that identifies the carrier for the shipment. The Standard Carrier Alpha Code (SCAC) is a unique two to four letter code used to identify a carrier. Carrier SCAC codes are assigned and maintained by the NMFTA (National Motor Freight Association). This field is mandatory for US, CA, MX shipment confirmations.
     * @member {String} carrierScac
     * @type {String}
     */
    carrierScac: string;
    /**
     * The field also known as PRO number is a unique number assigned by the carrier. It is used to identify and track the shipment that goes out for delivery. This field is mandatory for UA, CA, MX shipment confirmations.
     * @member {String} carrierShipmentReferenceNumber
     * @type {String}
     */
    carrierShipmentReferenceNumber: string;
    /**
     * The mode of transportation for this shipment.
     * @member {String} transportationMode
     * @type {String}
     */
    transportationMode: string;
    /**
     * The Bill of Lading (BOL) number is a unique number assigned to each shipment of goods by the vendor or shipper during the creation of the Bill of Lading. This number must be unique for every shipment and cannot be a date/time or single character. The BOL numer is mandatory in Shipment Confirmation message for FTL and LTL shipments, and must match the paper BOL provided with the shipment. Instead of BOL, an alternative reference number (like Delivery Note Number) for the shipment can also be sent in this field.
     * @member {String} billOfLadingNumber
     * @type {String}
     */
    billOfLadingNumber: string;
}
export namespace TransportationDetailsForShipmentConfirmation {
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
//# sourceMappingURL=TransportationDetailsForShipmentConfirmation.d.ts.map