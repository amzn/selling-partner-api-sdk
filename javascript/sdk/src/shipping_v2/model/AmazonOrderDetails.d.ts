/**
 * The AmazonOrderDetails model module.
 * @module shipping_v2/model/AmazonOrderDetails
 * @version v2
 */
export class AmazonOrderDetails {
    /**
     * Constructs a <code>AmazonOrderDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {AmazonOrderDetails} obj Optional instance to populate.
     * @return {AmazonOrderDetails} The populated <code>AmazonOrderDetails</code> instance.
     */
    static constructFromObject(data: any, obj: AmazonOrderDetails): AmazonOrderDetails;
    /**
     * Constructs a new <code>AmazonOrderDetails</code>.
     * Amazon order information. This is required if the shipment source channel is Amazon.
     * @alias module:shipping_v2/model/AmazonOrderDetails
     * @class
     * @param orderId {String} The Amazon order ID associated with the Amazon order fulfilled by this shipment.
     */
    constructor(orderId: string);
    orderId: string;
}
//# sourceMappingURL=AmazonOrderDetails.d.ts.map