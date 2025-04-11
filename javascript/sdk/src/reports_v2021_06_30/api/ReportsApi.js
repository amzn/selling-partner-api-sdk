/**
 * Selling Partner API for Reports
 * The Selling Partner API for Reports lets you retrieve and manage a variety of reports that can help selling partners manage their businesses.
 *
 * The version of the OpenAPI document: 2021-06-30
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import {ApiClient} from "../ApiClient.js";
import {CreateReportResponse} from '../model/CreateReportResponse.js';
import {CreateReportScheduleResponse} from '../model/CreateReportScheduleResponse.js';
import {CreateReportScheduleSpecification} from '../model/CreateReportScheduleSpecification.js';
import {CreateReportSpecification} from '../model/CreateReportSpecification.js';
import {ErrorList} from '../model/ErrorList.js';
import {GetReportsResponse} from '../model/GetReportsResponse.js';
import {Report} from '../model/Report.js';
import {ReportDocument} from '../model/ReportDocument.js';
import {ReportSchedule} from '../model/ReportSchedule.js';
import {ReportScheduleList} from '../model/ReportScheduleList.js';

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
    * @param {module:reports_v2021_06_30/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:reports_v2021_06_30/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Cancels the report that you specify. Only reports with &#x60;processingStatus&#x3D;IN_QUEUE&#x60; can be cancelled. Cancelled reports are returned in subsequent calls to the &#x60;getReport&#x60; and &#x60;getReports&#x60; operations.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0222 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {String} reportId The identifier for the report. This identifier is unique only in combination with a seller ID.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    cancelReportWithHttpInfo(reportId) {
      let postBody = null;

      // verify the required parameter 'reportId' is set
      if (reportId === undefined || reportId === null) {
        throw new Error("Missing the required parameter 'reportId' when calling cancelReport");
      }


      let pathParams = {
        'reportId': reportId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/reports/2021-06-30/reports/{reportId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType
      );
    }

    /**
     * Cancels the report that you specify. Only reports with &#x60;processingStatus&#x3D;IN_QUEUE&#x60; can be cancelled. Cancelled reports are returned in subsequent calls to the &#x60;getReport&#x60; and &#x60;getReports&#x60; operations.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0222 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {String} reportId The identifier for the report. This identifier is unique only in combination with a seller ID.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    cancelReport(reportId) {
      return this.cancelReportWithHttpInfo(reportId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Cancels the report schedule that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0222 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {String} reportScheduleId The identifier for the report schedule. This identifier is unique only in combination with a seller ID.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    cancelReportScheduleWithHttpInfo(reportScheduleId) {
      let postBody = null;

      // verify the required parameter 'reportScheduleId' is set
      if (reportScheduleId === undefined || reportScheduleId === null) {
        throw new Error("Missing the required parameter 'reportScheduleId' when calling cancelReportSchedule");
      }


      let pathParams = {
        'reportScheduleId': reportScheduleId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/reports/2021-06-30/schedules/{reportScheduleId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType
      );
    }

    /**
     * Cancels the report schedule that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0222 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {String} reportScheduleId The identifier for the report schedule. This identifier is unique only in combination with a seller ID.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    cancelReportSchedule(reportScheduleId) {
      return this.cancelReportScheduleWithHttpInfo(reportScheduleId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Creates a report.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0167 | 15 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {module:reports_v2021_06_30/model/CreateReportSpecification} body Information required to create the report.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:reports_v2021_06_30/model/CreateReportResponse} and HTTP response
     */
    createReportWithHttpInfo(body) {
      let postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createReport");
      }


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = CreateReportResponse;

      return this.apiClient.callApi(
        '/reports/2021-06-30/reports', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType
      );
    }

    /**
     * Creates a report.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0167 | 15 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {module:reports_v2021_06_30/model/CreateReportSpecification} body Information required to create the report.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:reports_v2021_06_30/model/CreateReportResponse}
     */
    createReport(body) {
      return this.createReportWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Creates a report schedule. If a report schedule with the same report type and marketplace IDs already exists, it will be cancelled and replaced with this one.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0222 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {module:reports_v2021_06_30/model/CreateReportScheduleSpecification} body Information required to create the report schedule.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:reports_v2021_06_30/model/CreateReportScheduleResponse} and HTTP response
     */
    createReportScheduleWithHttpInfo(body) {
      let postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createReportSchedule");
      }


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = CreateReportScheduleResponse;

      return this.apiClient.callApi(
        '/reports/2021-06-30/schedules', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType
      );
    }

    /**
     * Creates a report schedule. If a report schedule with the same report type and marketplace IDs already exists, it will be cancelled and replaced with this one.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0222 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {module:reports_v2021_06_30/model/CreateReportScheduleSpecification} body Information required to create the report schedule.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:reports_v2021_06_30/model/CreateReportScheduleResponse}
     */
    createReportSchedule(body) {
      return this.createReportScheduleWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns report details (including the &#x60;reportDocumentId&#x60;, if available) for the report that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 15 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {String} reportId The identifier for the report. This identifier is unique only in combination with a seller ID.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:reports_v2021_06_30/model/Report} and HTTP response
     */
    getReportWithHttpInfo(reportId) {
      let postBody = null;

      // verify the required parameter 'reportId' is set
      if (reportId === undefined || reportId === null) {
        throw new Error("Missing the required parameter 'reportId' when calling getReport");
      }


      let pathParams = {
        'reportId': reportId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Report;

      return this.apiClient.callApi(
        '/reports/2021-06-30/reports/{reportId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType
      );
    }

    /**
     * Returns report details (including the &#x60;reportDocumentId&#x60;, if available) for the report that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 15 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {String} reportId The identifier for the report. This identifier is unique only in combination with a seller ID.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:reports_v2021_06_30/model/Report}
     */
    getReport(reportId) {
      return this.getReportWithHttpInfo(reportId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns the information required for retrieving a report document&#39;s contents.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0167 | 15 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {String} reportDocumentId The identifier for the report document.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:reports_v2021_06_30/model/ReportDocument} and HTTP response
     */
    getReportDocumentWithHttpInfo(reportDocumentId) {
      let postBody = null;

      // verify the required parameter 'reportDocumentId' is set
      if (reportDocumentId === undefined || reportDocumentId === null) {
        throw new Error("Missing the required parameter 'reportDocumentId' when calling getReportDocument");
      }


      let pathParams = {
        'reportDocumentId': reportDocumentId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ReportDocument;

      return this.apiClient.callApi(
        '/reports/2021-06-30/documents/{reportDocumentId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType
      );
    }

    /**
     * Returns the information required for retrieving a report document&#39;s contents.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0167 | 15 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {String} reportDocumentId The identifier for the report document.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:reports_v2021_06_30/model/ReportDocument}
     */
    getReportDocument(reportDocumentId) {
      return this.getReportDocumentWithHttpInfo(reportDocumentId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns report schedule details for the report schedule that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0222 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {String} reportScheduleId The identifier for the report schedule. This identifier is unique only in combination with a seller ID.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:reports_v2021_06_30/model/ReportSchedule} and HTTP response
     */
    getReportScheduleWithHttpInfo(reportScheduleId) {
      let postBody = null;

      // verify the required parameter 'reportScheduleId' is set
      if (reportScheduleId === undefined || reportScheduleId === null) {
        throw new Error("Missing the required parameter 'reportScheduleId' when calling getReportSchedule");
      }


      let pathParams = {
        'reportScheduleId': reportScheduleId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ReportSchedule;

      return this.apiClient.callApi(
        '/reports/2021-06-30/schedules/{reportScheduleId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType
      );
    }

    /**
     * Returns report schedule details for the report schedule that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0222 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {String} reportScheduleId The identifier for the report schedule. This identifier is unique only in combination with a seller ID.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:reports_v2021_06_30/model/ReportSchedule}
     */
    getReportSchedule(reportScheduleId) {
      return this.getReportScheduleWithHttpInfo(reportScheduleId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns report schedule details that match the filters that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0222 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {Array.<String>} reportTypes A list of report types used to filter report schedules. Refer to [Report Type Values](https://developer-docs.amazon.com/sp-api/docs/report-type-values) for more information.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:reports_v2021_06_30/model/ReportScheduleList} and HTTP response
     */
    getReportSchedulesWithHttpInfo(reportTypes) {
      let postBody = null;

      // verify the required parameter 'reportTypes' is set
      if (reportTypes === undefined || reportTypes === null) {
        throw new Error("Missing the required parameter 'reportTypes' when calling getReportSchedules");
      }


      let pathParams = {
      };
      let queryParams = {
        'reportTypes': this.apiClient.buildCollectionParam(reportTypes, 'csv')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ReportScheduleList;

      return this.apiClient.callApi(
        '/reports/2021-06-30/schedules', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType
      );
    }

    /**
     * Returns report schedule details that match the filters that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0222 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {Array.<String>} reportTypes A list of report types used to filter report schedules. Refer to [Report Type Values](https://developer-docs.amazon.com/sp-api/docs/report-type-values) for more information.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:reports_v2021_06_30/model/ReportScheduleList}
     */
    getReportSchedules(reportTypes) {
      return this.getReportSchedulesWithHttpInfo(reportTypes)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns report details for the reports that match the filters that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0222 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.reportTypes A list of report types used to filter reports. Refer to [Report Type Values](https://developer-docs.amazon.com/sp-api/docs/report-type-values) for more information. When reportTypes is provided, the other filter parameters (processingStatuses, marketplaceIds, createdSince, createdUntil) and pageSize may also be provided. Either reportTypes or nextToken is required.
     * @param {Array.<module:reports_v2021_06_30/model/String>} opts.processingStatuses A list of processing statuses used to filter reports.
     * @param {Array.<String>} opts.marketplaceIds A list of marketplace identifiers used to filter reports. The reports returned will match at least one of the marketplaces that you specify.
     * @param {Number} opts.pageSize The maximum number of reports to return in a single call. (default to 10)
     * @param {Date} opts.createdSince The earliest report creation date and time for reports to include in the response, in &lt;a href&#x3D;&#39;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#39;&gt;ISO 8601&lt;/a&gt; date time format. The default is 90 days ago. Reports are retained for a maximum of 90 days.
     * @param {Date} opts.createdUntil The latest report creation date and time for reports to include in the response, in &lt;a href&#x3D;&#39;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#39;&gt;ISO 8601&lt;/a&gt; date time format. The default is now.
     * @param {String} opts.nextToken A string token returned in the response to your previous request. &#x60;nextToken&#x60; is returned when the number of results exceeds the specified &#x60;pageSize&#x60; value. To get the next page of results, call the &#x60;getReports&#x60; operation and include this token as the only parameter. Specifying &#x60;nextToken&#x60; with any other parameters will cause the request to fail.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:reports_v2021_06_30/model/GetReportsResponse} and HTTP response
     */
    getReportsWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
        'reportTypes': this.apiClient.buildCollectionParam(opts['reportTypes'], 'csv'),
        'processingStatuses': this.apiClient.buildCollectionParam(opts['processingStatuses'], 'csv'),
        'marketplaceIds': this.apiClient.buildCollectionParam(opts['marketplaceIds'], 'csv'),
        'pageSize': opts['pageSize'],
        'createdSince': opts['createdSince'],
        'createdUntil': opts['createdUntil'],
        'nextToken': opts['nextToken']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetReportsResponse;

      return this.apiClient.callApi(
        '/reports/2021-06-30/reports', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType
      );
    }

    /**
     * Returns report details for the reports that match the filters that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0222 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.reportTypes A list of report types used to filter reports. Refer to [Report Type Values](https://developer-docs.amazon.com/sp-api/docs/report-type-values) for more information. When reportTypes is provided, the other filter parameters (processingStatuses, marketplaceIds, createdSince, createdUntil) and pageSize may also be provided. Either reportTypes or nextToken is required.
     * @param {Array.<module:reports_v2021_06_30/model/String>} opts.processingStatuses A list of processing statuses used to filter reports.
     * @param {Array.<String>} opts.marketplaceIds A list of marketplace identifiers used to filter reports. The reports returned will match at least one of the marketplaces that you specify.
     * @param {Number} opts.pageSize The maximum number of reports to return in a single call. (default to 10)
     * @param {Date} opts.createdSince The earliest report creation date and time for reports to include in the response, in &lt;a href&#x3D;&#39;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#39;&gt;ISO 8601&lt;/a&gt; date time format. The default is 90 days ago. Reports are retained for a maximum of 90 days.
     * @param {Date} opts.createdUntil The latest report creation date and time for reports to include in the response, in &lt;a href&#x3D;&#39;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#39;&gt;ISO 8601&lt;/a&gt; date time format. The default is now.
     * @param {String} opts.nextToken A string token returned in the response to your previous request. &#x60;nextToken&#x60; is returned when the number of results exceeds the specified &#x60;pageSize&#x60; value. To get the next page of results, call the &#x60;getReports&#x60; operation and include this token as the only parameter. Specifying &#x60;nextToken&#x60; with any other parameters will cause the request to fail.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:reports_v2021_06_30/model/GetReportsResponse}
     */
    getReports(opts) {
      return this.getReportsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
