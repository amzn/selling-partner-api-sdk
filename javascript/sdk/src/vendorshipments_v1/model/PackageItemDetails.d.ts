/**
 * The PackageItemDetails model module.
 * @module vendorshipments_v1/model/PackageItemDetails
 * @version v1
 */
export class PackageItemDetails {
    /**
     * Constructs a <code>PackageItemDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {PackageItemDetails} obj Optional instance to populate.
     * @return {PackageItemDetails} The populated <code>PackageItemDetails</code> instance.
     */
    static constructFromObject(data: any, obj: PackageItemDetails): PackageItemDetails;
    /**
     * The purchase order number for the shipment being confirmed. If the items in this shipment belong to multiple purchase order numbers that are in particular carton or pallet within the shipment, then provide the purchaseOrderNumber at the appropriate carton or pallet level. Formatting Notes: 8-character alpha-numeric code.
     * @member {String} purchaseOrderNumber
     * @type {String}
     */
    purchaseOrderNumber: string;
    /**
     * The batch or lot number associates an item with information the manufacturer considers relevant for traceability of the trade item to which the Element String is applied. The data may refer to the trade item itself or to items contained. This field is mandatory for all perishable items.
     * @member {String} lotNumber
     * @type {String}
     */
    lotNumber: string;
    /**
     * This is a reference to the lot number source location meaning the place where the product was assigned a traceability lot number. This is mandatory for goods in scope of the FDA Food Safety Modernization Act (FSMA 204). If provided, lotNumberSourceType must also be specified.
     * @member {String} lotNumberSourceReference
     * @type {String}
     */
    lotNumberSourceReference: string;
    /**
     * The type of reference for the lot number source. Must be provided when lotNumberSourceReference is specified.
     * @member {String} lotNumberSourceType
     * @type {String}
     */
    lotNumberSourceType: string;
    /**
     * The two digit country code in ISO 3166-1 alpha-2 format representing the country where the product was manufactured or originated.
     * @member {String} countryOfOrigin
     * @type {String}
     */
    countryOfOrigin: string;
    /**
     * @member {RegulationReferences} regulationReferences
     * @type {RegulationReferences}
     */
    regulationReferences: RegulationReferences;
    /**
     * @member {Expiry} expiry
     * @type {Expiry}
     */
    expiry: Expiry;
}
export namespace PackageItemDetails {
    namespace LotNumberSourceTypeEnum {
        let GLN: string;
        let FFRN: string;
        let USDA_E: string;
        let URL: string;
    }
    /**
     * *
     */
    type LotNumberSourceTypeEnum = string;
}
import { RegulationReferences } from './RegulationReferences.js';
import { Expiry } from './Expiry.js';
//# sourceMappingURL=PackageItemDetails.d.ts.map