/**
 * The FBALiquidationEvent model module.
 * @module finances_v0/model/FBALiquidationEvent
 * @version v0
 */
export class FBALiquidationEvent {
    /**
     * Constructs a <code>FBALiquidationEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {FBALiquidationEvent} obj Optional instance to populate.
     * @return {FBALiquidationEvent} The populated <code>FBALiquidationEvent</code> instance.
     */
    static constructFromObject(data: any, obj: FBALiquidationEvent): FBALiquidationEvent;
    /**
     * A date in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.
     * @member {Date} postedDate
     * @type {Date}
     */
    postedDate: Date;
    /**
     * The identifier for the original removal order.
     * @member {String} originalRemovalOrderId
     * @type {String}
     */
    originalRemovalOrderId: string;
    /**
     * @member {Currency} liquidationProceedsAmount
     * @type {Currency}
     */
    liquidationProceedsAmount: Currency;
    /**
     * @member {Currency} liquidationFeeAmount
     * @type {Currency}
     */
    liquidationFeeAmount: Currency;
}
import { Currency } from './Currency.js';
//# sourceMappingURL=FBALiquidationEvent.d.ts.map