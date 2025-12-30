/**
 * The TaxWithheldComponent model module.
 * @module finances_v0/model/TaxWithheldComponent
 * @version v0
 */
export class TaxWithheldComponent {
    /**
     * Constructs a <code>TaxWithheldComponent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {TaxWithheldComponent} obj Optional instance to populate.
     * @return {TaxWithheldComponent} The populated <code>TaxWithheldComponent</code> instance.
     */
    static constructFromObject(data: any, obj: TaxWithheldComponent): TaxWithheldComponent;
    /**
     * The tax collection model applied to the item.  Possible values:  * `MarketplaceFacilitator`: Tax is withheld and remitted to the taxing authority by Amazon on behalf of the seller. * `Standard`: Tax is paid to the seller and not remitted to the taxing authority by Amazon.
     * @member {String} taxCollectionModel
     * @type {String}
     */
    taxCollectionModel: string;
    /**
     * A list of charge information on the seller's account.
     * @member {[ChargeComponent]} taxesWithheld
     * @type {[ChargeComponent]}
     */
    taxesWithheld: [ChargeComponent];
}
import { ChargeComponent } from './ChargeComponent.js';
//# sourceMappingURL=TaxWithheldComponent.d.ts.map