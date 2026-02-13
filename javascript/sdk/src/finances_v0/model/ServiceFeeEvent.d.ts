/**
 * The ServiceFeeEvent model module.
 * @module finances_v0/model/ServiceFeeEvent
 * @version v0
 */
export class ServiceFeeEvent {
    /**
     * Constructs a <code>ServiceFeeEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ServiceFeeEvent} obj Optional instance to populate.
     * @return {ServiceFeeEvent} The populated <code>ServiceFeeEvent</code> instance.
     */
    static constructFromObject(data: any, obj: ServiceFeeEvent): ServiceFeeEvent;
    /**
     * An Amazon-defined identifier for an order.
     * @member {String} amazonOrderId
     * @type {String}
     */
    amazonOrderId: string;
    /**
     * A short description of the service fee reason.
     * @member {String} feeReason
     * @type {String}
     */
    feeReason: string;
    /**
     * A list of fee component information.
     * @member {FeeComponent[]} feeList
     * @type {FeeComponent[]}
     */
    feeList: FeeComponent[];
    /**
     * The seller SKU of the item. The seller SKU is qualified by the seller's seller ID, which is included with every call to the Selling Partner API.
     * @member {String} sellerSKU
     * @type {String}
     */
    sellerSKU: string;
    /**
     * A unique identifier assigned by Amazon to products stored in and fulfilled from an Amazon fulfillment center.
     * @member {String} fnSKU
     * @type {String}
     */
    fnSKU: string;
    /**
     * A short description of the service fee event.
     * @member {String} feeDescription
     * @type {String}
     */
    feeDescription: string;
    /**
     * The Amazon Standard Identification Number (ASIN) of the item.
     * @member {String} ASIN
     * @type {String}
     */
    ASIN: string;
    /**
     * The name of the store where the event occurred.
     * @member {String} storeName
     * @type {String}
     */
    storeName: string;
}
import { FeeComponent } from './FeeComponent.js';
//# sourceMappingURL=ServiceFeeEvent.d.ts.map