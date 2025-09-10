/**
 * The CreateReportScheduleResponse model module.
 * @module reports_v2021_06_30/model/CreateReportScheduleResponse
 * @version 2021-06-30
 */
export class CreateReportScheduleResponse {
    /**
     * Constructs a <code>CreateReportScheduleResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {CreateReportScheduleResponse} obj Optional instance to populate.
     * @return {CreateReportScheduleResponse} The populated <code>CreateReportScheduleResponse</code> instance.
     */
    static constructFromObject(data: any, obj: CreateReportScheduleResponse): CreateReportScheduleResponse;
    /**
     * Constructs a new <code>CreateReportScheduleResponse</code>.
     * Response schema.
     * @alias module:reports_v2021_06_30/model/CreateReportScheduleResponse
     * @class
     * @param reportScheduleId {String} The identifier for the report schedule. This identifier is unique only in combination with a seller ID.
     */
    constructor(reportScheduleId: string);
    reportScheduleId: string;
}
//# sourceMappingURL=CreateReportScheduleResponse.d.ts.map