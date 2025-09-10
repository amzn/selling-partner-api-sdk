/**
 * The CancelInboundPlanResponse model module.
 * @module fulfillmentinbound_v2024_03_20/model/CancelInboundPlanResponse
 * @version 2024-03-20
 */
export class CancelInboundPlanResponse {
    /**
     * Constructs a <code>CancelInboundPlanResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {CancelInboundPlanResponse} obj Optional instance to populate.
     * @return {CancelInboundPlanResponse} The populated <code>CancelInboundPlanResponse</code> instance.
     */
    static constructFromObject(data: any, obj: CancelInboundPlanResponse): CancelInboundPlanResponse;
    /**
     * Constructs a new <code>CancelInboundPlanResponse</code>.
     * The &#x60;cancelInboundPlan&#x60; response.
     * @alias module:fulfillmentinbound_v2024_03_20/model/CancelInboundPlanResponse
     * @class
     * @param operationId {String} UUID for the given operation.
     */
    constructor(operationId: string);
    operationId: string;
}
//# sourceMappingURL=CancelInboundPlanResponse.d.ts.map