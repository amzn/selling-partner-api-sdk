/**
 * The CreateReportSpecification model module.
 * @module reports_v2021_06_30/model/CreateReportSpecification
 * @version 2021-06-30
 */
export class CreateReportSpecification {
    /**
     * Constructs a <code>CreateReportSpecification</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {CreateReportSpecification} obj Optional instance to populate.
     * @return {CreateReportSpecification} The populated <code>CreateReportSpecification</code> instance.
     */
    static constructFromObject(data: any, obj: CreateReportSpecification): CreateReportSpecification;
    /**
     * Constructs a new <code>CreateReportSpecification</code>.
     * Information required to create the report.
     * @alias module:reports_v2021_06_30/model/CreateReportSpecification
     * @class
     * @param reportType {String} The report type. Refer to [Report Type Values](https://developer-docs.amazon.com/sp-api/docs/report-type-values) for more information.
     * @param marketplaceIds {[String]} A list of marketplace identifiers. The report document's contents will contain data for all of the specified marketplaces, unless the report type indicates otherwise.
     */
    constructor(reportType: string, marketplaceIds: [string]);
    reportType: string;
    marketplaceIds: [string];
    /**
     * Additional information passed to reports. This varies by report type.
     * @member {{String: String}} reportOptions
     * @type {{String: String}}
     */
    reportOptions: {
        String: string;
    };
    /**
     * The start of a date and time range, in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> date time format, used for selecting the data to report. The default is now. The value must be prior to or equal to the current date and time. Not all report types make use of this.
     * @member {Date} dataStartTime
     * @type {Date}
     */
    dataStartTime: Date;
    /**
     * The end of a date and time range, in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> date time format, used for selecting the data to report. The default is now. The value must be prior to or equal to the current date and time. Not all report types make use of this.
     * @member {Date} dataEndTime
     * @type {Date}
     */
    dataEndTime: Date;
}
//# sourceMappingURL=CreateReportSpecification.d.ts.map