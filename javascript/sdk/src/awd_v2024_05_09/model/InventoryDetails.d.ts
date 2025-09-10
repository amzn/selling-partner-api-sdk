/**
 * The InventoryDetails model module.
 * @module awd_v2024_05_09/model/InventoryDetails
 * @version 2024-05-09
 */
export class InventoryDetails {
    /**
     * Constructs a <code>InventoryDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {InventoryDetails} obj Optional instance to populate.
     * @return {InventoryDetails} The populated <code>InventoryDetails</code> instance.
     */
    static constructFromObject(data: any, obj: InventoryDetails): InventoryDetails;
    /**
     * Quantity that is available for downstream channel replenishment.
     * @member {Number} availableDistributableQuantity
     * @type {Number}
     */
    availableDistributableQuantity: number;
    /**
     * Quantity that is in transit from AWD and has not yet been received at FBA.
     * @member {Number} replenishmentQuantity
     * @type {Number}
     */
    replenishmentQuantity: number;
    /**
     * Quantity that is reserved for a downstream channel replenishment order that is being prepared for shipment.
     * @member {Number} reservedDistributableQuantity
     * @type {Number}
     */
    reservedDistributableQuantity: number;
}
//# sourceMappingURL=InventoryDetails.d.ts.map