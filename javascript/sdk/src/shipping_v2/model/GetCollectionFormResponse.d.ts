/**
 * The GetCollectionFormResponse model module.
 * @module shipping_v2/model/GetCollectionFormResponse
 * @version v2
 */
export class GetCollectionFormResponse {
    /**
     * Constructs a <code>GetCollectionFormResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetCollectionFormResponse} obj Optional instance to populate.
     * @return {GetCollectionFormResponse} The populated <code>GetCollectionFormResponse</code> instance.
     */
    static constructFromObject(data: any, obj: GetCollectionFormResponse): GetCollectionFormResponse;
    /**
     * @member {CollectionsFormDocument} collectionsFormDocument
     * @type {CollectionsFormDocument}
     */
    collectionsFormDocument: CollectionsFormDocument;
}
import { CollectionsFormDocument } from './CollectionsFormDocument.js';
//# sourceMappingURL=GetCollectionFormResponse.d.ts.map