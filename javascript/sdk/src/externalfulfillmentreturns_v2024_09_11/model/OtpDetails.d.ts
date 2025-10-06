/**
 * The OtpDetails model module.
 * @module externalfulfillmentreturns_v2024_09_11/model/OtpDetails
 * @version 2024-09-11
 */
export class OtpDetails {
    /**
     * Constructs a <code>OtpDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {OtpDetails} obj Optional instance to populate.
     * @return {OtpDetails} The populated <code>OtpDetails</code> instance.
     */
    static constructFromObject(data: any, obj: OtpDetails): OtpDetails;
    /**
     * Constructs a new <code>OtpDetails</code>.
     * One-time password (OTP) details of the return item.
     * @alias module:externalfulfillmentreturns_v2024_09_11/model/OtpDetails
     * @class
     * @param otp {String} One-time password to validate the return delivered to the seller.
     * @param validTill {Number} The UNIX timestamp of when the verification code expires.
     */
    constructor(otp: string, validTill: number);
    otp: string;
    validTill: number;
}
//# sourceMappingURL=OtpDetails.d.ts.map