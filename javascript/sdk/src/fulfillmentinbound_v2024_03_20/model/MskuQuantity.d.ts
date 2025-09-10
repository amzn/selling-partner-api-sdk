/**
 * The MskuQuantity model module.
 * @module fulfillmentinbound_v2024_03_20/model/MskuQuantity
 * @version 2024-03-20
 */
export class MskuQuantity {
    /**
     * Constructs a <code>MskuQuantity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {MskuQuantity} obj Optional instance to populate.
     * @return {MskuQuantity} The populated <code>MskuQuantity</code> instance.
     */
    static constructFromObject(data: any, obj: MskuQuantity): MskuQuantity;
    /**
     * Constructs a new <code>MskuQuantity</code>.
     * Represents an MSKU and the related quantity.
     * @alias module:fulfillmentinbound_v2024_03_20/model/MskuQuantity
     * @class
     * @param msku {String} The merchant SKU, a merchant-supplied identifier for a specific SKU.
     * @param quantity {Number} A positive integer.
     */
    constructor(msku: string, quantity: number);
    msku: string;
    quantity: number;
}
//# sourceMappingURL=MskuQuantity.d.ts.map