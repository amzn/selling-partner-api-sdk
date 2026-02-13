/**
 * The CreateInboundPlanRequest model module.
 * @module fulfillmentinbound_v2024_03_20/model/CreateInboundPlanRequest
 * @version 2024-03-20
 */
export class CreateInboundPlanRequest {
    /**
     * Constructs a <code>CreateInboundPlanRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {CreateInboundPlanRequest} obj Optional instance to populate.
     * @return {CreateInboundPlanRequest} The populated <code>CreateInboundPlanRequest</code> instance.
     */
    static constructFromObject(data: any, obj: CreateInboundPlanRequest): CreateInboundPlanRequest;
    /**
     * Constructs a new <code>CreateInboundPlanRequest</code>.
     * The &#x60;createInboundPlan&#x60; request.
     * @alias module:fulfillmentinbound_v2024_03_20/model/CreateInboundPlanRequest
     * @class
     * @param destinationMarketplaces {[String]} Marketplaces where the items need to be shipped to. Currently only one marketplace can be selected in this request.
     * @param items {[ItemInput]} Items included in this plan.
     * @param sourceAddress {AddressInput}
     */
    constructor(destinationMarketplaces: [string], items: [ItemInput], sourceAddress: AddressInput);
    destinationMarketplaces: string[];
    items: ItemInput[];
    sourceAddress: AddressInput;
    /**
     * Name for the Inbound Plan. If one isn't provided, a default name will be provided.
     * @member {String} name
     * @type {String}
     */
    name: string;
}
import { ItemInput } from './ItemInput.js';
import { AddressInput } from './AddressInput.js';
//# sourceMappingURL=CreateInboundPlanRequest.d.ts.map