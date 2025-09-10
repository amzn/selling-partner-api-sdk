/**
 * The Errors model module.
 * @module pricing_v0/model/Errors
 * @version v0
 */
export class Errors {
    /**
     * Constructs a <code>Errors</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Errors} obj Optional instance to populate.
     * @return {Errors} The populated <code>Errors</code> instance.
     */
    static constructFromObject(data: any, obj: Errors): Errors;
    /**
     * Constructs a new <code>Errors</code>.
     * A list of error responses returned when a request is unsuccessful.
     * @alias module:pricing_v0/model/Errors
     * @class
     * @param errors {[Error]} A list of error responses returned when a request is unsuccessful.
     */
    constructor(errors: [Error]);
    errors: [Error];
}
import { Error } from './Error.js';
//# sourceMappingURL=Errors.d.ts.map