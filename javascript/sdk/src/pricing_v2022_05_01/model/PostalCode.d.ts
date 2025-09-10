/**
 * The PostalCode model module.
 * @module pricing_v2022_05_01/model/PostalCode
 * @version 2022-05-01
 */
export class PostalCode {
    /**
     * Constructs a <code>PostalCode</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {PostalCode} obj Optional instance to populate.
     * @return {PostalCode} The populated <code>PostalCode</code> instance.
     */
    static constructFromObject(data: any, obj: PostalCode): PostalCode;
    /**
     * Country code value
     * @member {String} countryCode
     * @type {String}
     */
    countryCode: string;
    /**
     * Postal code value
     * @member {String} value
     * @type {String}
     */
    value: string;
}
//# sourceMappingURL=PostalCode.d.ts.map