/**
 * The GiftOption model module.
 * @module orders_v2026_01_01/model/GiftOption
 * @version 2026-01-01
 */
export class GiftOption {
    /**
     * Constructs a <code>GiftOption</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GiftOption} obj Optional instance to populate.
     * @return {GiftOption} The populated <code>GiftOption</code> instance.
     */
    static constructFromObject(data: any, obj: GiftOption): GiftOption;
    /**
     * Personal message from the buyer to be included with the gift-wrapped item.
     * @member {String} giftMessage
     * @type {String}
     */
    giftMessage: string;
    /**
     * Type or quality level of gift wrapping service selected by the customer.
     * @member {String} giftWrapLevel
     * @type {String}
     */
    giftWrapLevel: string;
}
//# sourceMappingURL=GiftOption.d.ts.map