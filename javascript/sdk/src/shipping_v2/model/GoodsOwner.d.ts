/**
 * The GoodsOwner model module.
 * @module shipping_v2/model/GoodsOwner
 * @version v2
 */
export class GoodsOwner {
    /**
     * Constructs a <code>GoodsOwner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GoodsOwner} obj Optional instance to populate.
     * @return {GoodsOwner} The populated <code>GoodsOwner</code> instance.
     */
    static constructFromObject(data: any, obj: GoodsOwner): GoodsOwner;
    /**
     * Constructs a new <code>GoodsOwner</code>.
     * The seller owning the goods before handing them over to the carrier
     * @alias module:shipping_v2/model/GoodsOwner
     * @class
     * @param merchantId {String} merchant Id of provided merchant
     */
    constructor(merchantId: string);
    merchantId: string;
}
//# sourceMappingURL=GoodsOwner.d.ts.map