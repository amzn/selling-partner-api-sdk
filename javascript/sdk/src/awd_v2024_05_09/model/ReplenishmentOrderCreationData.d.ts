/**
 * The ReplenishmentOrderCreationData model module.
 * @module awd_v2024_05_09/model/ReplenishmentOrderCreationData
 * @version 2024-05-09
 */
export class ReplenishmentOrderCreationData {
    /**
     * Constructs a <code>ReplenishmentOrderCreationData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ReplenishmentOrderCreationData} obj Optional instance to populate.
     * @return {ReplenishmentOrderCreationData} The populated <code>ReplenishmentOrderCreationData</code> instance.
     */
    static constructFromObject(data: any, obj: ReplenishmentOrderCreationData): ReplenishmentOrderCreationData;
    /**
     * @member {ReplenishmentPreferences} preferences
     * @type {ReplenishmentPreferences}
     */
    preferences: ReplenishmentPreferences;
    /**
     * Requested amount of single product units to be replenished.
     * @member {[DistributionProduct]} products
     * @type {[DistributionProduct]}
     */
    products: [DistributionProduct];
}
import { ReplenishmentPreferences } from './ReplenishmentPreferences.js';
import { DistributionProduct } from './DistributionProduct.js';
//# sourceMappingURL=ReplenishmentOrderCreationData.d.ts.map