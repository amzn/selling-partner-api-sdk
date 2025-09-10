/**
 * The Report model module.
 * @module reports_v2021_06_30/model/Report
 * @version 2021-06-30
 */
export class Report {
    /**
     * Constructs a <code>Report</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Report} obj Optional instance to populate.
     * @return {Report} The populated <code>Report</code> instance.
     */
    static constructFromObject(data: any, obj: Report): Report;
    /**
     * Constructs a new <code>Report</code>.
     * Detailed information about the report.
     * @alias module:reports_v2021_06_30/model/Report
     * @class
     * @param reportId {String} The identifier for the report. This identifier is unique only in combination with a seller ID.
     * @param reportType {String} The report type. Refer to [Report Type Values](https://developer-docs.amazon.com/sp-api/docs/report-type-values) for more information.
     * @param createdTime {Date} The date and time when the report was created.
     * @param processingStatus {String} The processing status of the report.
     */
    constructor(reportId: string, reportType: string, createdTime: Date, processingStatus: string);
    reportId: string;
    reportType: string;
    createdTime: Date;
    processingStatus: string;
    /**
     * A list of marketplace identifiers for the report.
     * @member {[String]} marketplaceIds
     * @type {[String]}
     */
    marketplaceIds: [string];
    /**
     * The start of a date and time range used for selecting the data to report.
     * @member {Date} dataStartTime
     * @type {Date}
     */
    dataStartTime: Date;
    /**
     * The end of a date and time range used for selecting the data to report.
     * @member {Date} dataEndTime
     * @type {Date}
     */
    dataEndTime: Date;
    /**
     * The identifier of the report schedule that created this report (if any). This identifier is unique only in combination with a seller ID.
     * @member {String} reportScheduleId
     * @type {String}
     */
    reportScheduleId: string;
    /**
     * The date and time when the report processing started, in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> date time format.
     * @member {Date} processingStartTime
     * @type {Date}
     */
    processingStartTime: Date;
    /**
     * The date and time when the report processing completed, in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> date time format.
     * @member {Date} processingEndTime
     * @type {Date}
     */
    processingEndTime: Date;
    /**
     * The identifier for the report document. Pass this into the `getReportDocument` operation to get the information you will need to retrieve the report document's contents.
     * @member {String} reportDocumentId
     * @type {String}
     */
    reportDocumentId: string;
}
export namespace Report {
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
//# sourceMappingURL=Report.d.ts.map