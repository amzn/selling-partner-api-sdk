/**
 * The OutboundExecutionError model module.
 * @module awd_v2024_05_09/model/OutboundExecutionError
 * @version 2024-05-09
 */
export class OutboundExecutionError {
    /**
     * Constructs a <code>OutboundExecutionError</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {OutboundExecutionError} obj Optional instance to populate.
     * @return {OutboundExecutionError} The populated <code>OutboundExecutionError</code> instance.
     */
    static constructFromObject(data: Object, obj: OutboundExecutionError): OutboundExecutionError;
    /**
     * Constructs a new <code>OutboundExecutionError</code>.
     * Execution errors associated with the outbound order. This field will be populated if the order failed validation.
     * @alias module:awd_v2024_05_09/model/OutboundExecutionError
     * @class
     * @param failureCode {String} Failure code details for the error.
     * @param failureReasons {String[]} Failure reasons for the error.
     */
    constructor(failureCode: string, failureReasons: string[]);
    failureCode: string;
    failureReasons: string[];
    /**
     * MSKU associated with the error.
     * @member {String} sku
     * @type {String}
     */
    sku: string;
}
//# sourceMappingURL=OutboundExecutionError.d.ts.map