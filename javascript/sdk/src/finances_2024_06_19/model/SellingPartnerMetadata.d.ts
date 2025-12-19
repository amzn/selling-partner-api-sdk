/**
 * The SellingPartnerMetadata model module.
 * @module finances_2024_06_19/model/SellingPartnerMetadata
 * @version 2024-06-19
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
     * A unique seller identifier.
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
     * The identifier of the marketplace where the transaction occurred. The marketplace ID is the globally unique identifier of a marketplace. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
     * @member {String} marketplaceId
     * @type {String}
     */
    marketplaceId: string;
}
//# sourceMappingURL=SellingPartnerMetadata.d.ts.map