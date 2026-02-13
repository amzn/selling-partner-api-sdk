/**
 * The ErrorList model module.
 * @module producttypedefinitions_v2020_09_01/model/ErrorList
 * @version 2020-09-01
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
     * @alias module:producttypedefinitions_v2020_09_01/model/ErrorList
     * @class
     * @param errors {Error[]}
     */
    constructor(errors: Error[]);
    errors: Error[];
}
import { Error } from './Error.js';
//# sourceMappingURL=ErrorList.d.ts.map