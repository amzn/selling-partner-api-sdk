/**
 * The CreateFulfillmentReturnRequest model module.
 * @module fulfillmentoutbound_v2020_07_01/model/CreateFulfillmentReturnRequest
 * @version 2020-07-01
 */
export class CreateFulfillmentReturnRequest {
    /**
     * Constructs a <code>CreateFulfillmentReturnRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {CreateFulfillmentReturnRequest} obj Optional instance to populate.
     * @return {CreateFulfillmentReturnRequest} The populated <code>CreateFulfillmentReturnRequest</code> instance.
     */
    static constructFromObject(data: any, obj: CreateFulfillmentReturnRequest): CreateFulfillmentReturnRequest;
    /**
     * Constructs a new <code>CreateFulfillmentReturnRequest</code>.
     * The &#x60;createFulfillmentReturn&#x60; operation creates a fulfillment return for items that were fulfilled using the &#x60;createFulfillmentOrder&#x60; operation. For calls to &#x60;createFulfillmentReturn&#x60;, you must include &#x60;returnReasonCode&#x60; values returned by a previous call to the &#x60;listReturnReasonCodes&#x60; operation.
     * @alias module:fulfillmentoutbound_v2020_07_01/model/CreateFulfillmentReturnRequest
     * @class
     * @param items {Array[]} An array of items to be returned.
     */
    constructor(items: any[][]);
    items: any[][];
}
//# sourceMappingURL=CreateFulfillmentReturnRequest.d.ts.map