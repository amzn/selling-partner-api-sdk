/**
 * The GetAdditionalSellerInputsResult model module.
 * @module merchantfulfillment_v0/model/GetAdditionalSellerInputsResult
 * @version v0
 */
export class GetAdditionalSellerInputsResult {
    /**
     * Constructs a <code>GetAdditionalSellerInputsResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetAdditionalSellerInputsResult} obj Optional instance to populate.
     * @return {GetAdditionalSellerInputsResult} The populated <code>GetAdditionalSellerInputsResult</code> instance.
     */
    static constructFromObject(data: any, obj: GetAdditionalSellerInputsResult): GetAdditionalSellerInputsResult;
    /**
     * A list of additional inputs.
     * @member {AdditionalInputs[]} shipmentLevelFields
     * @type {AdditionalInputs[]}
     */
    shipmentLevelFields: AdditionalInputs[];
    /**
     * A list of item level fields.
     * @member {ItemLevelFields[]} itemLevelFieldsList
     * @type {ItemLevelFields[]}
     */
    itemLevelFieldsList: ItemLevelFields[];
}
import { AdditionalInputs } from './AdditionalInputs.js';
import { ItemLevelFields } from './ItemLevelFields.js';
//# sourceMappingURL=GetAdditionalSellerInputsResult.d.ts.map