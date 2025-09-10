/**
 * The FulfillmentTime model module.
 * @module services_v1/model/FulfillmentTime
 * @version v1
 */
export class FulfillmentTime {
    /**
     * Constructs a <code>FulfillmentTime</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {FulfillmentTime} obj Optional instance to populate.
     * @return {FulfillmentTime} The populated <code>FulfillmentTime</code> instance.
     */
    static constructFromObject(data: any, obj: FulfillmentTime): FulfillmentTime;
    /**
     * The date, time in UTC of the fulfillment start time in ISO 8601 format.
     * @member {Date} startTime
     * @type {Date}
     */
    startTime: Date;
    /**
     * The date, time in UTC of the fulfillment end time in ISO 8601 format.
     * @member {Date} endTime
     * @type {Date}
     */
    endTime: Date;
}
//# sourceMappingURL=FulfillmentTime.d.ts.map