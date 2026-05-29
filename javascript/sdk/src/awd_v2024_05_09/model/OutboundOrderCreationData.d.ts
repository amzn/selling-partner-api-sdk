/**
 * The OutboundOrderCreationData model module.
 * @module awd_v2024_05_09/model/OutboundOrderCreationData
 * @version 2024-05-09
 */
export class OutboundOrderCreationData {
    /**
     * Constructs a <code>OutboundOrderCreationData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {OutboundOrderCreationData} obj Optional instance to populate.
     * @return {OutboundOrderCreationData} The populated <code>OutboundOrderCreationData</code> instance.
     */
    static constructFromObject(data: Object, obj: OutboundOrderCreationData): OutboundOrderCreationData;
    /**
     * Order preferences for the outbound order.
     * @member {OrderAttribute[]} orderPreferences
     * @type {OrderAttribute[]}
     */
    orderPreferences: OrderAttribute[];
    /**
     * List of packages to be outbound.
     * @member {DistributionPackageQuantity[]} packagesToOutbound
     * @type {DistributionPackageQuantity[]}
     */
    packagesToOutbound: DistributionPackageQuantity[];
    /**
     * List of product units to be outbound.
     * @member {ProductQuantity[]} productsToOutbound
     * @type {ProductQuantity[]}
     */
    productsToOutbound: ProductQuantity[];
}
import { OrderAttribute } from './OrderAttribute.js';
import { DistributionPackageQuantity } from './DistributionPackageQuantity.js';
import { ProductQuantity } from './ProductQuantity.js';
//# sourceMappingURL=OutboundOrderCreationData.d.ts.map