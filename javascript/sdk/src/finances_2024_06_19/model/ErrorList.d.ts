/**
 * The ErrorList model module.
 * @module finances_2024_06_19/model/ErrorList
 * @version 2024-06-19
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
     * A list of error responses returned when a request is unsuccessful.
     * @alias module:finances_2024_06_19/model/ErrorList
     * @class
     * @param errors {Array[]} The error responses that are returned when the request is unsuccessful.
     */
    constructor(errors: any[][]);
    errors: any[][];
}
//# sourceMappingURL=ErrorList.d.ts.map