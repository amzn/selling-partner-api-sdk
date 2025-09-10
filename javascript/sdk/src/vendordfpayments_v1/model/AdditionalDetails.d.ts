/**
 * The AdditionalDetails model module.
 * @module vendordfpayments_v1/model/AdditionalDetails
 * @version v1
 */
export class AdditionalDetails {
    /**
     * Constructs a <code>AdditionalDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {AdditionalDetails} obj Optional instance to populate.
     * @return {AdditionalDetails} The populated <code>AdditionalDetails</code> instance.
     */
    static constructFromObject(data: any, obj: AdditionalDetails): AdditionalDetails;
    /**
     * Constructs a new <code>AdditionalDetails</code>.
     * A field where the selling party can provide additional information for tax-related or any other purposes.
     * @alias module:vendordfpayments_v1/model/AdditionalDetails
     * @class
     * @param type {String} The type of the additional information provided by the selling party.
     * @param detail {String} The detail of the additional information provided by the selling party.
     */
    constructor(type: string, detail: string);
    type: string;
    detail: string;
    /**
     * The language code of the additional information detail.
     * @member {String} languageCode
     * @type {String}
     */
    languageCode: string;
}
export namespace AdditionalDetails {
    namespace TypeEnum {
        let SUR: string;
        let OCR: string;
    }
    /**
     * *
     */
    type TypeEnum = string;
}
//# sourceMappingURL=AdditionalDetails.d.ts.map