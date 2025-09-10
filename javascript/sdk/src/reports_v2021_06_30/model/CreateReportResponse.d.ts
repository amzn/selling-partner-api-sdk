/**
 * The CreateReportResponse model module.
 * @module reports_v2021_06_30/model/CreateReportResponse
 * @version 2021-06-30
 */
export class CreateReportResponse {
    /**
     * Constructs a <code>CreateReportResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {CreateReportResponse} obj Optional instance to populate.
     * @return {CreateReportResponse} The populated <code>CreateReportResponse</code> instance.
     */
    static constructFromObject(data: any, obj: CreateReportResponse): CreateReportResponse;
    /**
     * Constructs a new <code>CreateReportResponse</code>.
     * The response schema.
     * @alias module:reports_v2021_06_30/model/CreateReportResponse
     * @class
     * @param reportId {String} The identifier for the report. This identifier is unique only in combination with a seller ID.
     */
    constructor(reportId: string);
    reportId: string;
}
//# sourceMappingURL=CreateReportResponse.d.ts.map