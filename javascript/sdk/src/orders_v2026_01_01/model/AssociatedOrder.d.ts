/**
 * The AssociatedOrder model module.
 * @module orders_v2026_01_01/model/AssociatedOrder
 * @version 2026-01-01
 */
export class AssociatedOrder {
    /**
     * Constructs a <code>AssociatedOrder</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {AssociatedOrder} obj Optional instance to populate.
     * @return {AssociatedOrder} The populated <code>AssociatedOrder</code> instance.
     */
    static constructFromObject(data: any, obj: AssociatedOrder): AssociatedOrder;
    /**
     * The unique identifier of the related order that is associated with the current order.
     * @member {String} orderId
     * @type {String}
     */
    orderId: string;
    /**
     * The relationship between the current order and the associated order.  **Possible values**: `REPLACEMENT_ORIGINAL_ID`, `EXCHANGE_ORIGINAL_ID`
     * @member {String} associationType
     * @type {String}
     */
    associationType: string;
}
//# sourceMappingURL=AssociatedOrder.d.ts.map