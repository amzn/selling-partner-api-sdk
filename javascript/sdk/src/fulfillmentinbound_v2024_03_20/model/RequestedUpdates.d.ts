/**
 * The RequestedUpdates model module.
 * @module fulfillmentinbound_v2024_03_20/model/RequestedUpdates
 * @version 2024-03-20
 */
export class RequestedUpdates {
    /**
     * Constructs a <code>RequestedUpdates</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {RequestedUpdates} obj Optional instance to populate.
     * @return {RequestedUpdates} The populated <code>RequestedUpdates</code> instance.
     */
    static constructFromObject(data: any, obj: RequestedUpdates): RequestedUpdates;
    /**
     * A list of boxes that will be present in the shipment after the update.
     * @member {[BoxUpdateInput]} boxes
     * @type {[BoxUpdateInput]}
     */
    boxes: [BoxUpdateInput];
    /**
     * A list of all items that will be present in the shipment after the update.
     * @member {[ItemInput]} items
     * @type {[ItemInput]}
     */
    items: [ItemInput];
}
import { BoxUpdateInput } from './BoxUpdateInput.js';
import { ItemInput } from './ItemInput.js';
//# sourceMappingURL=RequestedUpdates.d.ts.map