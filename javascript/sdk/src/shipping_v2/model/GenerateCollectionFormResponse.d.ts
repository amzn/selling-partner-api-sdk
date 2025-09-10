/**
 * The GenerateCollectionFormResponse model module.
 * @module shipping_v2/model/GenerateCollectionFormResponse
 * @version v2
 */
export class GenerateCollectionFormResponse {
    /**
     * Constructs a <code>GenerateCollectionFormResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GenerateCollectionFormResponse} obj Optional instance to populate.
     * @return {GenerateCollectionFormResponse} The populated <code>GenerateCollectionFormResponse</code> instance.
     */
    static constructFromObject(data: any, obj: GenerateCollectionFormResponse): GenerateCollectionFormResponse;
    /**
     * @member {CollectionsFormDocument} collectionsFormDocument
     * @type {CollectionsFormDocument}
     */
    collectionsFormDocument: CollectionsFormDocument;
}
import { CollectionsFormDocument } from './CollectionsFormDocument.js';
//# sourceMappingURL=GenerateCollectionFormResponse.d.ts.map