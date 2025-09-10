/**
 * The CarrierAccount model module.
 * @module shipping_v2/model/CarrierAccount
 * @version v2
 */
export class CarrierAccount {
    /**
     * Constructs a <code>CarrierAccount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {CarrierAccount} obj Optional instance to populate.
     * @return {CarrierAccount} The populated <code>CarrierAccount</code> instance.
     */
    static constructFromObject(data: any, obj: CarrierAccount): CarrierAccount;
    /**
     * Constructs a new <code>CarrierAccount</code>.
     * Carrier Account details used to fetch rates.
     * @alias module:shipping_v2/model/CarrierAccount
     * @class
     * @param carrierAccountId {String} Identifier for the seller's carrier account.
     * @param carrierId {String} The carrier identifier for the offering, provided by the carrier.
     */
    constructor(carrierAccountId: string, carrierId: string);
    carrierAccountId: string;
    carrierId: string;
}
//# sourceMappingURL=CarrierAccount.d.ts.map