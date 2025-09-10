/**
 * The ReservedQuantity model module.
 * @module fbainventory_v1/model/ReservedQuantity
 * @version v1
 */
export class ReservedQuantity {
    /**
     * Constructs a <code>ReservedQuantity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ReservedQuantity} obj Optional instance to populate.
     * @return {ReservedQuantity} The populated <code>ReservedQuantity</code> instance.
     */
    static constructFromObject(data: any, obj: ReservedQuantity): ReservedQuantity;
    /**
     * The total number of units in Amazon's fulfillment network that are currently being picked, packed, and shipped; or are sidelined for measurement, sampling, or other internal processes.
     * @member {Number} totalReservedQuantity
     * @type {Number}
     */
    totalReservedQuantity: number;
    /**
     * The number of units reserved for customer orders.
     * @member {Number} pendingCustomerOrderQuantity
     * @type {Number}
     */
    pendingCustomerOrderQuantity: number;
    /**
     * The number of units being transferred from one fulfillment center to another.
     * @member {Number} pendingTransshipmentQuantity
     * @type {Number}
     */
    pendingTransshipmentQuantity: number;
    /**
     * The number of units that have been sidelined at the fulfillment center for additional processing.
     * @member {Number} fcProcessingQuantity
     * @type {Number}
     */
    fcProcessingQuantity: number;
}
//# sourceMappingURL=ReservedQuantity.d.ts.map