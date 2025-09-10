/**
 * The BuyerCustomizedInfoDetail model module.
 * @module orders_v0/model/BuyerCustomizedInfoDetail
 * @version v0
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
     * The location of a ZIP file containing Amazon Custom data.
     * @member {String} customizedURL
     * @type {String}
     */
    customizedURL: string;
}
//# sourceMappingURL=BuyerCustomizedInfoDetail.d.ts.map