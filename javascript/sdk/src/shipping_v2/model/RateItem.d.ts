/**
 * The RateItem model module.
 * @module shipping_v2/model/RateItem
 * @version v2
 */
export class RateItem {
    /**
     * Constructs a <code>RateItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {RateItem} obj Optional instance to populate.
     * @return {RateItem} The populated <code>RateItem</code> instance.
     */
    static constructFromObject(data: any, obj: RateItem): RateItem;
    /**
     * @member {RateItemID} rateItemID
     * @type {RateItemID}
     */
    rateItemID: RateItemID;
    /**
     * @member {RateItemType} rateItemType
     * @type {RateItemType}
     */
    rateItemType: RateItemType;
    /**
     * @member {Currency} rateItemCharge
     * @type {Currency}
     */
    rateItemCharge: Currency;
    /**
     * Used for the localization.
     * @member {String} rateItemNameLocalization
     * @type {String}
     */
    rateItemNameLocalization: string;
}
import { RateItemID } from './RateItemID.js';
import { RateItemType } from './RateItemType.js';
import { Currency } from './Currency.js';
//# sourceMappingURL=RateItem.d.ts.map