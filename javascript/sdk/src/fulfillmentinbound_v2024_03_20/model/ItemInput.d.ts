/**
 * The ItemInput model module.
 * @module fulfillmentinbound_v2024_03_20/model/ItemInput
 * @version 2024-03-20
 */
export class ItemInput {
    /**
     * Constructs a <code>ItemInput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ItemInput} obj Optional instance to populate.
     * @return {ItemInput} The populated <code>ItemInput</code> instance.
     */
    static constructFromObject(data: any, obj: ItemInput): ItemInput;
    /**
     * Constructs a new <code>ItemInput</code>.
     * Defines an item&#39;s input parameters.
     * @alias module:fulfillmentinbound_v2024_03_20/model/ItemInput
     * @class
     * @param labelOwner {LabelOwner}
     * @param msku {String} The merchant SKU, a merchant-supplied identifier of a specific SKU.
     * @param prepOwner {PrepOwner}
     * @param quantity {Number} The number of units of the specified MSKU that will be shipped.
     */
    constructor(labelOwner: LabelOwner, msku: string, prepOwner: PrepOwner, quantity: number);
    labelOwner: LabelOwner;
    msku: string;
    prepOwner: PrepOwner;
    quantity: number;
    /**
     * The expiration date of the MSKU. In [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) datetime format with pattern `YYYY-MM-DD`. Items with the same MSKU but different expiration dates cannot go into the same box.
     * @member {String} expiration
     * @type {String}
     */
    expiration: string;
    /**
     * The manufacturing lot code.
     * @member {String} manufacturingLotCode
     * @type {String}
     */
    manufacturingLotCode: string;
}
import { LabelOwner } from './LabelOwner.js';
import { PrepOwner } from './PrepOwner.js';
//# sourceMappingURL=ItemInput.d.ts.map