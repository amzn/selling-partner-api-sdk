/**
 * The ResearchingQuantity model module.
 * @module fbainventory_v1/model/ResearchingQuantity
 * @version v1
 */
export class ResearchingQuantity {
    /**
     * Constructs a <code>ResearchingQuantity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ResearchingQuantity} obj Optional instance to populate.
     * @return {ResearchingQuantity} The populated <code>ResearchingQuantity</code> instance.
     */
    static constructFromObject(data: any, obj: ResearchingQuantity): ResearchingQuantity;
    /**
     * The total number of units currently being researched in Amazon's fulfillment network.
     * @member {Number} totalResearchingQuantity
     * @type {Number}
     */
    totalResearchingQuantity: number;
    /**
     * A list of quantity details for items currently being researched.
     * @member {[ResearchingQuantityEntry]} researchingQuantityBreakdown
     * @type {[ResearchingQuantityEntry]}
     */
    researchingQuantityBreakdown: [ResearchingQuantityEntry];
}
import { ResearchingQuantityEntry } from './ResearchingQuantityEntry.js';
//# sourceMappingURL=ResearchingQuantity.d.ts.map