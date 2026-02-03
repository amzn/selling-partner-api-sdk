/**
 * The ListAllFulfillmentOrdersResult model module.
 * @module fulfillmentoutbound_v2020_07_01/model/ListAllFulfillmentOrdersResult
 * @version 2020-07-01
 */
export class ListAllFulfillmentOrdersResult {
    /**
     * Constructs a <code>ListAllFulfillmentOrdersResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ListAllFulfillmentOrdersResult} obj Optional instance to populate.
     * @return {ListAllFulfillmentOrdersResult} The populated <code>ListAllFulfillmentOrdersResult</code> instance.
     */
    static constructFromObject(data: any, obj: ListAllFulfillmentOrdersResult): ListAllFulfillmentOrdersResult;
    /**
     * When present and not empty, pass this string token in the next request to return the next response page.
     * @member {String} nextToken
     * @type {String}
     */
    nextToken: string;
    /**
     * An array of fulfillment order information.
     * @member {Array[]} fulfillmentOrders
     * @type {Array[]}
     */
    fulfillmentOrders: any[][];
}
//# sourceMappingURL=ListAllFulfillmentOrdersResult.d.ts.map