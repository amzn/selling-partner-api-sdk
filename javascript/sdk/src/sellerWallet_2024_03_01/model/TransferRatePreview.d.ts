/**
 * The TransferRatePreview model module.
 * @module sellerWallet_2024_03_01/model/TransferRatePreview
 * @version 2024-03-01
 */
export class TransferRatePreview {
    /**
     * Constructs a <code>TransferRatePreview</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {TransferRatePreview} obj Optional instance to populate.
     * @return {TransferRatePreview} The populated <code>TransferRatePreview</code> instance.
     */
    static constructFromObject(data: any, obj: TransferRatePreview): TransferRatePreview;
    /**
     * Constructs a new <code>TransferRatePreview</code>.
     * The fees and foreign exchange rates that apply to the transaction.  If the fees are in terms of the &#x60;baseAmount&#x60; (source account) currency, then the effective rate is equal to **1 - (fees * &#x60;baseRate&#x60; / &#x60;baseAmount&#x60;)**.  If the fees are in terms of the &#x60;transferAmount&#x60; (destination account) currency, then the effective rate is equal to **&#x60;baseRate&#x60; - (fees / &#x60;baseAmount&#x60;)**.  In the preceding expressions, **fees** is equal to the sum of all &#x60;feeAmount.currencyAmount&#x60; values in the &#x60;fees&#x60; array.
     * @alias module:sellerWallet_2024_03_01/model/TransferRatePreview
     * @class
     * @param baseAmount {Currency}
     * @param fxRateDetails {FxRateDetails}
     * @param transferAmount {Currency}
     * @param fees {[Fee]} List of fees
     */
    constructor(baseAmount: Currency, fxRateDetails: FxRateDetails, transferAmount: Currency, fees: [Fee]);
    baseAmount: Currency;
    fxRateDetails: FxRateDetails;
    transferAmount: Currency;
    fees: [Fee];
}
import { Currency } from './Currency.js';
import { FxRateDetails } from './FxRateDetails.js';
import { Fee } from './Fee.js';
//# sourceMappingURL=TransferRatePreview.d.ts.map