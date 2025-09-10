/**
 * The ValidationMetadata model module.
 * @module shipping_v2/model/ValidationMetadata
 * @version v2
 */
export class ValidationMetadata {
    /**
     * Constructs a <code>ValidationMetadata</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ValidationMetadata} obj Optional instance to populate.
     * @return {ValidationMetadata} The populated <code>ValidationMetadata</code> instance.
     */
    static constructFromObject(data: any, obj: ValidationMetadata): ValidationMetadata;
    /**
     * errorMessage for the error.
     * @member {String} errorMessage
     * @type {String}
     */
    errorMessage: string;
    /**
     * validationStrategy for the error.
     * @member {String} validationStrategy
     * @type {String}
     */
    validationStrategy: string;
    /**
     * Value.
     * @member {String} value
     * @type {String}
     */
    value: string;
}
//# sourceMappingURL=ValidationMetadata.d.ts.map