/**
 * The ListOffersResponseOffer model module.
 * @module replenishment_v2022_11_07/model/ListOffersResponseOffer
 * @version 2022-11-07
 */
export class ListOffersResponseOffer {
    /**
     * Constructs a <code>ListOffersResponseOffer</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ListOffersResponseOffer} obj Optional instance to populate.
     * @return {ListOffersResponseOffer} The populated <code>ListOffersResponseOffer</code> instance.
     */
    static constructFromObject(data: Object, obj: ListOffersResponseOffer): ListOffersResponseOffer;
    /**
     * The SKU. This property is only supported for sellers and not for vendors.
     * @member {String} sku
     * @type {String}
     */
    sku: string;
    /**
     * The Amazon Standard Identification Number (ASIN).
     * @member {String} asin
     * @type {String}
     */
    asin: string;
    /**
     * The marketplace identifier. The supported marketplaces for both sellers and vendors are US, CA, ES, UK, FR, IT, IN, DE, and JP. The supported marketplaces for vendors only are BR, AU, MX, AE, and NL. Refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids) to find the identifier for the marketplace.
     * @member {String} marketplaceId
     * @type {String}
     */
    marketplaceId: string;
    /**
     * @member {EligibilityStatus} eligibility
     * @type {EligibilityStatus}
     */
    eligibility: EligibilityStatus;
    /**
     * @member {OfferProgramConfiguration} offerProgramConfiguration
     * @type {OfferProgramConfiguration}
     */
    offerProgramConfiguration: OfferProgramConfiguration;
    /**
     * @member {ProgramType} programType
     * @type {ProgramType}
     */
    programType: ProgramType;
    /**
     * A list of vendor codes associated with the offer.
     * @member {String[]} vendorCodes
     * @type {String[]}
     */
    vendorCodes: string[];
    /**
     * The current price of the offer. This is the listed price amount for the item.
     * @member {Number} price
     * @type {Number}
     */
    price: number;
    /**
     * The currency code in ISO 4217 format for the price. For example, `USD` for US dollars.
     * @member {String} priceCurrencyCode
     * @type {String}
     */
    priceCurrencyCode: string;
    /**
     * The available inventory count for the offer.
     * @member {Number} inventory
     * @type {Number}
     */
    inventory: number;
    /**
     * The stock risk level of the offer, indicating the risk of the offer going out of stock.
     * @member {String} stockRisk
     * @type {String}
     */
    stockRisk: string;
    /**
     * A list of delivery conditions for the offer, indicating the health of upcoming deliveries. Each condition describes the quantity of upcoming deliveries associated with a particular delivery condition type.
     * @member {DeliveriesCondition[]} deliveriesConditions
     * @type {DeliveriesCondition[]}
     */
    deliveriesConditions: DeliveriesCondition[];
    /**
     * The number of active subscriptions for the offer.
     * @member {Number} subscriptions
     * @type {Number}
     */
    subscriptions: number;
    /**
     * The fulfillment network identifier type for the offer, indicating how the offer is fulfilled.
     * @member {String} fulfillmentNetworkIDType
     * @type {String}
     */
    fulfillmentNetworkIDType: string;
    /**
     * @member {ForecastDeliveries} forecastDeliveries
     * @type {ForecastDeliveries}
     */
    forecastDeliveries: ForecastDeliveries;
}
import { EligibilityStatus } from './EligibilityStatus.js';
import { OfferProgramConfiguration } from './OfferProgramConfiguration.js';
import { ProgramType } from './ProgramType.js';
import { DeliveriesCondition } from './DeliveriesCondition.js';
import { ForecastDeliveries } from './ForecastDeliveries.js';
//# sourceMappingURL=ListOffersResponseOffer.d.ts.map