/**
 * The OrdersList model module.
 * @module orders_v0/model/OrdersList
 * @version v0
 */
export class OrdersList {
    /**
     * Constructs a <code>OrdersList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {OrdersList} obj Optional instance to populate.
     * @return {OrdersList} The populated <code>OrdersList</code> instance.
     */
    static constructFromObject(data: any, obj: OrdersList): OrdersList;
    /**
     * Constructs a new <code>OrdersList</code>.
     * A list of orders along with additional information to make subsequent API calls.
     * @alias module:orders_v0/model/OrdersList
     * @class
     * @param orders {Array[]} A list of orders.
     */
    constructor(orders: any[][]);
    orders: any[][];
    /**
     * When present and not empty, pass this string token in the next request to return the next response page.
     * @member {String} nextToken
     * @type {String}
     */
    nextToken: string;
    /**
     * Use this date to select orders that were last updated before (or at) a specified time. An update is defined as any change in order status, including the creation of a new order. Includes updates made by Amazon and by the seller. Use [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) format for all dates.
     * @member {String} lastUpdatedBefore
     * @type {String}
     */
    lastUpdatedBefore: string;
    /**
     * Use this date to select orders created before (or at) a specified time. Only orders placed before the specified time are returned. The date must be in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) format.
     * @member {String} createdBefore
     * @type {String}
     */
    createdBefore: string;
}
//# sourceMappingURL=OrdersList.d.ts.map