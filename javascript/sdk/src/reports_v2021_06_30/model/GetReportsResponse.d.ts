/**
 * The GetReportsResponse model module.
 * @module reports_v2021_06_30/model/GetReportsResponse
 * @version 2021-06-30
 */
export class GetReportsResponse {
    /**
     * Constructs a <code>GetReportsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetReportsResponse} obj Optional instance to populate.
     * @return {GetReportsResponse} The populated <code>GetReportsResponse</code> instance.
     */
    static constructFromObject(data: any, obj: GetReportsResponse): GetReportsResponse;
    /**
     * Constructs a new <code>GetReportsResponse</code>.
     * The response for the &#x60;getReports&#x60; operation.
     * @alias module:reports_v2021_06_30/model/GetReportsResponse
     * @class
     * @param reports {Array[]} A list of reports.
     */
    constructor(reports: any[][]);
    reports: any[][];
    /**
     * Returned when the number of results exceeds `pageSize`. To get the next page of results, call `getReports` with this token as the only parameter.
     * @member {String} nextToken
     * @type {String}
     */
    nextToken: string;
}
//# sourceMappingURL=GetReportsResponse.d.ts.map