/**
 * The OrderItemsInner model module.
 * @module orders_v0/model/OrderItemsInner
 * @version v0
 */
export class OrderItemsInner {
    /**
     * Constructs a <code>OrderItemsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {OrderItemsInner} obj Optional instance to populate.
     * @return {OrderItemsInner} The populated <code>OrderItemsInner</code> instance.
     */
    static constructFromObject(data: any, obj: OrderItemsInner): OrderItemsInner;
    /**
     * The order item's unique identifier.
     * @member {String} orderItemId
     * @type {String}
     */
    orderItemId: string;
    /**
     * The quantity for which to update the shipment status.
     * @member {Number} quantity
     * @type {Number}
     */
    quantity: number;
}
//# sourceMappingURL=OrderItemsInner.d.ts.map