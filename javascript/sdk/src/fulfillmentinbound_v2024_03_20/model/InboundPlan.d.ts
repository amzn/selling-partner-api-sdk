/**
 * The InboundPlan model module.
 * @module fulfillmentinbound_v2024_03_20/model/InboundPlan
 * @version 2024-03-20
 */
export class InboundPlan {
    /**
     * Constructs a <code>InboundPlan</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {InboundPlan} obj Optional instance to populate.
     * @return {InboundPlan} The populated <code>InboundPlan</code> instance.
     */
    static constructFromObject(data: any, obj: InboundPlan): InboundPlan;
    /**
     * Constructs a new <code>InboundPlan</code>.
     * Inbound plan containing details of the inbound workflow.
     * @alias module:fulfillmentinbound_v2024_03_20/model/InboundPlan
     * @class
     * @param createdAt {Date} The time at which the inbound plan was created. In [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) datetime with pattern `yyyy-MM-ddTHH:mm:ssZ`.
     * @param inboundPlanId {String} Identifier of an inbound plan.
     * @param lastUpdatedAt {Date} The time at which the inbound plan was last updated. In [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) datetime format with pattern `yyyy-MM-ddTHH:mm:ssZ`.
     * @param marketplaceIds {String[]} A list of marketplace IDs.
     * @param name {String} Human-readable name of the inbound plan.
     * @param sourceAddress {Address}
     * @param status {String} Current status of the inbound plan. Possible values: `ACTIVE`, `VOIDED`, `SHIPPED`, `ERRORED`.
     */
    constructor(createdAt: Date, inboundPlanId: string, lastUpdatedAt: Date, marketplaceIds: string[], name: string, sourceAddress: Address, status: string);
    createdAt: Date;
    inboundPlanId: string;
    lastUpdatedAt: Date;
    marketplaceIds: string[];
    name: string;
    sourceAddress: Address;
    status: string;
    /**
     * Packing options for the inbound plan. This property will be populated when it has been generated via the corresponding operation. If there is a chosen placement option, only packing options for that placement option will be returned. If there are confirmed shipments, only packing options for those shipments will be returned. Query the packing option for more details.
     * @member {PackingOptionSummary[]} packingOptions
     * @type {PackingOptionSummary[]}
     */
    packingOptions: PackingOptionSummary[];
    /**
     * Placement options for the inbound plan. This property will be populated when it has been generated via the corresponding operation. If there is a chosen placement option, that will be the only returned option. Query the placement option for more details.
     * @member {PlacementOptionSummary[]} placementOptions
     * @type {PlacementOptionSummary[]}
     */
    placementOptions: PlacementOptionSummary[];
    /**
     * A list of shipment IDs for the inbound plan. This property is populated when it has been generated with the `confirmPlacementOptions` operation. Only shipments from the chosen placement option are returned. Query the shipment for more details.
     * @member {ShipmentSummary[]} shipments
     * @type {ShipmentSummary[]}
     */
    shipments: ShipmentSummary[];
}
import { Address } from './Address.js';
import { PackingOptionSummary } from './PackingOptionSummary.js';
import { PlacementOptionSummary } from './PlacementOptionSummary.js';
import { ShipmentSummary } from './ShipmentSummary.js';
//# sourceMappingURL=InboundPlan.d.ts.map