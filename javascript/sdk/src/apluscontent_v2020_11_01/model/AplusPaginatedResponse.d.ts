/**
 * The AplusPaginatedResponse model module.
 * @module apluscontent_v2020_11_01/model/AplusPaginatedResponse
 * @version 2020-11-01
 */
export class AplusPaginatedResponse {
    /**
     * Constructs a <code>AplusPaginatedResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {AplusPaginatedResponse} obj Optional instance to populate.
     * @return {AplusPaginatedResponse} The populated <code>AplusPaginatedResponse</code> instance.
     */
    static constructFromObject(data: any, obj: AplusPaginatedResponse): AplusPaginatedResponse;
    /**
     * A set of messages to the user, such as warnings or comments.
     * @member {Array[]} warnings
     * @type {Array[]}
     */
    warnings: any[][];
    /**
     * A token that you use to fetch a specific page when there are multiple pages of results.
     * @member {String} nextPageToken
     * @type {String}
     */
    nextPageToken: string;
}
//# sourceMappingURL=AplusPaginatedResponse.d.ts.map