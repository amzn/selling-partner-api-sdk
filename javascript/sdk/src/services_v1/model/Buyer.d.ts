/**
 * The Buyer model module.
 * @module services_v1/model/Buyer
 * @version v1
 */
export class Buyer {
    /**
     * Constructs a <code>Buyer</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Buyer} obj Optional instance to populate.
     * @return {Buyer} The populated <code>Buyer</code> instance.
     */
    static constructFromObject(data: any, obj: Buyer): Buyer;
    /**
     * The identifier of the buyer.
     * @member {String} buyerId
     * @type {String}
     */
    buyerId: string;
    /**
     * The name of the buyer.
     * @member {String} name
     * @type {String}
     */
    name: string;
    /**
     * The phone number of the buyer.
     * @member {String} phone
     * @type {String}
     */
    phone: string;
    /**
     * When true, the service is for an Amazon Prime buyer.
     * @member {Boolean} isPrimeMember
     * @type {Boolean}
     */
    isPrimeMember: boolean;
}
//# sourceMappingURL=Buyer.d.ts.map