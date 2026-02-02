/**
 * The ItemCancellationRequest model module.
 * @module orders_v2026_01_01/model/ItemCancellationRequest
 * @version 2026-01-01
 */
export class ItemCancellationRequest {
    /**
     * Constructs a <code>ItemCancellationRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ItemCancellationRequest} obj Optional instance to populate.
     * @return {ItemCancellationRequest} The populated <code>ItemCancellationRequest</code> instance.
     */
    static constructFromObject(data: any, obj: ItemCancellationRequest): ItemCancellationRequest;
    /**
     * Entity that initiated the cancellation request for this item.   **Possible values**: `BUYER`
     * @member {String} requester
     * @type {String}
     */
    requester: string;
    /**
     * Explanation provided for why the cancellation was requested.
     * @member {String} cancelReason
     * @type {String}
     */
    cancelReason: string;
}
//# sourceMappingURL=ItemCancellationRequest.d.ts.map