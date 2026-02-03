/**
 * The GetItemEligibilityPreviewResponse model module.
 * @module fbaeligibility_v1/model/GetItemEligibilityPreviewResponse
 * @version v1
 */
export class GetItemEligibilityPreviewResponse {
    /**
     * Constructs a <code>GetItemEligibilityPreviewResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetItemEligibilityPreviewResponse} obj Optional instance to populate.
     * @return {GetItemEligibilityPreviewResponse} The populated <code>GetItemEligibilityPreviewResponse</code> instance.
     */
    static constructFromObject(data: any, obj: GetItemEligibilityPreviewResponse): GetItemEligibilityPreviewResponse;
    /**
     * @member {ItemEligibilityPreview} payload
     * @type {ItemEligibilityPreview}
     */
    payload: ItemEligibilityPreview;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @member {Array[]} errors
     * @type {Array[]}
     */
    errors: any[][];
}
import { ItemEligibilityPreview } from './ItemEligibilityPreview.js';
//# sourceMappingURL=GetItemEligibilityPreviewResponse.d.ts.map