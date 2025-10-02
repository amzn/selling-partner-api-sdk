/**
 * The InventoryResponse model module.
 * @module externalfulfillmentinventory_v2024_09_11/model/InventoryResponse
 * @version 2024-09-11
 */
export class InventoryResponse {
    /**
     * Constructs a <code>InventoryResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {InventoryResponse} obj Optional instance to populate.
     * @return {InventoryResponse} The populated <code>InventoryResponse</code> instance.
     */
    static constructFromObject(data: any, obj: InventoryResponse): InventoryResponse;
    /**
     * Constructs a new <code>InventoryResponse</code>.
     * A response to an individual inventory request.
     * @alias module:externalfulfillmentinventory_v2024_09_11/model/InventoryResponse
     * @class
     * @param status {HttpStatusLine}
     * @param body {InventoryResponseBody}
     */
    constructor(status: HttpStatusLine, body: InventoryResponseBody);
    status: HttpStatusLine;
    body: InventoryResponseBody;
}
import { HttpStatusLine } from './HttpStatusLine.js';
import { InventoryResponseBody } from './InventoryResponseBody.js';
//# sourceMappingURL=InventoryResponse.d.ts.map