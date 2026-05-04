/**
 * The AssociatedOrderItem model module.
 * @module orders_v2026_01_01/model/AssociatedOrderItem
 * @version 2026-01-01
 */
export class AssociatedOrderItem {
    /**
     * Constructs a <code>AssociatedOrderItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {AssociatedOrderItem} obj Optional instance to populate.
     * @return {AssociatedOrderItem} The populated <code>AssociatedOrderItem</code> instance.
     */
    static constructFromObject(data: Object, obj: AssociatedOrderItem): AssociatedOrderItem;
    /**
     * The order identifier of the associated order item.
     * @member {String} orderId
     * @type {String}
     */
    orderId: string;
    /**
     * The order item identifier of the associated order item.
     * @member {String} orderItemId
     * @type {String}
     */
    orderItemId: string;
    /**
     * The type of association between the order items.  **Possible values**: - `VALUE_ADD_SERVICE` (The associated item is a service order)
     * @member {String} associationType
     * @type {String}
     */
    associationType: string;
}
//# sourceMappingURL=AssociatedOrderItem.d.ts.map