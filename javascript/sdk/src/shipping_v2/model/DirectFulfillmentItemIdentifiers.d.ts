/**
 * The DirectFulfillmentItemIdentifiers model module.
 * @module shipping_v2/model/DirectFulfillmentItemIdentifiers
 * @version v2
 */
export class DirectFulfillmentItemIdentifiers {
    /**
     * Constructs a <code>DirectFulfillmentItemIdentifiers</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {DirectFulfillmentItemIdentifiers} obj Optional instance to populate.
     * @return {DirectFulfillmentItemIdentifiers} The populated <code>DirectFulfillmentItemIdentifiers</code> instance.
     */
    static constructFromObject(data: any, obj: DirectFulfillmentItemIdentifiers): DirectFulfillmentItemIdentifiers;
    /**
     * Constructs a new <code>DirectFulfillmentItemIdentifiers</code>.
     * Item identifiers for an item in a direct fulfillment shipment.
     * @alias module:shipping_v2/model/DirectFulfillmentItemIdentifiers
     * @class
     * @param lineItemID {String} A unique identifier for an item provided by the client for a direct fulfillment shipment. This is only populated for direct fulfillment multi-piece shipments. It is required if a vendor wants to change the configuration of the packages in which the purchase order is shipped.
     */
    constructor(lineItemID: string);
    lineItemID: string;
    /**
     * A unique identifier for an item provided by the client for a direct fulfillment shipment. This is only populated if a single line item has multiple pieces. Defaults to 1.
     * @member {String} pieceNumber
     * @type {String}
     */
    pieceNumber: string;
}
//# sourceMappingURL=DirectFulfillmentItemIdentifiers.d.ts.map