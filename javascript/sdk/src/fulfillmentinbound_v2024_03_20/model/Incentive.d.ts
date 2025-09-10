/**
 * The Incentive model module.
 * @module fulfillmentinbound_v2024_03_20/model/Incentive
 * @version 2024-03-20
 */
export class Incentive {
    /**
     * Constructs a <code>Incentive</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Incentive} obj Optional instance to populate.
     * @return {Incentive} The populated <code>Incentive</code> instance.
     */
    static constructFromObject(data: any, obj: Incentive): Incentive;
    /**
     * Constructs a new <code>Incentive</code>.
     * Contains details about cost related modifications to the placement cost.
     * @alias module:fulfillmentinbound_v2024_03_20/model/Incentive
     * @class
     * @param description {String} Description of the incentive.
     * @param target {String} Target of the incentive. Possible values: 'Placement Services', 'Fulfillment Fee Discount'.
     * @param type {String} Type of incentive. Possible values: `FEE`, `DISCOUNT`.
     * @param value {Currency}
     */
    constructor(description: string, target: string, type: string, value: Currency);
    description: string;
    target: string;
    type: string;
    value: Currency;
}
import { Currency } from './Currency.js';
//# sourceMappingURL=Incentive.d.ts.map