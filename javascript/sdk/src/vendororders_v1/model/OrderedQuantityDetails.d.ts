/**
 * The OrderedQuantityDetails model module.
 * @module vendororders_v1/model/OrderedQuantityDetails
 * @version v1
 */
export class OrderedQuantityDetails {
    /**
     * Constructs a <code>OrderedQuantityDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {OrderedQuantityDetails} obj Optional instance to populate.
     * @return {OrderedQuantityDetails} The populated <code>OrderedQuantityDetails</code> instance.
     */
    static constructFromObject(data: any, obj: OrderedQuantityDetails): OrderedQuantityDetails;
    /**
     * The date when the line item quantity was updated by buyer. Must be in ISO-8601 date/time format.
     * @member {Date} updatedDate
     * @type {Date}
     */
    updatedDate: Date;
    /**
     * @member {ItemQuantity} orderedQuantity
     * @type {ItemQuantity}
     */
    orderedQuantity: ItemQuantity;
    /**
     * @member {ItemQuantity} cancelledQuantity
     * @type {ItemQuantity}
     */
    cancelledQuantity: ItemQuantity;
}
import { ItemQuantity } from './ItemQuantity.js';
//# sourceMappingURL=OrderedQuantityDetails.d.ts.map