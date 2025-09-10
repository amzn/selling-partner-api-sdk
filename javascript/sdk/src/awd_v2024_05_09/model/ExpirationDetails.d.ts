/**
 * The ExpirationDetails model module.
 * @module awd_v2024_05_09/model/ExpirationDetails
 * @version 2024-05-09
 */
export class ExpirationDetails {
    /**
     * Constructs a <code>ExpirationDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ExpirationDetails} obj Optional instance to populate.
     * @return {ExpirationDetails} The populated <code>ExpirationDetails</code> instance.
     */
    static constructFromObject(data: any, obj: ExpirationDetails): ExpirationDetails;
    /**
     * The expiration date of the SKU.
     * @member {Date} expiration
     * @type {Date}
     */
    expiration: Date;
    /**
     * The quantity that is present in AWD.
     * @member {Number} onhandQuantity
     * @type {Number}
     */
    onhandQuantity: number;
}
//# sourceMappingURL=ExpirationDetails.d.ts.map