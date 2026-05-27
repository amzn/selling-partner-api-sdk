/**
 * The EventFilter model module.
 * @module notifications_v1/model/EventFilter
 * @version v1
 */
export class EventFilter {
    /**
     * Constructs a <code>EventFilter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {EventFilter} obj Optional instance to populate.
     * @return {EventFilter} The populated <code>EventFilter</code> instance.
     */
    static constructFromObject(data: Object, obj: EventFilter): EventFilter;
    /**
     * Constructs a new <code>EventFilter</code>.
     * A &#x60;notificationType&#x60; filter. This object contains all of the available filters and properties that you can use to define a &#x60;notificationType&#x60; specific filter.
     * @alias module:notifications_v1/model/EventFilter
     * @class
     * @implements module:notifications_v1/model/AggregationFilter
     * @implements module:notifications_v1/model/MarketplaceFilter
     * @implements module:notifications_v1/model/OrderChangeTypeFilter
     * @param eventFilterType {String} An `eventFilterType` value that the `notificationType` supports. The subscription service uses the `eventFilterType` to determine the type of event filter. To determine if a specific `notificationType` supports an `eventFilterType`, refer to [Notification Type Values]( https://developer-docs.amazon.com/sp-api/docs/notification-type-values).
     */
    constructor(eventFilterType: string);
    eventFilterType: string;
    /**
     * @member {AggregationSettings} aggregationSettings
     * @type {AggregationSettings}
     */
    aggregationSettings: AggregationSettings;
    /**
     * A list of marketplace identifiers you can subscribe to (for example, `ATVPDKIKX0DER`). To receive notifications in every marketplace, do not provide this list.
     * @member {String[]} marketplaceIds
     * @type {String[]}
     */
    marketplaceIds: string[];
    /**
     * A list of order change types you can subscribe to (for example, `BuyerRequestedChange`). To receive notifications of all change types, do not provide this list.
     * @member {OrderChangeTypeEnum[]} orderChangeTypes
     * @type {OrderChangeTypeEnum[]}
     */
    orderChangeTypes: OrderChangeTypeEnum[];
}
export namespace EventFilter {
    namespace EventFilterTypeEnum {
        let ANY_OFFER_CHANGED: string;
        let ORDER_CHANGE: string;
    }
    /**
     * *
     */
    type EventFilterTypeEnum = string;
}
import { AggregationSettings } from './AggregationSettings.js';
import { OrderChangeTypeEnum } from './OrderChangeTypeEnum.js';
//# sourceMappingURL=EventFilter.d.ts.map