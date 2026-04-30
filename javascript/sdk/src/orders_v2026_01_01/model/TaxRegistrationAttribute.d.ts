/**
 * The TaxRegistrationAttribute model module.
 * @module orders_v2026_01_01/model/TaxRegistrationAttribute
 * @version 2026-01-01
 */
export class TaxRegistrationAttribute {
    /**
     * Constructs a <code>TaxRegistrationAttribute</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {TaxRegistrationAttribute} obj Optional instance to populate.
     * @return {TaxRegistrationAttribute} The populated <code>TaxRegistrationAttribute</code> instance.
     */
    static constructFromObject(data: Object, obj: TaxRegistrationAttribute): TaxRegistrationAttribute;
    /**
     * The name of the tax registration attribute.  **Possible values**: `TAX_OFFICE`
     * @member {String} key
     * @type {String}
     */
    key: string;
    /**
     * The value of the tax registration attribute.
     * @member {String} value
     * @type {String}
     */
    value: string;
}
//# sourceMappingURL=TaxRegistrationAttribute.d.ts.map