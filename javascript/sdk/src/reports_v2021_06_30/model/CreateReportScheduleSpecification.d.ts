/**
 * The CreateReportScheduleSpecification model module.
 * @module reports_v2021_06_30/model/CreateReportScheduleSpecification
 * @version 2021-06-30
 */
export class CreateReportScheduleSpecification {
    /**
     * Constructs a <code>CreateReportScheduleSpecification</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {CreateReportScheduleSpecification} obj Optional instance to populate.
     * @return {CreateReportScheduleSpecification} The populated <code>CreateReportScheduleSpecification</code> instance.
     */
    static constructFromObject(data: any, obj: CreateReportScheduleSpecification): CreateReportScheduleSpecification;
    /**
     * Constructs a new <code>CreateReportScheduleSpecification</code>.
     * Information required to create the report schedule.
     * @alias module:reports_v2021_06_30/model/CreateReportScheduleSpecification
     * @class
     * @param reportType {String} The report type. Refer to [Report Type Values](https://developer-docs.amazon.com/sp-api/docs/report-type-values) for more information.
     * @param marketplaceIds {String[]} A list of marketplace identifiers for the report schedule.
     * @param period {String} One of a set of predefined <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> periods that specifies how often a report should be created.
     */
    constructor(reportType: string, marketplaceIds: string[], period: string);
    reportType: string;
    marketplaceIds: string[];
    period: string;
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
export namespace CreateReportScheduleSpecification {
    namespace PeriodEnum {
        let PT5M: string;
        let PT15M: string;
        let PT30M: string;
        let PT1H: string;
        let PT2H: string;
        let PT4H: string;
        let PT8H: string;
        let PT12H: string;
        let P1D: string;
        let P2D: string;
        let P3D: string;
        let PT84H: string;
        let P7D: string;
        let P14D: string;
        let P15D: string;
        let P18D: string;
        let P30D: string;
        let P1M: string;
    }
    /**
     * *
     */
    type PeriodEnum = string;
}
//# sourceMappingURL=CreateReportScheduleSpecification.d.ts.map