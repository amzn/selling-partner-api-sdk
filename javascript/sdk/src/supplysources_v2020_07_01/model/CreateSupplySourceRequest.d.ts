/**
 * The CreateSupplySourceRequest model module.
 * @module supplysources_v2020_07_01/model/CreateSupplySourceRequest
 * @version 2020-07-01
 */
export class CreateSupplySourceRequest {
    /**
     * Constructs a <code>CreateSupplySourceRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {CreateSupplySourceRequest} obj Optional instance to populate.
     * @return {CreateSupplySourceRequest} The populated <code>CreateSupplySourceRequest</code> instance.
     */
    static constructFromObject(data: any, obj: CreateSupplySourceRequest): CreateSupplySourceRequest;
    /**
     * Constructs a new <code>CreateSupplySourceRequest</code>.
     * A request to create a supply source.
     * @alias module:supplysources_v2020_07_01/model/CreateSupplySourceRequest
     * @class
     * @param supplySourceCode {String} The seller-provided unique supply source code.
     * @param alias {String} The custom alias for this supply source
     * @param address {Address}
     */
    constructor(supplySourceCode: string, alias: string, address: Address);
    supplySourceCode: string;
    alias: string;
    address: Address;
}
import { Address } from './Address.js';
//# sourceMappingURL=CreateSupplySourceRequest.d.ts.map