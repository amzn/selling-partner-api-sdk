/**
 * The Seller model module.
 * @module services_v1/model/Seller
 * @version v1
 */
export class Seller {
    /**
     * Constructs a <code>Seller</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Seller} obj Optional instance to populate.
     * @return {Seller} The populated <code>Seller</code> instance.
     */
    static constructFromObject(data: any, obj: Seller): Seller;
    /**
     * The identifier of the seller of the service job.
     * @member {String} sellerId
     * @type {String}
     */
    sellerId: string;
}
//# sourceMappingURL=Seller.d.ts.map