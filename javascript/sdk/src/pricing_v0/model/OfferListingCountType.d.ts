/**
 * The OfferListingCountType model module.
 * @module pricing_v0/model/OfferListingCountType
 * @version v0
 */
export class OfferListingCountType {
    /**
     * Constructs a <code>OfferListingCountType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {OfferListingCountType} obj Optional instance to populate.
     * @return {OfferListingCountType} The populated <code>OfferListingCountType</code> instance.
     */
    static constructFromObject(data: any, obj: OfferListingCountType): OfferListingCountType;
    /**
     * Constructs a new <code>OfferListingCountType</code>.
     * The number of offer listings with the specified condition.
     * @alias module:pricing_v0/model/OfferListingCountType
     * @class
     * @param count {Number} The number of offer listings.
     * @param condition {String} The condition of the item.
     */
    constructor(count: number, condition: string);
    count: number;
    condition: string;
}
//# sourceMappingURL=OfferListingCountType.d.ts.map