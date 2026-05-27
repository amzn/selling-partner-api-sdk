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
    static constructFromObject(data: Object, obj: ListOfferMetricsRequestFilters): ListOfferMetricsRequestFilters;
    /**
     * Constructs a new <code>ListOfferMetricsRequestFilters</code>.
     * Use these parameters to filter results. Any result must match all provided parameters. For parameters that accept multiple values (arrays), the API returns results that match at least one value in the array.
     * @alias module:replenishment_v2022_11_07/model/ListOfferMetricsRequestFilters
     * @class
     * @param timeInterval {TimeInterval}
     * @param timePeriodType {TimePeriodType}
     * @param marketplaceId {String} The marketplace identifier. The supported marketplaces for both sellers and vendors are US, CA, ES, UK, FR, IT, IN, DE, and JP. The supported marketplaces for vendors only are BR, AU, MX, AE, and NL. Refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids) to find the identifier for the marketplace.
     * @param programTypes {ProgramType[]} A list of replenishment program types.
     */
    constructor(timeInterval: TimeInterval, timePeriodType: TimePeriodType, marketplaceId: string, programTypes: ProgramType[]);
    timeInterval: TimeInterval;
    timePeriodType: TimePeriodType;
    marketplaceId: string;
    programTypes: "SUBSCRIBE_AND_SAVE"[];
    /**
     * @member {AggregationFrequency} aggregationFrequency
     * @type {AggregationFrequency}
     */
    aggregationFrequency: AggregationFrequency;
    /**
     * A list of Amazon Standard Identification Numbers (ASINs) to filter by.
     * @member {String[]} asins
     * @type {String[]}
     */
    asins: string[];
    /**
     * [Applicable only for Sellers] A list of SKUs to filter by.
     * @member {String[]} skus
     * @type {String[]}
     */
    skus: string[];
    /**
     * [Applicable only for Sellers] The fulfillment channel types to filter by.
     * @member {FulfillmentChannelType[]} fulfillmentChannelTypes
     * @type {FulfillmentChannelType[]}
     */
    fulfillmentChannelTypes: FulfillmentChannelType[];
    /**
     * [Applicable only for US marketplace] A list of brand names to filter by.
     * @member {String[]} brandNames
     * @type {String[]}
     */
    brandNames: string[];
    /**
     * [Applicable only for Vendors] A list of product group names to filter by.
     * @member {String[]} productGroups
     * @type {String[]}
     */
    productGroups: string[];
}
import { TimeInterval } from './TimeInterval.js';
import { TimePeriodType } from './TimePeriodType.js';
import { AggregationFrequency } from './AggregationFrequency.js';
import { FulfillmentChannelType } from './FulfillmentChannelType.js';
import { ProgramType } from './ProgramType.js';
//# sourceMappingURL=ListOfferMetricsRequestFilters.d.ts.map