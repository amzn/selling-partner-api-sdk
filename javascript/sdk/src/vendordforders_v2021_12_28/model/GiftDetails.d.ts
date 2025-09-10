/**
 * The GiftDetails model module.
 * @module vendordforders_v2021_12_28/model/GiftDetails
 * @version 2021-12-28
 */
export class GiftDetails {
    /**
     * Constructs a <code>GiftDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GiftDetails} obj Optional instance to populate.
     * @return {GiftDetails} The populated <code>GiftDetails</code> instance.
     */
    static constructFromObject(data: any, obj: GiftDetails): GiftDetails;
    /**
     * Gift message to be printed in shipment.
     * @member {String} giftMessage
     * @type {String}
     */
    giftMessage: string;
    /**
     * Gift wrap identifier for the gift wrapping, if any.
     * @member {String} giftWrapId
     * @type {String}
     */
    giftWrapId: string;
}
//# sourceMappingURL=GiftDetails.d.ts.map