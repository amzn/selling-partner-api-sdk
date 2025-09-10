/**
 * The TaxRegistrationDetails model module.
 * @module vendorshipments_v1/model/TaxRegistrationDetails
 * @version v1
 */
export class TaxRegistrationDetails {
    /**
     * Constructs a <code>TaxRegistrationDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {TaxRegistrationDetails} obj Optional instance to populate.
     * @return {TaxRegistrationDetails} The populated <code>TaxRegistrationDetails</code> instance.
     */
    static constructFromObject(data: any, obj: TaxRegistrationDetails): TaxRegistrationDetails;
    /**
     * Constructs a new <code>TaxRegistrationDetails</code>.
     * Tax registration details of the entity.
     * @alias module:vendorshipments_v1/model/TaxRegistrationDetails
     * @class
     * @param taxRegistrationType {String} Tax registration type for the entity.
     * @param taxRegistrationNumber {String} Tax registration number for the entity. For example, VAT ID.
     */
    constructor(taxRegistrationType: string, taxRegistrationNumber: string);
    taxRegistrationType: string;
    taxRegistrationNumber: string;
}
export namespace TaxRegistrationDetails {
    namespace TaxRegistrationTypeEnum {
        let VAT: string;
        let GST: string;
    }
    /**
     * *
     */
    type TaxRegistrationTypeEnum = string;
}
//# sourceMappingURL=TaxRegistrationDetails.d.ts.map