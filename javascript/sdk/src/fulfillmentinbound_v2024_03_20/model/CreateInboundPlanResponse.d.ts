/**
 * The CreateInboundPlanResponse model module.
 * @module fulfillmentinbound_v2024_03_20/model/CreateInboundPlanResponse
 * @version 2024-03-20
 */
export class CreateInboundPlanResponse {
    /**
     * Constructs a <code>CreateInboundPlanResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {CreateInboundPlanResponse} obj Optional instance to populate.
     * @return {CreateInboundPlanResponse} The populated <code>CreateInboundPlanResponse</code> instance.
     */
    static constructFromObject(data: any, obj: CreateInboundPlanResponse): CreateInboundPlanResponse;
    /**
     * Constructs a new <code>CreateInboundPlanResponse</code>.
     * The &#x60;createInboundPlan&#x60; response.
     * @alias module:fulfillmentinbound_v2024_03_20/model/CreateInboundPlanResponse
     * @class
     * @param inboundPlanId {String} Identifier of an inbound plan.
     * @param operationId {String} UUID for the given operation.
     */
    constructor(inboundPlanId: string, operationId: string);
    inboundPlanId: string;
    operationId: string;
}
//# sourceMappingURL=CreateInboundPlanResponse.d.ts.map