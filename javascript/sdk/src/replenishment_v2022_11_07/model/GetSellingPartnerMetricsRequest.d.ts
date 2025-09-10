/**
 * The GetSellingPartnerMetricsRequest model module.
 * @module replenishment_v2022_11_07/model/GetSellingPartnerMetricsRequest
 * @version 2022-11-07
 */
export class GetSellingPartnerMetricsRequest {
    /**
     * Constructs a <code>GetSellingPartnerMetricsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetSellingPartnerMetricsRequest} obj Optional instance to populate.
     * @return {GetSellingPartnerMetricsRequest} The populated <code>GetSellingPartnerMetricsRequest</code> instance.
     */
    static constructFromObject(data: any, obj: GetSellingPartnerMetricsRequest): GetSellingPartnerMetricsRequest;
    /**
     * Constructs a new <code>GetSellingPartnerMetricsRequest</code>.
     * The request body for the &#x60;getSellingPartnerMetrics&#x60; operation.
     * @alias module:replenishment_v2022_11_07/model/GetSellingPartnerMetricsRequest
     * @class
     * @param timeInterval {TimeInterval}
     * @param timePeriodType {TimePeriodType}
     * @param marketplaceId {String} The marketplace identifier. The supported marketplaces for both sellers and vendors are US, CA, ES, UK, FR, IT, IN, DE and JP. The supported marketplaces for vendors only are BR, AU, MX, AE and NL. Refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids) to find the identifier for the marketplace.
     * @param programTypes {[ProgramType]} A list of replenishment program types.
     */
    constructor(timeInterval: TimeInterval, timePeriodType: TimePeriodType, marketplaceId: string, programTypes: [ProgramType]);
    timeInterval: TimeInterval;
    timePeriodType: TimePeriodType;
    marketplaceId: string;
    programTypes: [ProgramType];
    /**
     * @member {AggregationFrequency} aggregationFrequency
     * @type {AggregationFrequency}
     */
    aggregationFrequency: AggregationFrequency;
    /**
     * The list of metrics requested. If no metric value is provided, data for all of the metrics will be returned.
     * @member {[Metric]} metrics
     * @type {[Metric]}
     */
    metrics: [Metric];
}
import { TimeInterval } from './TimeInterval.js';
import { TimePeriodType } from './TimePeriodType.js';
import { ProgramType } from './ProgramType.js';
import { AggregationFrequency } from './AggregationFrequency.js';
import { Metric } from './Metric.js';
//# sourceMappingURL=GetSellingPartnerMetricsRequest.d.ts.map