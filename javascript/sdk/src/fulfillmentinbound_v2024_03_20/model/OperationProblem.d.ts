/**
 * The OperationProblem model module.
 * @module fulfillmentinbound_v2024_03_20/model/OperationProblem
 * @version 2024-03-20
 */
export class OperationProblem {
    /**
     * Constructs a <code>OperationProblem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {OperationProblem} obj Optional instance to populate.
     * @return {OperationProblem} The populated <code>OperationProblem</code> instance.
     */
    static constructFromObject(data: any, obj: OperationProblem): OperationProblem;
    /**
     * Constructs a new <code>OperationProblem</code>.
     * A problem with additional properties persisted to an operation.
     * @alias module:fulfillmentinbound_v2024_03_20/model/OperationProblem
     * @class
     * @param code {String} An error code that identifies the type of error that occurred.
     * @param message {String} A message that describes the error condition.
     * @param severity {String} The severity of the problem. Possible values: `WARNING`, `ERROR`.
     */
    constructor(code: string, message: string, severity: string);
    code: string;
    message: string;
    severity: string;
    /**
     * Additional details that can help the caller understand or fix the issue.
     * @member {String} details
     * @type {String}
     */
    details: string;
}
//# sourceMappingURL=OperationProblem.d.ts.map