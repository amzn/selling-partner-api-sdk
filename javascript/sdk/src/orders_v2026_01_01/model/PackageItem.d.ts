/**
 * The PackageItem model module.
 * @module orders_v2026_01_01/model/PackageItem
 * @version 2026-01-01
 */
export class PackageItem {
    /**
     * Constructs a <code>PackageItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {PackageItem} obj Optional instance to populate.
     * @return {PackageItem} The populated <code>PackageItem</code> instance.
     */
    static constructFromObject(data: any, obj: PackageItem): PackageItem;
    /**
     * Constructs a new <code>PackageItem</code>.
     * Individual order item contained within a shipping package.
     * @alias module:orders_v2026_01_01/model/PackageItem
     * @class
     * @param orderItemId {String} Unique identifier of the order item included in this package.
     * @param quantity {Number} Number of units of this item included in the package shipment.
     */
    constructor(orderItemId: string, quantity: number);
    orderItemId: string;
    quantity: number;
    /**
     * The transparency codes associated with this item for product authentication.
     * @member {Array[]} transparencyCodes
     * @type {Array[]}
     */
    transparencyCodes: any[][];
}
//# sourceMappingURL=PackageItem.d.ts.map