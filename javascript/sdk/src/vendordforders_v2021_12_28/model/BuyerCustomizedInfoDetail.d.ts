/**
 * The BuyerCustomizedInfoDetail model module.
 * @module vendordforders_v2021_12_28/model/BuyerCustomizedInfoDetail
 * @version 2021-12-28
 */
export class BuyerCustomizedInfoDetail {
    /**
     * Constructs a <code>BuyerCustomizedInfoDetail</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {BuyerCustomizedInfoDetail} obj Optional instance to populate.
     * @return {BuyerCustomizedInfoDetail} The populated <code>BuyerCustomizedInfoDetail</code> instance.
     */
    static constructFromObject(data: any, obj: BuyerCustomizedInfoDetail): BuyerCustomizedInfoDetail;
    /**
     * A [Base 64](https://datatracker.ietf.org/doc/html/rfc4648#section-4) encoded URL using the UTF-8 character set. The URL provides the location of the zip file that specifies the types of customizations or configurations allowed by the vendor, along with types and ranges for the attributes of their products.
     * @member {String} customizedUrl
     * @type {String}
     */
    customizedUrl: string;
}
//# sourceMappingURL=BuyerCustomizedInfoDetail.d.ts.map