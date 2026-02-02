/**
 * The ItemCancellation model module.
 * @module orders_v2026_01_01/model/ItemCancellation
 * @version 2026-01-01
 */
export class ItemCancellation {
    /**
     * Constructs a <code>ItemCancellation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ItemCancellation} obj Optional instance to populate.
     * @return {ItemCancellation} The populated <code>ItemCancellation</code> instance.
     */
    static constructFromObject(data: any, obj: ItemCancellation): ItemCancellation;
    /**
     * @member {ItemCancellationRequest} cancellationRequest
     * @type {ItemCancellationRequest}
     */
    cancellationRequest: ItemCancellationRequest;
}
import { ItemCancellationRequest } from './ItemCancellationRequest.js';
//# sourceMappingURL=ItemCancellation.d.ts.map