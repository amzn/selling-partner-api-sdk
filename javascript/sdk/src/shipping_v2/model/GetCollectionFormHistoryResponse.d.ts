/**
 * The GetCollectionFormHistoryResponse model module.
 * @module shipping_v2/model/GetCollectionFormHistoryResponse
 * @version v2
 */
export class GetCollectionFormHistoryResponse {
    /**
     * Constructs a <code>GetCollectionFormHistoryResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetCollectionFormHistoryResponse} obj Optional instance to populate.
     * @return {GetCollectionFormHistoryResponse} The populated <code>GetCollectionFormHistoryResponse</code> instance.
     */
    static constructFromObject(data: any, obj: GetCollectionFormHistoryResponse): GetCollectionFormHistoryResponse;
    /**
     * A list of CollectionFormsHistoryRecord
     * @member {[CollectionFormsHistoryRecord]} collectionFormsHistoryRecordList
     * @type {[CollectionFormsHistoryRecord]}
     */
    collectionFormsHistoryRecordList: [CollectionFormsHistoryRecord];
    /**
     * Last Refereshed Date of collection
     * @member {String} lastRefreshedDate
     * @type {String}
     */
    lastRefreshedDate: string;
}
import { CollectionFormsHistoryRecord } from './CollectionFormsHistoryRecord.js';
//# sourceMappingURL=GetCollectionFormHistoryResponse.d.ts.map