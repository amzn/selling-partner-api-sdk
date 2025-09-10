/**
 * The UnfulfillableQuantity model module.
 * @module fbainventory_v1/model/UnfulfillableQuantity
 * @version v1
 */
export class UnfulfillableQuantity {
    /**
     * Constructs a <code>UnfulfillableQuantity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {UnfulfillableQuantity} obj Optional instance to populate.
     * @return {UnfulfillableQuantity} The populated <code>UnfulfillableQuantity</code> instance.
     */
    static constructFromObject(data: any, obj: UnfulfillableQuantity): UnfulfillableQuantity;
    /**
     * The total number of units in Amazon's fulfillment network in unsellable condition.
     * @member {Number} totalUnfulfillableQuantity
     * @type {Number}
     */
    totalUnfulfillableQuantity: number;
    /**
     * The number of units in customer damaged disposition.
     * @member {Number} customerDamagedQuantity
     * @type {Number}
     */
    customerDamagedQuantity: number;
    /**
     * The number of units in warehouse damaged disposition.
     * @member {Number} warehouseDamagedQuantity
     * @type {Number}
     */
    warehouseDamagedQuantity: number;
    /**
     * The number of units in distributor damaged disposition.
     * @member {Number} distributorDamagedQuantity
     * @type {Number}
     */
    distributorDamagedQuantity: number;
    /**
     * The number of units in carrier damaged disposition.
     * @member {Number} carrierDamagedQuantity
     * @type {Number}
     */
    carrierDamagedQuantity: number;
    /**
     * The number of units in defective disposition.
     * @member {Number} defectiveQuantity
     * @type {Number}
     */
    defectiveQuantity: number;
    /**
     * The number of units in expired disposition.
     * @member {Number} expiredQuantity
     * @type {Number}
     */
    expiredQuantity: number;
}
//# sourceMappingURL=UnfulfillableQuantity.d.ts.map