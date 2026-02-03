/**
 * The GetRatesResult model module.
 * @module shipping_v2/model/GetRatesResult
 * @version v2
 */
export class GetRatesResult {
    /**
     * Constructs a <code>GetRatesResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetRatesResult} obj Optional instance to populate.
     * @return {GetRatesResult} The populated <code>GetRatesResult</code> instance.
     */
    static constructFromObject(data: any, obj: GetRatesResult): GetRatesResult;
    /**
     * Constructs a new <code>GetRatesResult</code>.
     * The payload for the getRates operation.
     * @alias module:shipping_v2/model/GetRatesResult
     * @class
     * @param requestToken {String} A unique token generated to identify a getRates operation.
     * @param rates {Array[]} A list of eligible shipping service offerings.
     */
    constructor(requestToken: string, rates: any[][]);
    requestToken: string;
    rates: any[][];
    /**
     * A list of ineligible shipping service offerings.
     * @member {Array[]} ineligibleRates
     * @type {Array[]}
     */
    ineligibleRates: any[][];
}
//# sourceMappingURL=GetRatesResult.d.ts.map