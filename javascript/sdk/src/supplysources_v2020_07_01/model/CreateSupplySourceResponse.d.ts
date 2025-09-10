/**
 * The CreateSupplySourceResponse model module.
 * @module supplysources_v2020_07_01/model/CreateSupplySourceResponse
 * @version 2020-07-01
 */
export class CreateSupplySourceResponse {
    /**
     * Constructs a <code>CreateSupplySourceResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {CreateSupplySourceResponse} obj Optional instance to populate.
     * @return {CreateSupplySourceResponse} The populated <code>CreateSupplySourceResponse</code> instance.
     */
    static constructFromObject(data: any, obj: CreateSupplySourceResponse): CreateSupplySourceResponse;
    /**
     * Constructs a new <code>CreateSupplySourceResponse</code>.
     * The result of creating a new supply source.
     * @alias module:supplysources_v2020_07_01/model/CreateSupplySourceResponse
     * @class
     * @param supplySourceId {String} An Amazon generated unique supply source ID.
     * @param supplySourceCode {String} The seller-provided unique supply source code.
     */
    constructor(supplySourceId: string, supplySourceCode: string);
    supplySourceId: string;
    supplySourceCode: string;
}
//# sourceMappingURL=CreateSupplySourceResponse.d.ts.map