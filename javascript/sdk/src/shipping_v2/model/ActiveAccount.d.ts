/**
 * The ActiveAccount model module.
 * @module shipping_v2/model/ActiveAccount
 * @version v2
 */
export class ActiveAccount {
    /**
     * Constructs a <code>ActiveAccount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ActiveAccount} obj Optional instance to populate.
     * @return {ActiveAccount} The populated <code>ActiveAccount</code> instance.
     */
    static constructFromObject(data: any, obj: ActiveAccount): ActiveAccount;
    /**
     * Identifier for the seller's carrier account.
     * @member {String} accountId
     * @type {String}
     */
    accountId: string;
    /**
     * The carrier identifier for the offering, provided by the carrier.
     * @member {String} carrierId
     * @type {String}
     */
    carrierId: string;
}
//# sourceMappingURL=ActiveAccount.d.ts.map