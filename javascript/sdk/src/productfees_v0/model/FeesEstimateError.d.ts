/**
 * The FeesEstimateError model module.
 * @module productfees_v0/model/FeesEstimateError
 * @version v0
 */
export class FeesEstimateError {
    /**
     * Constructs a <code>FeesEstimateError</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {FeesEstimateError} obj Optional instance to populate.
     * @return {FeesEstimateError} The populated <code>FeesEstimateError</code> instance.
     */
    static constructFromObject(data: any, obj: FeesEstimateError): FeesEstimateError;
    /**
     * Constructs a new <code>FeesEstimateError</code>.
     * An unexpected error occurred during this operation.
     * @alias module:productfees_v0/model/FeesEstimateError
     * @class
     * @param type {String} An error type, identifying either the receiver or the sender as the originator of the error.
     * @param code {String} An error code that identifies the type of error that occurred.
     * @param message {String} A message that describes the error condition.
     * @param detail {Array[]} Additional information that can help the caller understand or fix the issue.
     */
    constructor(type: string, code: string, message: string, detail: any[][]);
    type: string;
    code: string;
    message: string;
    detail: any[][];
}
//# sourceMappingURL=FeesEstimateError.d.ts.map