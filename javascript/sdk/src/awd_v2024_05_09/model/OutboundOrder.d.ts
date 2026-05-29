/**
 * The OutboundOrder model module.
 * @module awd_v2024_05_09/model/OutboundOrder
 * @version 2024-05-09
 */
export class OutboundOrder {
    /**
     * Constructs a <code>OutboundOrder</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {OutboundOrder} obj Optional instance to populate.
     * @return {OutboundOrder} The populated <code>OutboundOrder</code> instance.
     */
    static constructFromObject(data: Object, obj: OutboundOrder): OutboundOrder;
    /**
     * Constructs a new <code>OutboundOrder</code>.
     * Represents an AWD outbound order.
     * @alias module:awd_v2024_05_09/model/OutboundOrder
     * @class
     * @param orderId {String} Order ID for the outbound order.
     * @param orderStatus {OutboundStatus}
     * @param outboundShipments {OutboundShipment[]} List of outbound shipments that are part of this order.
     */
    constructor(orderId: string, orderStatus: OutboundStatus, outboundShipments: OutboundShipment[]);
    orderId: string;
    orderStatus: OutboundStatus;
    outboundShipments: OutboundShipment[];
    /**
     * Date on which this outbound order was confirmed.
     * @member {Date} confirmedOn
     * @type {Date}
     */
    confirmedOn: Date;
    /**
     * Date on which this outbound order was created.
     * @member {Date} createdAt
     * @type {Date}
     */
    createdAt: Date;
    /**
     * List of packages that are eligible for outbound.
     * @member {DistributionPackageQuantity[]} eligiblePackagesToOutbound
     * @type {DistributionPackageQuantity[]}
     */
    eligiblePackagesToOutbound: DistributionPackageQuantity[];
    /**
     * List of product units that are eligible for outbound.
     * @member {ProductQuantity[]} eligibleProductsToOutbound
     * @type {ProductQuantity[]}
     */
    eligibleProductsToOutbound: ProductQuantity[];
    /**
     * Execution errors associated with the outbound order. This field will be populated if the order failed validation.
     * @member {OutboundExecutionError[]} executionErrors
     * @type {OutboundExecutionError[]}
     */
    executionErrors: OutboundExecutionError[];
    /**
     * Order preferences for this outbound order.
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
    /**
     * Outbound packages that are shipped after the execution has completed post confirmation.
     * @member {DistributionPackageQuantity[]} shippedOutboundPackages
     * @type {DistributionPackageQuantity[]}
     */
    shippedOutboundPackages: DistributionPackageQuantity[];
    /**
     * Outbound product units that are shipped after the execution has completed post confirmation.
     * @member {ProductQuantity[]} shippedOutboundProducts
     * @type {ProductQuantity[]}
     */
    shippedOutboundProducts: ProductQuantity[];
    /**
     * Date on which this outbound order was last updated.
     * @member {Date} updatedAt
     * @type {Date}
     */
    updatedAt: Date;
}
import { OutboundStatus } from './OutboundStatus.js';
import { OutboundShipment } from './OutboundShipment.js';
import { DistributionPackageQuantity } from './DistributionPackageQuantity.js';
import { ProductQuantity } from './ProductQuantity.js';
import { OutboundExecutionError } from './OutboundExecutionError.js';
import { OrderAttribute } from './OrderAttribute.js';
//# sourceMappingURL=OutboundOrder.d.ts.map