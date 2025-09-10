/**
 * The ConfirmShipmentOrderItem model module.
 * @module orders_v0/model/ConfirmShipmentOrderItem
 * @version v0
 */
export class ConfirmShipmentOrderItem {
    /**
     * Constructs a <code>ConfirmShipmentOrderItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ConfirmShipmentOrderItem} obj Optional instance to populate.
     * @return {ConfirmShipmentOrderItem} The populated <code>ConfirmShipmentOrderItem</code> instance.
     */
    static constructFromObject(data: any, obj: ConfirmShipmentOrderItem): ConfirmShipmentOrderItem;
    /**
     * Constructs a new <code>ConfirmShipmentOrderItem</code>.
     * A single order item.
     * @alias module:orders_v0/model/ConfirmShipmentOrderItem
     * @class
     * @param orderItemId {String} The order item's unique identifier.
     * @param quantity {Number} The item's quantity.
     */
    constructor(orderItemId: string, quantity: number);
    orderItemId: string;
    quantity: number;
    /**
     * A list of order items.
     * @member {[String]} transparencyCodes
     * @type {[String]}
     */
    transparencyCodes: [string];
}
//# sourceMappingURL=ConfirmShipmentOrderItem.d.ts.map