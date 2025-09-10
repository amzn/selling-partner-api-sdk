/**
 * The GetFulfillmentPreviewResult model module.
 * @module fulfillmentoutbound_v2020_07_01/model/GetFulfillmentPreviewResult
 * @version 2020-07-01
 */
export class GetFulfillmentPreviewResult {
    /**
     * Constructs a <code>GetFulfillmentPreviewResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetFulfillmentPreviewResult} obj Optional instance to populate.
     * @return {GetFulfillmentPreviewResult} The populated <code>GetFulfillmentPreviewResult</code> instance.
     */
    static constructFromObject(data: any, obj: GetFulfillmentPreviewResult): GetFulfillmentPreviewResult;
    /**
     * An array of fulfillment preview information.
     * @member {[FulfillmentPreview]} fulfillmentPreviews
     * @type {[FulfillmentPreview]}
     */
    fulfillmentPreviews: [FulfillmentPreview];
}
import { FulfillmentPreview } from './FulfillmentPreview.js';
//# sourceMappingURL=GetFulfillmentPreviewResult.d.ts.map