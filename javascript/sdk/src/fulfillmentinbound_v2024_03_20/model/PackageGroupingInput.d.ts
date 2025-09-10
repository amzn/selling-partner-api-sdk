/**
 * The PackageGroupingInput model module.
 * @module fulfillmentinbound_v2024_03_20/model/PackageGroupingInput
 * @version 2024-03-20
 */
export class PackageGroupingInput {
    /**
     * Constructs a <code>PackageGroupingInput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {PackageGroupingInput} obj Optional instance to populate.
     * @return {PackageGroupingInput} The populated <code>PackageGroupingInput</code> instance.
     */
    static constructFromObject(data: any, obj: PackageGroupingInput): PackageGroupingInput;
    /**
     * Constructs a new <code>PackageGroupingInput</code>.
     * Packing information for the inbound plan.
     * @alias module:fulfillmentinbound_v2024_03_20/model/PackageGroupingInput
     * @class
     * @param boxes {[BoxInput]} Box level information being provided.
     */
    constructor(boxes: [BoxInput]);
    boxes: [BoxInput];
    /**
     * The ID of the `packingGroup` that packages are grouped according to. The `PackingGroupId` can only be provided before placement confirmation, and it must belong to the confirmed `PackingOption`. One of `ShipmentId` or `PackingGroupId` must be provided with every request.
     * @member {String} packingGroupId
     * @type {String}
     */
    packingGroupId: string;
    /**
     * The ID of the shipment that packages are grouped according to. The `ShipmentId` can only be provided after placement confirmation, and the shipment must belong to the confirmed placement option. One of `ShipmentId` or `PackingGroupId` must be provided with every request.
     * @member {String} shipmentId
     * @type {String}
     */
    shipmentId: string;
}
import { BoxInput } from './BoxInput.js';
//# sourceMappingURL=PackageGroupingInput.d.ts.map