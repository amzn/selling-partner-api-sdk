/**
 * The ErrorList model module.
 * @module externalfulfillmentshipments_v2024_09_11/model/ErrorList
 * @version 2024-09-11
 */
export class ErrorList {
    /**
     * Constructs a <code>ErrorList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ErrorList} obj Optional instance to populate.
     * @return {ErrorList} The populated <code>ErrorList</code> instance.
     */
    static constructFromObject(data: any, obj: ErrorList): ErrorList;
    /**
     * Constructs a new <code>ErrorList</code>.
     * An object containing a list of error responses returned when a request is unsuccessful.
     * @alias module:externalfulfillmentshipments_v2024_09_11/model/ErrorList
     * @class
     * @param errors {Array[]} A list of error responses returned when a request is unsuccessful.
     */
    constructor(errors: any[][]);
    errors: any[][];
}
//# sourceMappingURL=ErrorList.d.ts.map