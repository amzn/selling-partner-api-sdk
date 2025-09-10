/**
 * The BuyerTaxInformation model module.
 * @module orders_v0/model/BuyerTaxInformation
 * @version v0
 */
export class BuyerTaxInformation {
    /**
     * Constructs a <code>BuyerTaxInformation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {BuyerTaxInformation} obj Optional instance to populate.
     * @return {BuyerTaxInformation} The populated <code>BuyerTaxInformation</code> instance.
     */
    static constructFromObject(data: any, obj: BuyerTaxInformation): BuyerTaxInformation;
    /**
     * Business buyer's company legal name.
     * @member {String} buyerLegalCompanyName
     * @type {String}
     */
    buyerLegalCompanyName: string;
    /**
     * Business buyer's address.
     * @member {String} buyerBusinessAddress
     * @type {String}
     */
    buyerBusinessAddress: string;
    /**
     * Business buyer's tax registration ID.
     * @member {String} buyerTaxRegistrationId
     * @type {String}
     */
    buyerTaxRegistrationId: string;
    /**
     * Business buyer's tax office.
     * @member {String} buyerTaxOffice
     * @type {String}
     */
    buyerTaxOffice: string;
}
//# sourceMappingURL=BuyerTaxInformation.d.ts.map