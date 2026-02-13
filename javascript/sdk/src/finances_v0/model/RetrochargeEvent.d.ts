/**
 * The RetrochargeEvent model module.
 * @module finances_v0/model/RetrochargeEvent
 * @version v0
 */
export class RetrochargeEvent {
    /**
     * Constructs a <code>RetrochargeEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {RetrochargeEvent} obj Optional instance to populate.
     * @return {RetrochargeEvent} The populated <code>RetrochargeEvent</code> instance.
     */
    static constructFromObject(data: any, obj: RetrochargeEvent): RetrochargeEvent;
    /**
     * The type of event.  Possible values:  * `Retrocharge`  * `RetrochargeReversal`
     * @member {String} retrochargeEventType
     * @type {String}
     */
    retrochargeEventType: string;
    /**
     * An Amazon-defined identifier for an order.
     * @member {String} amazonOrderId
     * @type {String}
     */
    amazonOrderId: string;
    /**
     * A date in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.
     * @member {Date} postedDate
     * @type {Date}
     */
    postedDate: Date;
    /**
     * @member {Currency} baseTax
     * @type {Currency}
     */
    baseTax: Currency;
    /**
     * @member {Currency} shippingTax
     * @type {Currency}
     */
    shippingTax: Currency;
    /**
     * The name of the marketplace where the retrocharge event occurred.
     * @member {String} marketplaceName
     * @type {String}
     */
    marketplaceName: string;
    /**
     * A list of information about taxes withheld.
     * @member {TaxWithheldComponent[]} retrochargeTaxWithheldList
     * @type {TaxWithheldComponent[]}
     */
    retrochargeTaxWithheldList: TaxWithheldComponent[];
}
import { Currency } from './Currency.js';
import { TaxWithheldComponent } from './TaxWithheldComponent.js';
//# sourceMappingURL=RetrochargeEvent.d.ts.map