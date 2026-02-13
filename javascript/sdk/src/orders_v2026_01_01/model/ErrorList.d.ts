/**
 * The ErrorList model module.
 * @module orders_v2026_01_01/model/ErrorList
 * @version 2026-01-01
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
     * @alias module:orders_v2026_01_01/model/ErrorList
     * @class
     * @param errors {[Error]} A list of errors.
     */
    constructor(errors: [Error]);
    errors: Error[];
}
import { Error } from './Error.js';
//# sourceMappingURL=ErrorList.d.ts.map