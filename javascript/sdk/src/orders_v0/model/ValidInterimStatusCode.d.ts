/**
 * The ValidInterimStatusCode model module.
 * @module orders_v0/model/ValidInterimStatusCode
 * @version v0
 */
export class ValidInterimStatusCode {
    /**
     * Constructs a <code>ValidInterimStatusCode</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ValidInterimStatusCode} obj Optional instance to populate.
     * @return {ValidInterimStatusCode} The populated <code>ValidInterimStatusCode</code> instance.
     */
    static constructFromObject(data: Object, obj: ValidInterimStatusCode): ValidInterimStatusCode;
    /**
     * Constructs a new <code>ValidInterimStatusCode</code>.
     * A valid interim status code and its customer-facing description. Available with the &#x60;getOrderRegulatedInfo&#x60; operation to indicate which status codes can populate the &#x60;InterimStatusDetail&#x60; field.
     * @alias module:orders_v0/model/ValidInterimStatusCode
     * @class
     * @param statusCode {String} The identifier for the interim status type.
     * @param statusDescription {String} A customer-facing description of the interim status.
     */
    constructor(statusCode: string, statusDescription: string);
    statusCode: string;
    statusDescription: string;
}
//# sourceMappingURL=ValidInterimStatusCode.d.ts.map