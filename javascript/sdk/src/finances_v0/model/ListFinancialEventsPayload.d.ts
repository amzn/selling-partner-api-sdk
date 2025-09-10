/**
 * The ListFinancialEventsPayload model module.
 * @module finances_v0/model/ListFinancialEventsPayload
 * @version v0
 */
export class ListFinancialEventsPayload {
    /**
     * Constructs a <code>ListFinancialEventsPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ListFinancialEventsPayload} obj Optional instance to populate.
     * @return {ListFinancialEventsPayload} The populated <code>ListFinancialEventsPayload</code> instance.
     */
    static constructFromObject(data: any, obj: ListFinancialEventsPayload): ListFinancialEventsPayload;
    /**
     * When present and not empty, pass this string token in the next request to return the next response page.
     * @member {String} nextToken
     * @type {String}
     */
    nextToken: string;
    /**
     * @member {FinancialEvents} financialEvents
     * @type {FinancialEvents}
     */
    financialEvents: FinancialEvents;
}
import { FinancialEvents } from './FinancialEvents.js';
//# sourceMappingURL=ListFinancialEventsPayload.d.ts.map