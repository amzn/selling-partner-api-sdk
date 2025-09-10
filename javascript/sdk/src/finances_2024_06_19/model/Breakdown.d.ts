/**
 * The Breakdown model module.
 * @module finances_2024_06_19/model/Breakdown
 * @version 2024-06-19
 */
export class Breakdown {
    /**
     * Constructs a <code>Breakdown</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Breakdown} obj Optional instance to populate.
     * @return {Breakdown} The populated <code>Breakdown</code> instance.
     */
    static constructFromObject(data: any, obj: Breakdown): Breakdown;
    /**
     * The type of charge.
     * @member {String} breakdownType
     * @type {String}
     */
    breakdownType: string;
    /**
     * @member {Currency} breakdownAmount
     * @type {Currency}
     */
    breakdownAmount: Currency;
    /**
     * A list of breakdowns that detail how the total amount is calculated for the transaction.
     * @member {[Breakdown]} breakdowns
     * @type {[Breakdown]}
     */
    breakdowns: [Breakdown];
}
import { Currency } from './Currency.js';
//# sourceMappingURL=Breakdown.d.ts.map