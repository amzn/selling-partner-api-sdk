/**
 * The ListOfferMetricsRequestFilters model module.
 * @module replenishment_v2022_11_07/model/ListOfferMetricsRequestFilters
 * @version 2022-11-07
 */
export class ListOfferMetricsRequestFilters {
    /**
     * Constructs a <code>ListOfferMetricsRequestFilters</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ListOfferMetricsRequestFilters} obj Optional instance to populate.
     * @return {ListOfferMetricsRequestFilters} The populated <code>ListOfferMetricsRequestFilters</code> instance.
     */
    static constructFromObject(data: any, obj: ListOfferMetricsRequestFilters): ListOfferMetricsRequestFilters;
    /**
     * Constructs a new <code>ListOfferMetricsRequestFilters</code>.
     * Use these parameters to filter results. Any result must match all provided parameters. For any parameter that is an array, the result must match at least one element in the provided array.
     * @alias module:replenishment_v2022_11_07/model/ListOfferMetricsRequestFilters
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
     * A list of Amazon Standard Identification Numbers (ASINs).
     * @member {[String]} asins
     * @type {[String]}
     */
    asins: [string];
}
import { TimeInterval } from './TimeInterval.js';
import { TimePeriodType } from './TimePeriodType.js';
import { ProgramType } from './ProgramType.js';
import { AggregationFrequency } from './AggregationFrequency.js';
//# sourceMappingURL=ListOfferMetricsRequestFilters.d.ts.map