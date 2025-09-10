/**
 * The ExpiryDate model module.
 * @module transfers_v2024_06_01/model/ExpiryDate
 * @version 2024-06-01
 */
export class ExpiryDate {
    /**
     * Constructs a <code>ExpiryDate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ExpiryDate} obj Optional instance to populate.
     * @return {ExpiryDate} The populated <code>ExpiryDate</code> instance.
     */
    static constructFromObject(data: any, obj: ExpiryDate): ExpiryDate;
    /**
     * The month the card expires expressed as a number from `1` to `12`.
     * @member {String} month
     * @type {String}
     */
    month: string;
    /**
     * Year
     * @member {String} year
     * @type {String}
     */
    year: string;
}
//# sourceMappingURL=ExpiryDate.d.ts.map