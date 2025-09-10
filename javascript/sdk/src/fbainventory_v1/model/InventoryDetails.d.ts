/**
 * The InventoryDetails model module.
 * @module fbainventory_v1/model/InventoryDetails
 * @version v1
 */
export class InventoryDetails {
    /**
     * Constructs a <code>InventoryDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {InventoryDetails} obj Optional instance to populate.
     * @return {InventoryDetails} The populated <code>InventoryDetails</code> instance.
     */
    static constructFromObject(data: any, obj: InventoryDetails): InventoryDetails;
    /**
     * The item quantity that can be picked, packed, and shipped.
     * @member {Number} fulfillableQuantity
     * @type {Number}
     */
    fulfillableQuantity: number;
    /**
     * The number of units in an inbound shipment for which you have notified Amazon.
     * @member {Number} inboundWorkingQuantity
     * @type {Number}
     */
    inboundWorkingQuantity: number;
    /**
     * The number of units in an inbound shipment that you have notified Amazon about and have provided a tracking number.
     * @member {Number} inboundShippedQuantity
     * @type {Number}
     */
    inboundShippedQuantity: number;
    /**
     * The number of units that have not yet been received at an Amazon fulfillment center for processing, but are part of an inbound shipment with some units that have already been received and processed.
     * @member {Number} inboundReceivingQuantity
     * @type {Number}
     */
    inboundReceivingQuantity: number;
    /**
     * @member {ReservedQuantity} reservedQuantity
     * @type {ReservedQuantity}
     */
    reservedQuantity: ReservedQuantity;
    /**
     * @member {ResearchingQuantity} researchingQuantity
     * @type {ResearchingQuantity}
     */
    researchingQuantity: ResearchingQuantity;
    /**
     * @member {UnfulfillableQuantity} unfulfillableQuantity
     * @type {UnfulfillableQuantity}
     */
    unfulfillableQuantity: UnfulfillableQuantity;
}
import { ReservedQuantity } from './ReservedQuantity.js';
import { ResearchingQuantity } from './ResearchingQuantity.js';
import { UnfulfillableQuantity } from './UnfulfillableQuantity.js';
//# sourceMappingURL=InventoryDetails.d.ts.map