/**
 * The ReplenishmentOrder model module.
 * @module awd_v2024_05_09/model/ReplenishmentOrder
 * @version 2024-05-09
 */
export class ReplenishmentOrder {
    /**
     * Constructs a <code>ReplenishmentOrder</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ReplenishmentOrder} obj Optional instance to populate.
     * @return {ReplenishmentOrder} The populated <code>ReplenishmentOrder</code> instance.
     */
    static constructFromObject(data: any, obj: ReplenishmentOrder): ReplenishmentOrder;
    /**
     * Constructs a new <code>ReplenishmentOrder</code>.
     * Represents an AWD replenishment order.
     * @alias module:awd_v2024_05_09/model/ReplenishmentOrder
     * @class
     * @param orderId {String} Order Id of the replenishment order.
     * @param status {ReplenishmentOrderStatus}
     * @param outboundShipments {[OutboundShipmentSummary]} List of outbound shipments that are part of this order.
     */
    constructor(orderId: string, status: ReplenishmentOrderStatus, outboundShipments: [OutboundShipmentSummary]);
    orderId: string;
    status: ReplenishmentOrderStatus;
    outboundShipments: OutboundShipmentSummary[];
    /**
     * Date on which this replenishment order was confirmed.
     * @member {Date} confirmedOn
     * @type {Date}
     */
    confirmedOn: Date;
    /**
     * Date on which this replenishment order was created.
     * @member {Date} createdAt
     * @type {Date}
     */
    createdAt: Date;
    /**
     * Distribution errors associated with the order related to the products or packages to replenish. This field will be populated if the order has products or packages which failed validation.
     * @member {DistributionIneligibleReason[]} distributionIneligibleReasons
     * @type {DistributionIneligibleReason[]}
     */
    distributionIneligibleReasons: DistributionIneligibleReason[];
    /**
     * List of product units that are eligible for replenishment.
     * @member {DistributionProduct[]} eligibleProducts
     * @type {DistributionProduct[]}
     */
    eligibleProducts: DistributionProduct[];
    /**
     * Requested amount of single product units to be replenished.
     * @member {DistributionProduct[]} products
     * @type {DistributionProduct[]}
     */
    products: DistributionProduct[];
    /**
     * Outbound product units that are shipped after the execution has completed post confirmation.
     * @member {DistributionProduct[]} shippedProducts
     * @type {DistributionProduct[]}
     */
    shippedProducts: DistributionProduct[];
    /**
     * Date on which this replenishment order was last updated.
     * @member {Date} updatedAt
     * @type {Date}
     */
    updatedAt: Date;
}
import { ReplenishmentOrderStatus } from './ReplenishmentOrderStatus.js';
import { OutboundShipmentSummary } from './OutboundShipmentSummary.js';
import { DistributionIneligibleReason } from './DistributionIneligibleReason.js';
import { DistributionProduct } from './DistributionProduct.js';
//# sourceMappingURL=ReplenishmentOrder.d.ts.map