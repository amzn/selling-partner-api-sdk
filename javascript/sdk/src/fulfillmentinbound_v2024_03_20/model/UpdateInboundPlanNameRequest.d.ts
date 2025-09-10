/**
 * The UpdateInboundPlanNameRequest model module.
 * @module fulfillmentinbound_v2024_03_20/model/UpdateInboundPlanNameRequest
 * @version 2024-03-20
 */
export class UpdateInboundPlanNameRequest {
    /**
     * Constructs a <code>UpdateInboundPlanNameRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {UpdateInboundPlanNameRequest} obj Optional instance to populate.
     * @return {UpdateInboundPlanNameRequest} The populated <code>UpdateInboundPlanNameRequest</code> instance.
     */
    static constructFromObject(data: any, obj: UpdateInboundPlanNameRequest): UpdateInboundPlanNameRequest;
    /**
     * Constructs a new <code>UpdateInboundPlanNameRequest</code>.
     * The &#x60;updateInboundPlanName&#x60; request.
     * @alias module:fulfillmentinbound_v2024_03_20/model/UpdateInboundPlanNameRequest
     * @class
     * @param name {String} A human-readable name to update the inbound plan name to.
     */
    constructor(name: string);
    name: string;
}
//# sourceMappingURL=UpdateInboundPlanNameRequest.d.ts.map