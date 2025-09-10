/**
* Reports service.
* @module reports_v2021_06_30/api/ReportsApi
* @version 2021-06-30
*/
export class ReportsApi {
    /**
      * Constructs a new ReportsApi.
      * @alias module:reports_v2021_06_30/api/ReportsApi
      * @class
      * @param {ApiClient} [apiClient] Optional API client implementation to use,
      * default to {@link ApiClient#instance} if unspecified.
      */
    constructor(apiClient?: ApiClient);
    apiClient: any;
    /**
       * Initialize rate limiters for API operations
       */
    initializeDefaultRateLimiterMap(): void;
    /**
       * Get rate limiter for a specific operation
       * @param {String} operation name
       */
    getRateLimiter(operation: string): any;
    /**
       * Cancels the report that you specify. Only reports with &#x60;processingStatus&#x3D;IN_QUEUE&#x60; can be cancelled. Cancelled reports are returned in subsequent calls to the &#x60;getReport&#x60; and &#x60;getReports&#x60; operations.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0222 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} reportId The identifier for the report. This identifier is unique only in combination with a seller ID.
       * @return {Promise<void>}
       */
    cancelReportWithHttpInfo(reportId: string): Promise<void>;
    /**
       * Cancels the report that you specify. Only reports with &#x60;processingStatus&#x3D;IN_QUEUE&#x60; can be cancelled. Cancelled reports are returned in subsequent calls to the &#x60;getReport&#x60; and &#x60;getReports&#x60; operations.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0222 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} reportId The identifier for the report. This identifier is unique only in combination with a seller ID.
       * @return {Promise<void>}
       */
    cancelReport(reportId: string): Promise<void>;
    /**
       * Cancels the report schedule that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0222 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} reportScheduleId The identifier for the report schedule. This identifier is unique only in combination with a seller ID.
       * @return {Promise<void>}
       */
    cancelReportScheduleWithHttpInfo(reportScheduleId: string): Promise<void>;
    /**
       * Cancels the report schedule that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0222 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} reportScheduleId The identifier for the report schedule. This identifier is unique only in combination with a seller ID.
       * @return {Promise<void>}
       */
    cancelReportSchedule(reportScheduleId: string): Promise<void>;
    /**
       * Creates a report.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0167 | 15 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {CreateReportSpecification} body Information required to create the report.
       * @return {Promise<CreateReportResponse>}
       */
    createReportWithHttpInfo(body: CreateReportSpecification): Promise<CreateReportResponse>;
    /**
       * Creates a report.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0167 | 15 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {CreateReportSpecification} body Information required to create the report.
       * @return {Promise<CreateReportResponse>}
       */
    createReport(body: CreateReportSpecification): Promise<CreateReportResponse>;
    /**
       * Creates a report schedule. If a report schedule with the same report type and marketplace IDs already exists, it will be cancelled and replaced with this one.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0222 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {CreateReportScheduleSpecification} body Information required to create the report schedule.
       * @return {Promise<CreateReportScheduleResponse>}
       */
    createReportScheduleWithHttpInfo(body: CreateReportScheduleSpecification): Promise<CreateReportScheduleResponse>;
    /**
       * Creates a report schedule. If a report schedule with the same report type and marketplace IDs already exists, it will be cancelled and replaced with this one.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0222 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {CreateReportScheduleSpecification} body Information required to create the report schedule.
       * @return {Promise<CreateReportScheduleResponse>}
       */
    createReportSchedule(body: CreateReportScheduleSpecification): Promise<CreateReportScheduleResponse>;
    /**
       * Returns report details (including the &#x60;reportDocumentId&#x60;, if available) for the report that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 15 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} reportId The identifier for the report. This identifier is unique only in combination with a seller ID.
       * @return {Promise<Report>}
       */
    getReportWithHttpInfo(reportId: string): Promise<Report>;
    /**
       * Returns report details (including the &#x60;reportDocumentId&#x60;, if available) for the report that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 15 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} reportId The identifier for the report. This identifier is unique only in combination with a seller ID.
       * @return {Promise<Report>}
       */
    getReport(reportId: string): Promise<Report>;
    /**
       * Returns the information required for retrieving a report document&#39;s contents.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0167 | 15 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} reportDocumentId The identifier for the report document.
       * @return {Promise<ReportDocument>}
       */
    getReportDocumentWithHttpInfo(reportDocumentId: string): Promise<ReportDocument>;
    /**
       * Returns the information required for retrieving a report document&#39;s contents.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0167 | 15 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} reportDocumentId The identifier for the report document.
       * @return {Promise<ReportDocument>}
       */
    getReportDocument(reportDocumentId: string): Promise<ReportDocument>;
    /**
       * Returns report schedule details for the report schedule that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0222 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} reportScheduleId The identifier for the report schedule. This identifier is unique only in combination with a seller ID.
       * @return {Promise<ReportSchedule>}
       */
    getReportScheduleWithHttpInfo(reportScheduleId: string): Promise<ReportSchedule>;
    /**
       * Returns report schedule details for the report schedule that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0222 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} reportScheduleId The identifier for the report schedule. This identifier is unique only in combination with a seller ID.
       * @return {Promise<ReportSchedule>}
       */
    getReportSchedule(reportScheduleId: string): Promise<ReportSchedule>;
    /**
       * Returns report schedule details that match the filters that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0222 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {[String]} reportTypes A list of report types used to filter report schedules. Refer to [Report Type Values](https://developer-docs.amazon.com/sp-api/docs/report-type-values) for more information.
       * @return {Promise<ReportScheduleList>}
       */
    getReportSchedulesWithHttpInfo(reportTypes: [string]): Promise<ReportScheduleList>;
    /**
       * Returns report schedule details that match the filters that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0222 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {[String]} reportTypes A list of report types used to filter report schedules. Refer to [Report Type Values](https://developer-docs.amazon.com/sp-api/docs/report-type-values) for more information.
       * @return {Promise<ReportScheduleList>}
       */
    getReportSchedules(reportTypes: [string]): Promise<ReportScheduleList>;
    /**
       * Returns report details for the reports that match the filters that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0222 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {Object} [opts] Optional parameters
       * @param {[String]} [opts.reportTypes] A list of report types used to filter reports. Refer to [Report Type Values](https://developer-docs.amazon.com/sp-api/docs/report-type-values) for more information. When reportTypes is provided, the other filter parameters (processingStatuses, marketplaceIds, createdSince, createdUntil) and pageSize may also be provided. Either reportTypes or nextToken is required.
       * @param {[String]} [opts.processingStatuses] A list of processing statuses used to filter reports.
       * @param {[String]} [opts.marketplaceIds] A list of marketplace identifiers used to filter reports. The reports returned will match at least one of the marketplaces that you specify.
       * @param {Number} [opts.pageSize] The maximum number of reports to return in a single call. (default to 10)
       * @param {Date} [opts.createdSince] The earliest report creation date and time for reports to include in the response, in &lt;a href&#x3D;&#39;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#39;&gt;ISO 8601&lt;/a&gt; date time format. The default is 90 days ago. Reports are retained for a maximum of 90 days.
       * @param {Date} [opts.createdUntil] The latest report creation date and time for reports to include in the response, in &lt;a href&#x3D;&#39;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#39;&gt;ISO 8601&lt;/a&gt; date time format. The default is now.
       * @param {String} [opts.nextToken] A string token returned in the response to your previous request. &#x60;nextToken&#x60; is returned when the number of results exceeds the specified &#x60;pageSize&#x60; value. To get the next page of results, call the &#x60;getReports&#x60; operation and include this token as the only parameter. Specifying &#x60;nextToken&#x60; with any other parameters will cause the request to fail.
       * @return {Promise<GetReportsResponse>}
       */
    getReportsWithHttpInfo(opts?: {
        reportTypes?: [string];
        processingStatuses?: [string];
        marketplaceIds?: [string];
        pageSize?: number;
        createdSince?: Date;
        createdUntil?: Date;
        nextToken?: string;
    }): Promise<GetReportsResponse>;
    /**
       * Returns report details for the reports that match the filters that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0222 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {Object} [opts] Optional parameters
       * @param {[String]} [opts.reportTypes] A list of report types used to filter reports. Refer to [Report Type Values](https://developer-docs.amazon.com/sp-api/docs/report-type-values) for more information. When reportTypes is provided, the other filter parameters (processingStatuses, marketplaceIds, createdSince, createdUntil) and pageSize may also be provided. Either reportTypes or nextToken is required.
       * @param {[String]} [opts.processingStatuses] A list of processing statuses used to filter reports.
       * @param {[String]} [opts.marketplaceIds] A list of marketplace identifiers used to filter reports. The reports returned will match at least one of the marketplaces that you specify.
       * @param {Number} [opts.pageSize] The maximum number of reports to return in a single call. (default to 10)
       * @param {Date} [opts.createdSince] The earliest report creation date and time for reports to include in the response, in &lt;a href&#x3D;&#39;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#39;&gt;ISO 8601&lt;/a&gt; date time format. The default is 90 days ago. Reports are retained for a maximum of 90 days.
       * @param {Date} [opts.createdUntil] The latest report creation date and time for reports to include in the response, in &lt;a href&#x3D;&#39;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#39;&gt;ISO 8601&lt;/a&gt; date time format. The default is now.
       * @param {String} [opts.nextToken] A string token returned in the response to your previous request. &#x60;nextToken&#x60; is returned when the number of results exceeds the specified &#x60;pageSize&#x60; value. To get the next page of results, call the &#x60;getReports&#x60; operation and include this token as the only parameter. Specifying &#x60;nextToken&#x60; with any other parameters will cause the request to fail.
       * @return {Promise<GetReportsResponse>}
       */
    getReports(opts?: {
        reportTypes?: [string];
        processingStatuses?: [string];
        marketplaceIds?: [string];
        pageSize?: number;
        createdSince?: Date;
        createdUntil?: Date;
        nextToken?: string;
    }): Promise<GetReportsResponse>;
    #private;
}
import { CreateReportSpecification } from '../model/CreateReportSpecification.js';
import { CreateReportResponse } from '../model/CreateReportResponse.js';
import { CreateReportScheduleSpecification } from '../model/CreateReportScheduleSpecification.js';
import { CreateReportScheduleResponse } from '../model/CreateReportScheduleResponse.js';
import { Report } from '../model/Report.js';
import { ReportDocument } from '../model/ReportDocument.js';
import { ReportSchedule } from '../model/ReportSchedule.js';
import { ReportScheduleList } from '../model/ReportScheduleList.js';
import { GetReportsResponse } from '../model/GetReportsResponse.js';
import { ApiClient } from '../ApiClient.js';
//# sourceMappingURL=ReportsApi.d.ts.map