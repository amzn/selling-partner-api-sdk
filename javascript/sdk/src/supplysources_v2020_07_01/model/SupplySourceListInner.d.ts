/**
 * The SupplySourceListInner model module.
 * @module supplysources_v2020_07_01/model/SupplySourceListInner
 * @version 2020-07-01
 */
export class SupplySourceListInner {
    /**
     * Constructs a <code>SupplySourceListInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {SupplySourceListInner} obj Optional instance to populate.
     * @return {SupplySourceListInner} The populated <code>SupplySourceListInner</code> instance.
     */
    static constructFromObject(data: any, obj: SupplySourceListInner): SupplySourceListInner;
    /**
     * The custom alias for this supply source
     * @member {String} alias
     * @type {String}
     */
    alias: string;
    /**
     * An Amazon generated unique supply source ID.
     * @member {String} supplySourceId
     * @type {String}
     */
    supplySourceId: string;
    /**
     * The seller-provided unique supply source code.
     * @member {String} supplySourceCode
     * @type {String}
     */
    supplySourceCode: string;
    /**
     * @member {Address} address
     * @type {Address}
     */
    address: Address;
}
import { Address } from './Address.js';
//# sourceMappingURL=SupplySourceListInner.d.ts.map