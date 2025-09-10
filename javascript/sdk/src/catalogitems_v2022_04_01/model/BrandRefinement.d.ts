/**
 * The BrandRefinement model module.
 * @module catalogitems_v2022_04_01/model/BrandRefinement
 * @version 2022-04-01
 */
export class BrandRefinement {
    /**
     * Constructs a <code>BrandRefinement</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {BrandRefinement} obj Optional instance to populate.
     * @return {BrandRefinement} The populated <code>BrandRefinement</code> instance.
     */
    static constructFromObject(data: any, obj: BrandRefinement): BrandRefinement;
    /**
     * Constructs a new <code>BrandRefinement</code>.
     * A brand that you can use to refine your search.
     * @alias module:catalogitems_v2022_04_01/model/BrandRefinement
     * @class
     * @param numberOfResults {Number} The estimated number of results that would be returned if you refine your search by the specified `brandName`.
     * @param brandName {String} The brand name that you can use to refine your search.
     */
    constructor(numberOfResults: number, brandName: string);
    numberOfResults: number;
    brandName: string;
}
//# sourceMappingURL=BrandRefinement.d.ts.map