/**
 * The ReportSchedule model module.
 * @module reports_v2021_06_30/model/ReportSchedule
 * @version 2021-06-30
 */
export class ReportSchedule {
    /**
     * Constructs a <code>ReportSchedule</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ReportSchedule} obj Optional instance to populate.
     * @return {ReportSchedule} The populated <code>ReportSchedule</code> instance.
     */
    static constructFromObject(data: any, obj: ReportSchedule): ReportSchedule;
    /**
     * Constructs a new <code>ReportSchedule</code>.
     * Detailed information about a report schedule.
     * @alias module:reports_v2021_06_30/model/ReportSchedule
     * @class
     * @param reportScheduleId {String} The identifier for the report schedule. This identifier is unique only in combination with a seller ID.
     * @param reportType {String} The report type. Refer to [Report Type Values](https://developer-docs.amazon.com/sp-api/docs/report-type-values) for more information.
     * @param period {String} An <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> period value that indicates how often a report should be created.
     */
    constructor(reportScheduleId: string, reportType: string, period: string);
    reportScheduleId: string;
    reportType: string;
    period: string;
    /**
     * A list of marketplace identifiers. The report document's contents will contain data for all of the specified marketplaces, unless the report type indicates otherwise.
     * @member {Array[]} marketplaceIds
     * @type {Array[]}
     */
    marketplaceIds: any[][];
    /**
     * Additional information passed to reports. This varies by report type.
     * @member {{String: String}} reportOptions
     * @type {{String: String}}
     */
    reportOptions: {
        String: string;
    };
    /**
     * The date and time when the schedule will create its next report, in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> date time format.
     * @member {Date} nextReportCreationTime
     * @type {Date}
     */
    nextReportCreationTime: Date;
}
//# sourceMappingURL=ReportSchedule.d.ts.map