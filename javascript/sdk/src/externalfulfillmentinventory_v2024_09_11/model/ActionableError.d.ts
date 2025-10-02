/**
 * The ActionableError model module.
 * @module externalfulfillmentinventory_v2024_09_11/model/ActionableError
 * @version 2024-09-11
 */
export class ActionableError {
    /**
     * Constructs a <code>ActionableError</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ActionableError} obj Optional instance to populate.
     * @return {ActionableError} The populated <code>ActionableError</code> instance.
     */
    static constructFromObject(data: any, obj: ActionableError): ActionableError;
    /**
     * The top level error type that may contain multiple error subtypes.
     * @member {String} errorType
     * @type {String}
     */
    errorType: string;
    /**
     * The secondary level error type.
     * @member {String} errorSubType
     * @type {String}
     */
    errorSubType: string;
}
//# sourceMappingURL=ActionableError.d.ts.map