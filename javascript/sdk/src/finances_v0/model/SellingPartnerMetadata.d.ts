/**
 * The SellingPartnerMetadata model module.
 * @module finances_v0/model/SellingPartnerMetadata
 * @version v0
 */
export class SellingPartnerMetadata {
    /**
     * Constructs a <code>SellingPartnerMetadata</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {SellingPartnerMetadata} obj Optional instance to populate.
     * @return {SellingPartnerMetadata} The populated <code>SellingPartnerMetadata</code> instance.
     */
    static constructFromObject(data: any, obj: SellingPartnerMetadata): SellingPartnerMetadata;
    /**
     * The unique seller identifier.
     * @member {String} sellingPartnerId
     * @type {String}
     */
    sellingPartnerId: string;
    /**
     * The type of account in the transaction.
     * @member {String} accountType
     * @type {String}
     */
    accountType: string;
    /**
     * The identifier of the marketplace in which the transaction occurred.
     * @member {String} marketplaceId
     * @type {String}
     */
    marketplaceId: string;
}
//# sourceMappingURL=SellingPartnerMetadata.d.ts.map