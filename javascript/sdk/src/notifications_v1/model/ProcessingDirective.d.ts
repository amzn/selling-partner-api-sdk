/**
 * The ProcessingDirective model module.
 * @module notifications_v1/model/ProcessingDirective
 * @version v1
 */
export class ProcessingDirective {
    /**
     * Constructs a <code>ProcessingDirective</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ProcessingDirective} obj Optional instance to populate.
     * @return {ProcessingDirective} The populated <code>ProcessingDirective</code> instance.
     */
    static constructFromObject(data: Object, obj: ProcessingDirective): ProcessingDirective;
    /**
     * @member {EventFilter} eventFilter
     * @type {EventFilter}
     */
    eventFilter: EventFilter;
    /**
     * An expression for filtering events before delivery to destination based on the notification payload (example: FulfillmentOrderStatusNotification.FulfillmentOrderStatus == `SHIPPED` ). The `filterExpression` is a string that follows the CEL expression syntax (https://github.com/google/cel-spec) excluding arithmetic operators (+, -, *, /, %) and list/map indexing ([]). Refer to Notification Type Values to determine if filter Expression is supported for a Notification Type. Refer to CEL Operators (https://developer-docs.amazon.com/sp-api/docs/filter-notification-subscriptions) to see if a CEL operator is supported.   Note: eventFilter and filterExpression are mutually exclusive. You can use filterExpression to replace existing eventFilter configurations.
     * @member {String} filterExpression
     * @type {String}
     */
    filterExpression: string;
}
import { EventFilter } from './EventFilter.js';
//# sourceMappingURL=ProcessingDirective.d.ts.map