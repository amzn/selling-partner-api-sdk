/**
 * The TimeWindow model module.
 * @module externalfulfillmentshipments_v2024_09_11/model/TimeWindow
 * @version 2024-09-11
 */
export class TimeWindow {
    /**
     * Constructs a <code>TimeWindow</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {TimeWindow} obj Optional instance to populate.
     * @return {TimeWindow} The populated <code>TimeWindow</code> instance.
     */
    static constructFromObject(data: any, obj: TimeWindow): TimeWindow;
    /**
     * Constructs a new <code>TimeWindow</code>.
     * Time duration used to specify the interval of an event, such as pick up and delivery.
     * @alias module:externalfulfillmentshipments_v2024_09_11/model/TimeWindow
     * @class
     * @param startTime {Number} The start time of the window.
     * @param endTime {Number} The end time of the window.
     */
    constructor(startTime: number, endTime: number);
    startTime: number;
    endTime: number;
    /**
     * Whether the seller picks up from Amazon Logistics or drops off to Amazon Logistics.
     * @member {String} handoverMethod
     * @type {String}
     */
    handoverMethod: string;
}
export namespace TimeWindow {
    namespace HandoverMethodEnum {
        let PICKUP: string;
        let DROPOFF: string;
    }
    /**
     * *
     */
    type HandoverMethodEnum = string;
}
//# sourceMappingURL=TimeWindow.d.ts.map