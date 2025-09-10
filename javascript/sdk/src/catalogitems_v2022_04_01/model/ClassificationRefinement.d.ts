/**
 * The ClassificationRefinement model module.
 * @module catalogitems_v2022_04_01/model/ClassificationRefinement
 * @version 2022-04-01
 */
export class ClassificationRefinement {
    /**
     * Constructs a <code>ClassificationRefinement</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ClassificationRefinement} obj Optional instance to populate.
     * @return {ClassificationRefinement} The populated <code>ClassificationRefinement</code> instance.
     */
    static constructFromObject(data: any, obj: ClassificationRefinement): ClassificationRefinement;
    /**
     * Constructs a new <code>ClassificationRefinement</code>.
     * A classification that you can use to refine your search.
     * @alias module:catalogitems_v2022_04_01/model/ClassificationRefinement
     * @class
     * @param numberOfResults {Number} The estimated number of results that would be returned if you refine your search by the specified `classificationId`.
     * @param displayName {String} Display name for the classification.
     * @param classificationId {String} The identifier of the classification that you can use to refine your search.
     */
    constructor(numberOfResults: number, displayName: string, classificationId: string);
    numberOfResults: number;
    displayName: string;
    classificationId: string;
}
//# sourceMappingURL=ClassificationRefinement.d.ts.map