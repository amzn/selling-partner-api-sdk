/**
 * The ListFinancialEventGroupsPayload model module.
 * @module finances_v0/model/ListFinancialEventGroupsPayload
 * @version v0
 */
export class ListFinancialEventGroupsPayload {
    /**
     * Constructs a <code>ListFinancialEventGroupsPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ListFinancialEventGroupsPayload} obj Optional instance to populate.
     * @return {ListFinancialEventGroupsPayload} The populated <code>ListFinancialEventGroupsPayload</code> instance.
     */
    static constructFromObject(data: any, obj: ListFinancialEventGroupsPayload): ListFinancialEventGroupsPayload;
    /**
     * When present and not empty, pass this string token in the next request to return the next response page.
     * @member {String} nextToken
     * @type {String}
     */
    nextToken: string;
    /**
     * A list of financial event group information.
     * @member {FinancialEventGroup[]} financialEventGroupList
     * @type {FinancialEventGroup[]}
     */
    financialEventGroupList: FinancialEventGroup[];
}
import { FinancialEventGroup } from './FinancialEventGroup.js';
//# sourceMappingURL=ListFinancialEventGroupsPayload.d.ts.map