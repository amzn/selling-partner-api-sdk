/**
 * The Query model module.
 * @module datakiosk_v2023_11_15/model/Query
 * @version 2023-11-15
 */
export class Query {
    /**
     * Constructs a <code>Query</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Query} obj Optional instance to populate.
     * @return {Query} The populated <code>Query</code> instance.
     */
    static constructFromObject(data: any, obj: Query): Query;
    /**
     * Constructs a new <code>Query</code>.
     * Detailed information about the query.
     * @alias module:datakiosk_v2023_11_15/model/Query
     * @class
     * @param queryId {String} The query identifier. This identifier is unique only in combination with a selling partner account ID.
     * @param query {String} The submitted query.
     * @param createdTime {Date} The date and time when the query was created, in ISO 8601 date time format.
     * @param processingStatus {String} The processing status of the query.
     */
    constructor(queryId: string, query: string, createdTime: Date, processingStatus: string);
    queryId: string;
    query: string;
    createdTime: Date;
    processingStatus: string;
    /**
     * The date and time when the query processing started, in ISO 8601 date time format.
     * @member {Date} processingStartTime
     * @type {Date}
     */
    processingStartTime: Date;
    /**
     * The date and time when the query processing completed, in ISO 8601 date time format.
     * @member {Date} processingEndTime
     * @type {Date}
     */
    processingEndTime: Date;
    /**
     * The data document identifier. This identifier is only present when there is data available as a result of the query. This identifier is unique only in combination with a selling partner account ID. Pass this identifier into the `getDocument` operation to get the information required to retrieve the data document's contents.
     * @member {String} dataDocumentId
     * @type {String}
     */
    dataDocumentId: string;
    /**
     * The error document identifier. This identifier is only present when an error occurs during query processing. This identifier is unique only in combination with a selling partner account ID. Pass this identifier into the `getDocument` operation to get the information required to retrieve the error document's contents.
     * @member {String} errorDocumentId
     * @type {String}
     */
    errorDocumentId: string;
    /**
     * @member {QueryPagination} pagination
     * @type {QueryPagination}
     */
    pagination: QueryPagination;
}
export namespace Query {
    namespace ProcessingStatusEnum {
        let CANCELLED: string;
        let DONE: string;
        let FATAL: string;
        let IN_PROGRESS: string;
        let IN_QUEUE: string;
    }
    /**
     * *
     */
    type ProcessingStatusEnum = string;
}
import { QueryPagination } from './QueryPagination.js';
//# sourceMappingURL=Query.d.ts.map