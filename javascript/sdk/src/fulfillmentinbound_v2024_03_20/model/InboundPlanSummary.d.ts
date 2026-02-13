/**
 * The InboundPlanSummary model module.
 * @module fulfillmentinbound_v2024_03_20/model/InboundPlanSummary
 * @version 2024-03-20
 */
export class InboundPlanSummary {
    /**
     * Constructs a <code>InboundPlanSummary</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {InboundPlanSummary} obj Optional instance to populate.
     * @return {InboundPlanSummary} The populated <code>InboundPlanSummary</code> instance.
     */
    static constructFromObject(data: any, obj: InboundPlanSummary): InboundPlanSummary;
    /**
     * Constructs a new <code>InboundPlanSummary</code>.
     * A light-weight inbound plan.
     * @alias module:fulfillmentinbound_v2024_03_20/model/InboundPlanSummary
     * @class
     * @param createdAt {Date} The time at which the inbound plan was created. In [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) datetime format with pattern `yyyy-MM-ddTHH:mm:ssZ`.
     * @param inboundPlanId {String} Identifier of an inbound plan.
     * @param lastUpdatedAt {Date} The time at which the inbound plan was last updated. In [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) datetime format with pattern `yyyy-MM-ddTHH:mm:ssZ`.
     * @param marketplaceIds {String[]} A list of marketplace IDs.
     * @param name {String} Human-readable name of the inbound plan.
     * @param sourceAddress {Address}
     * @param status {String} The current status of the inbound plan. Possible values: `ACTIVE`, `VOIDED`, `SHIPPED`, `ERRORED`.
     */
    constructor(createdAt: Date, inboundPlanId: string, lastUpdatedAt: Date, marketplaceIds: string[], name: string, sourceAddress: Address, status: string);
    createdAt: Date;
    inboundPlanId: string;
    lastUpdatedAt: Date;
    marketplaceIds: string[];
    name: string;
    sourceAddress: Address;
    status: string;
}
import { Address } from './Address.js';
//# sourceMappingURL=InboundPlanSummary.d.ts.map