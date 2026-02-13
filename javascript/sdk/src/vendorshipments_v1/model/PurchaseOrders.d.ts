/**
 * The PurchaseOrders model module.
 * @module vendorshipments_v1/model/PurchaseOrders
 * @version v1
 */
export class PurchaseOrders {
    /**
     * Constructs a <code>PurchaseOrders</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {PurchaseOrders} obj Optional instance to populate.
     * @return {PurchaseOrders} The populated <code>PurchaseOrders</code> instance.
     */
    static constructFromObject(data: any, obj: PurchaseOrders): PurchaseOrders;
    /**
     * Purchase order numbers involved in this shipment, list all the PO that are involved as part of this shipment.
     * @member {String} purchaseOrderNumber
     * @type {String}
     */
    purchaseOrderNumber: string;
    /**
     * Purchase order numbers involved in this shipment, list all the PO that are involved as part of this shipment.
     * @member {Date} purchaseOrderDate
     * @type {Date}
     */
    purchaseOrderDate: Date;
    /**
     * Date range in which shipment is expected for these purchase orders.
     * @member {String} shipWindow
     * @type {String}
     */
    shipWindow: string;
    /**
     * A list of the items that are associated to the PO in this transport and their associated details.
     * @member {PurchaseOrderItems[]} items
     * @type {PurchaseOrderItems[]}
     */
    items: PurchaseOrderItems[];
}
import { PurchaseOrderItems } from './PurchaseOrderItems.js';
//# sourceMappingURL=PurchaseOrders.d.ts.map