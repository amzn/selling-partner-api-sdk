/**
 * The ItemShipping model module.
 * @module orders_v2026_01_01/model/ItemShipping
 * @version 2026-01-01
 */
export class ItemShipping {
    /**
     * Constructs a <code>ItemShipping</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ItemShipping} obj Optional instance to populate.
     * @return {ItemShipping} The populated <code>ItemShipping</code> instance.
     */
    static constructFromObject(data: any, obj: ItemShipping): ItemShipping;
    /**
     * @member {DateTimeRange} scheduledDeliveryWindow
     * @type {DateTimeRange}
     */
    scheduledDeliveryWindow: DateTimeRange;
    /**
     * @member {ItemShippingConstraints} shippingConstraints
     * @type {ItemShippingConstraints}
     */
    shippingConstraints: ItemShippingConstraints;
    /**
     * @member {ItemInternationalShipping} internationalShipping
     * @type {ItemInternationalShipping}
     */
    internationalShipping: ItemInternationalShipping;
}
import { DateTimeRange } from './DateTimeRange.js';
import { ItemShippingConstraints } from './ItemShippingConstraints.js';
import { ItemInternationalShipping } from './ItemInternationalShipping.js';
//# sourceMappingURL=ItemShipping.d.ts.map