/**
 * The Refinements model module.
 * @module catalogitems_v2022_04_01/model/Refinements
 * @version 2022-04-01
 */
export class Refinements {
    /**
     * Constructs a <code>Refinements</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Refinements} obj Optional instance to populate.
     * @return {Refinements} The populated <code>Refinements</code> instance.
     */
    static constructFromObject(data: any, obj: Refinements): Refinements;
    /**
     * Constructs a new <code>Refinements</code>.
     * Optional fields that you can use to refine your search results.
     * @alias module:catalogitems_v2022_04_01/model/Refinements
     * @class
     * @param brands {Array[]} A list of brands you can use to refine your search.
     * @param classifications {Array[]} A list of classifications you can use to refine your search.
     */
    constructor(brands: any[][], classifications: any[][]);
    brands: any[][];
    classifications: any[][];
}
//# sourceMappingURL=Refinements.d.ts.map