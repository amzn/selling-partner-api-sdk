/**
 * The BalanceListing model module.
 * @module sellerWallet_2024_03_01/model/BalanceListing
 * @version 2024-03-01
 */
export class BalanceListing {
    /**
     * Constructs a <code>BalanceListing</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {BalanceListing} obj Optional instance to populate.
     * @return {BalanceListing} The populated <code>BalanceListing</code> instance.
     */
    static constructFromObject(data: any, obj: BalanceListing): BalanceListing;
    /**
     * Collection that holds list of balances on the account
     * @member {Balance[]} balances
     * @type {Balance[]}
     */
    balances: Balance[];
}
import { Balance } from './Balance.js';
//# sourceMappingURL=BalanceListing.d.ts.map