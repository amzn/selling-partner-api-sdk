/**
 * The GetInventorySummariesResult model module.
 * @module fbainventory_v1/model/GetInventorySummariesResult
 * @version v1
 */
export class GetInventorySummariesResult {
    /**
     * Constructs a <code>GetInventorySummariesResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetInventorySummariesResult} obj Optional instance to populate.
     * @return {GetInventorySummariesResult} The populated <code>GetInventorySummariesResult</code> instance.
     */
    static constructFromObject(data: any, obj: GetInventorySummariesResult): GetInventorySummariesResult;
    /**
     * Constructs a new <code>GetInventorySummariesResult</code>.
     * The payload schema for the getInventorySummaries operation.
     * @alias module:fbainventory_v1/model/GetInventorySummariesResult
     * @class
     * @param granularity {Granularity}
     * @param inventorySummaries {InventorySummary[]} A list of inventory summaries.
     */
    constructor(granularity: Granularity, inventorySummaries: InventorySummary[]);
    granularity: Granularity;
    inventorySummaries: InventorySummary[];
}
import { Granularity } from './Granularity.js';
import { InventorySummary } from './InventorySummary.js';
//# sourceMappingURL=GetInventorySummariesResult.d.ts.map