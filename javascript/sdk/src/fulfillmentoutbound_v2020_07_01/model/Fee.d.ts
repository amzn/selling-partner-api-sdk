/**
 * The Fee model module.
 * @module fulfillmentoutbound_v2020_07_01/model/Fee
 * @version 2020-07-01
 */
export class Fee {
    /**
     * Constructs a <code>Fee</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Fee} obj Optional instance to populate.
     * @return {Fee} The populated <code>Fee</code> instance.
     */
    static constructFromObject(data: any, obj: Fee): Fee;
    /**
     * Constructs a new <code>Fee</code>.
     * Fee type and cost.
     * @alias module:fulfillmentoutbound_v2020_07_01/model/Fee
     * @class
     * @param name {String} The type of fee.
     * @param amount {Money}
     */
    constructor(name: string, amount: Money);
    name: string;
    amount: Money;
}
export namespace Fee {
    namespace NameEnum {
        let FBAPerUnitFulfillmentFee: string;
        let FBAPerOrderFulfillmentFee: string;
        let FBATransportationFee: string;
        let FBAFulfillmentCODFee: string;
    }
    /**
     * *
     */
    type NameEnum = string;
}
import { Money } from './Money.js';
//# sourceMappingURL=Fee.d.ts.map