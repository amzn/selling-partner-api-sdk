/**
 * The AmazonShipmentDetails model module.
 * @module shipping_v2/model/AmazonShipmentDetails
 * @version v2
 */
export class AmazonShipmentDetails {
    /**
     * Constructs a <code>AmazonShipmentDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {AmazonShipmentDetails} obj Optional instance to populate.
     * @return {AmazonShipmentDetails} The populated <code>AmazonShipmentDetails</code> instance.
     */
    static constructFromObject(data: any, obj: AmazonShipmentDetails): AmazonShipmentDetails;
    /**
     * Constructs a new <code>AmazonShipmentDetails</code>.
     * Amazon shipment information.
     * @alias module:shipping_v2/model/AmazonShipmentDetails
     * @class
     * @param shipmentId {String} This attribute is required only for a Direct Fulfillment shipment. This is the encrypted shipment ID.
     */
    constructor(shipmentId: string);
    shipmentId: string;
}
//# sourceMappingURL=AmazonShipmentDetails.d.ts.map