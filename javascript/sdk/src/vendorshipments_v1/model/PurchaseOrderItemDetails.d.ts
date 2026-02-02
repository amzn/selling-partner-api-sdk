/**
 * The PurchaseOrderItemDetails model module.
 * @module vendorshipments_v1/model/PurchaseOrderItemDetails
 * @version v1
 */
export class PurchaseOrderItemDetails {
    /**
     * Constructs a <code>PurchaseOrderItemDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {PurchaseOrderItemDetails} obj Optional instance to populate.
     * @return {PurchaseOrderItemDetails} The populated <code>PurchaseOrderItemDetails</code> instance.
     */
    static constructFromObject(data: any, obj: PurchaseOrderItemDetails): PurchaseOrderItemDetails;
    /**
     * @member {Money} maximumRetailPrice
     * @type {Money}
     */
    maximumRetailPrice: Money;
}
import { Money } from './Money.js';
//# sourceMappingURL=PurchaseOrderItemDetails.d.ts.map