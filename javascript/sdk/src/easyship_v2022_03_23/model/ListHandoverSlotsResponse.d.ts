/**
 * The ListHandoverSlotsResponse model module.
 * @module easyship_v2022_03_23/model/ListHandoverSlotsResponse
 * @version 2022-03-23
 */
export class ListHandoverSlotsResponse {
    /**
     * Constructs a <code>ListHandoverSlotsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ListHandoverSlotsResponse} obj Optional instance to populate.
     * @return {ListHandoverSlotsResponse} The populated <code>ListHandoverSlotsResponse</code> instance.
     */
    static constructFromObject(data: any, obj: ListHandoverSlotsResponse): ListHandoverSlotsResponse;
    /**
     * Constructs a new <code>ListHandoverSlotsResponse</code>.
     * The response schema for the &#x60;listHandoverSlots&#x60; operation.
     * @alias module:easyship_v2022_03_23/model/ListHandoverSlotsResponse
     * @class
     * @param amazonOrderId {String} An Amazon-defined order identifier. Identifies the order that the seller wants to deliver using Amazon Easy Ship.
     * @param timeSlots {[TimeSlot]} A list of time slots.
     */
    constructor(amazonOrderId: string, timeSlots: [TimeSlot]);
    amazonOrderId: string;
    timeSlots: TimeSlot[];
}
import { TimeSlot } from './TimeSlot.js';
//# sourceMappingURL=ListHandoverSlotsResponse.d.ts.map