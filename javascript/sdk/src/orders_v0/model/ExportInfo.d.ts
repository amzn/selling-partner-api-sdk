/**
 * The ExportInfo model module.
 * @module orders_v0/model/ExportInfo
 * @version v0
 */
export class ExportInfo {
    /**
     * Constructs a <code>ExportInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ExportInfo} obj Optional instance to populate.
     * @return {ExportInfo} The populated <code>ExportInfo</code> instance.
     */
    static constructFromObject(data: any, obj: ExportInfo): ExportInfo;
    /**
     * @member {Money} exportCharge
     * @type {Money}
     */
    exportCharge: Money;
    /**
     * Holds the `ExportCharge` collection model that is associated with the specified order item.  **Possible values**: `AMAZON_FACILITATED`: Import/export charge is withheld by Amazon and remitted to the customs authority by the carrier on behalf of the buyer/seller.
     * @member {String} exportChargeModel
     * @type {String}
     */
    exportChargeModel: string;
}
import { Money } from './Money.js';
//# sourceMappingURL=ExportInfo.d.ts.map