/**
 * The InventoryRequest model module.
 * @module externalfulfillmentinventory_v2024_09_11/model/InventoryRequest
 * @version 2024-09-11
 */
export class InventoryRequest {
    /**
     * Constructs a <code>InventoryRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {InventoryRequest} obj Optional instance to populate.
     * @return {InventoryRequest} The populated <code>InventoryRequest</code> instance.
     */
    static constructFromObject(data: any, obj: InventoryRequest): InventoryRequest;
    /**
     * Constructs a new <code>InventoryRequest</code>.
     * An inventory request.
     * @alias module:externalfulfillmentinventory_v2024_09_11/model/InventoryRequest
     * @class
     * @param uri {String} The URI associated with the individual APIs from the batch request. The user must provide the resource identifier for the operation they want to use.
     * @param method {HttpMethod}
     */
    constructor(uri: string, method: HttpMethod);
    uri: string;
    method: HttpMethod;
    /**
     * @member {InventoryRequestParams} body
     * @type {InventoryRequestParams}
     */
    body: InventoryRequestParams;
}
import { HttpMethod } from './HttpMethod.js';
import { InventoryRequestParams } from './InventoryRequestParams.js';
//# sourceMappingURL=InventoryRequest.d.ts.map