/**
 * The UpdateItemComplianceDetailsResponse model module.
 * @module fulfillmentinbound_v2024_03_20/model/UpdateItemComplianceDetailsResponse
 * @version 2024-03-20
 */
export class UpdateItemComplianceDetailsResponse {
    /**
     * Constructs a <code>UpdateItemComplianceDetailsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {UpdateItemComplianceDetailsResponse} obj Optional instance to populate.
     * @return {UpdateItemComplianceDetailsResponse} The populated <code>UpdateItemComplianceDetailsResponse</code> instance.
     */
    static constructFromObject(data: any, obj: UpdateItemComplianceDetailsResponse): UpdateItemComplianceDetailsResponse;
    /**
     * Constructs a new <code>UpdateItemComplianceDetailsResponse</code>.
     * The &#x60;updateItemComplianceDetails&#x60; response.
     * @alias module:fulfillmentinbound_v2024_03_20/model/UpdateItemComplianceDetailsResponse
     * @class
     * @param operationId {String} UUID for the given operation.
     */
    constructor(operationId: string);
    operationId: string;
}
//# sourceMappingURL=UpdateItemComplianceDetailsResponse.d.ts.map