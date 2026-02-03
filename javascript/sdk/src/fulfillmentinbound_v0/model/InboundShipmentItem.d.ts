/**
 * The InboundShipmentItem model module.
 * @module fulfillmentinbound_v0/model/InboundShipmentItem
 * @version v0
 */
export class InboundShipmentItem {
    /**
     * Constructs a <code>InboundShipmentItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {InboundShipmentItem} obj Optional instance to populate.
     * @return {InboundShipmentItem} The populated <code>InboundShipmentItem</code> instance.
     */
    static constructFromObject(data: any, obj: InboundShipmentItem): InboundShipmentItem;
    /**
     * Constructs a new <code>InboundShipmentItem</code>.
     * Item information for an inbound shipment. Submitted with a call to the createInboundShipment or updateInboundShipment operation.
     * @alias module:fulfillmentinbound_v0/model/InboundShipmentItem
     * @class
     * @param sellerSKU {String} The seller SKU of the item.
     * @param quantityShipped {Number} The item quantity.
     */
    constructor(sellerSKU: string, quantityShipped: number);
    sellerSKU: string;
    quantityShipped: number;
    /**
     * A shipment identifier originally returned by the createInboundShipmentPlan operation.
     * @member {String} shipmentId
     * @type {String}
     */
    shipmentId: string;
    /**
     * Amazon's fulfillment network SKU of the item.
     * @member {String} fulfillmentNetworkSKU
     * @type {String}
     */
    fulfillmentNetworkSKU: string;
    /**
     * The item quantity.
     * @member {Number} quantityReceived
     * @type {Number}
     */
    quantityReceived: number;
    /**
     * The item quantity.
     * @member {Number} quantityInCase
     * @type {Number}
     */
    quantityInCase: number;
    /**
     * Type containing date in string format
     * @member {Date} releaseDate
     * @type {Date}
     */
    releaseDate: Date;
    /**
     * A list of preparation instructions and who is responsible for that preparation.
     * @member {Array[]} prepDetailsList
     * @type {Array[]}
     */
    prepDetailsList: any[][];
}
//# sourceMappingURL=InboundShipmentItem.d.ts.map