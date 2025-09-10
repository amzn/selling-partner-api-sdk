/**
 * The ItemQuantity model module.
 * @module vendororders_v1/model/ItemQuantity
 * @version v1
 */
export class ItemQuantity {
    /**
     * Constructs a <code>ItemQuantity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ItemQuantity} obj Optional instance to populate.
     * @return {ItemQuantity} The populated <code>ItemQuantity</code> instance.
     */
    static constructFromObject(data: any, obj: ItemQuantity): ItemQuantity;
    /**
     * Acknowledged quantity. This value should not be zero.
     * @member {Number} amount
     * @type {Number}
     */
    amount: number;
    /**
     * Unit of measure for the acknowledged quantity.
     * @member {String} unitOfMeasure
     * @type {String}
     */
    unitOfMeasure: string;
    /**
     * The case size, in the event that we ordered using cases.
     * @member {Number} unitSize
     * @type {Number}
     */
    unitSize: number;
}
export namespace ItemQuantity {
    namespace UnitOfMeasureEnum {
        let Cases: string;
        let Eaches: string;
    }
    /**
     * *
     */
    type UnitOfMeasureEnum = string;
}
//# sourceMappingURL=ItemQuantity.d.ts.map