/**
 * The ResearchingQuantityEntry model module.
 * @module fbainventory_v1/model/ResearchingQuantityEntry
 * @version v1
 */
export class ResearchingQuantityEntry {
    /**
     * Constructs a <code>ResearchingQuantityEntry</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ResearchingQuantityEntry} obj Optional instance to populate.
     * @return {ResearchingQuantityEntry} The populated <code>ResearchingQuantityEntry</code> instance.
     */
    static constructFromObject(data: any, obj: ResearchingQuantityEntry): ResearchingQuantityEntry;
    /**
     * Constructs a new <code>ResearchingQuantityEntry</code>.
     * The misplaced or warehouse damaged inventory that is actively being confirmed at our fulfillment centers.
     * @alias module:fbainventory_v1/model/ResearchingQuantityEntry
     * @class
     * @param name {String} The duration of the research.
     * @param quantity {Number} The number of units.
     */
    constructor(name: string, quantity: number);
    name: string;
    quantity: number;
}
export namespace ResearchingQuantityEntry {
    namespace NameEnum {
        let researchingQuantityInShortTerm: string;
        let researchingQuantityInMidTerm: string;
        let researchingQuantityInLongTerm: string;
    }
    /**
     * *
     */
    type NameEnum = string;
}
//# sourceMappingURL=ResearchingQuantityEntry.d.ts.map