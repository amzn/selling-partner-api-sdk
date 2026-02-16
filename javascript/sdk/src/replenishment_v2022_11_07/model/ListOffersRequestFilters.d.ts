/**
 * The ListOffersRequestFilters model module.
 * @module replenishment_v2022_11_07/model/ListOffersRequestFilters
 * @version 2022-11-07
 */
export class ListOffersRequestFilters {
    /**
     * Constructs a <code>ListOffersRequestFilters</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ListOffersRequestFilters} obj Optional instance to populate.
     * @return {ListOffersRequestFilters} The populated <code>ListOffersRequestFilters</code> instance.
     */
    static constructFromObject(data: any, obj: ListOffersRequestFilters): ListOffersRequestFilters;
    /**
     * Constructs a new <code>ListOffersRequestFilters</code>.
     * Use these parameters to filter results. Any result must match all of the provided parameters. For any parameter that is an array, the result must match at least one element in the provided array.
     * @alias module:replenishment_v2022_11_07/model/ListOffersRequestFilters
     * @class
     * @param marketplaceId {String} The marketplace identifier. The supported marketplaces for both sellers and vendors are US, CA, ES, UK, FR, IT, IN, DE and JP. The supported marketplaces for vendors only are BR, AU, MX, AE and NL. Refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids) to find the identifier for the marketplace.
     * @param programTypes {ProgramType[]} A list of replenishment program types.
     */
    constructor(marketplaceId: string, programTypes: ProgramType[]);
    marketplaceId: string;
    programTypes: "SUBSCRIBE_AND_SAVE"[];
    /**
     * A list of SKUs to filter. This filter is only supported for sellers and not for vendors.
     * @member {String[]} skus
     * @type {String[]}
     */
    skus: string[];
    /**
     * A list of Amazon Standard Identification Numbers (ASINs).
     * @member {String[]} asins
     * @type {String[]}
     */
    asins: string[];
    /**
     * A list of eligibilities associated with an offer.
     * @member {EligibilityStatus[]} eligibilities
     * @type {EligibilityStatus[]}
     */
    eligibilities: EligibilityStatus[];
    /**
     * @member {Preference} preferences
     * @type {Preference}
     */
    preferences: Preference;
    /**
     * @member {Promotion} promotions
     * @type {Promotion}
     */
    promotions: Promotion;
}
import { EligibilityStatus } from './EligibilityStatus.js';
import { Preference } from './Preference.js';
import { Promotion } from './Promotion.js';
import { ProgramType } from './ProgramType.js';
//# sourceMappingURL=ListOffersRequestFilters.d.ts.map