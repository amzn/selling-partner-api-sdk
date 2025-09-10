/**
 * The CollectionFormsHistoryRecord model module.
 * @module shipping_v2/model/CollectionFormsHistoryRecord
 * @version v2
 */
export class CollectionFormsHistoryRecord {
    /**
     * Constructs a <code>CollectionFormsHistoryRecord</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {CollectionFormsHistoryRecord} obj Optional instance to populate.
     * @return {CollectionFormsHistoryRecord} The populated <code>CollectionFormsHistoryRecord</code> instance.
     */
    static constructFromObject(data: any, obj: CollectionFormsHistoryRecord): CollectionFormsHistoryRecord;
    /**
     * The carrier name for the offering.
     * @member {String} carrierName
     * @type {String}
     */
    carrierName: string;
    /**
     * Creation Time for this account.
     * @member {String} creationDate
     * @type {String}
     */
    creationDate: string;
    /**
     * @member {GenerationStatus} generationStatus
     * @type {GenerationStatus}
     */
    generationStatus: GenerationStatus;
    /**
     * Collection Form Id for Reprint .
     * @member {String} collectionFormId
     * @type {String}
     */
    collectionFormId: string;
    /**
     * @member {Address} shipFromAddress
     * @type {Address}
     */
    shipFromAddress: Address;
}
import { GenerationStatus } from './GenerationStatus.js';
import { Address } from './Address.js';
//# sourceMappingURL=CollectionFormsHistoryRecord.d.ts.map