/**
 * The DirectPurchaseResponse model module.
 * @module shipping_v2/model/DirectPurchaseResponse
 * @version v2
 */
export class DirectPurchaseResponse {
    /**
     * Constructs a <code>DirectPurchaseResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {DirectPurchaseResponse} obj Optional instance to populate.
     * @return {DirectPurchaseResponse} The populated <code>DirectPurchaseResponse</code> instance.
     */
    static constructFromObject(data: any, obj: DirectPurchaseResponse): DirectPurchaseResponse;
    /**
     * @member {DirectPurchaseResult} payload
     * @type {DirectPurchaseResult}
     */
    payload: DirectPurchaseResult;
}
import { DirectPurchaseResult } from './DirectPurchaseResult.js';
//# sourceMappingURL=DirectPurchaseResponse.d.ts.map