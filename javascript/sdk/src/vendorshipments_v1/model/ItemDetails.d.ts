/**
 * The ItemDetails model module.
 * @module vendorshipments_v1/model/ItemDetails
 * @version v1
 */
export class ItemDetails {
    /**
     * Constructs a <code>ItemDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ItemDetails} obj Optional instance to populate.
     * @return {ItemDetails} The populated <code>ItemDetails</code> instance.
     */
    static constructFromObject(data: any, obj: ItemDetails): ItemDetails;
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
     * The location identifier where the product receives a traceability lot number. Provide this field for products subject to the FDA Food Safety Modernization Act (FSMA) Section 204. When you provide `lotNumberSourceReference`, you must also specify the corresponding `lotNumberSourceType` field.
     * @member {String} lotNumberSourceReference
     * @type {String}
     */
    lotNumberSourceReference: string;
    /**
     * The identifier type used for the lot number source. Provide this field when you specify `lotNumberSourceReference`.
     * @member {String} lotNumberSourceType
     * @type {String}
     */
    lotNumberSourceType: string;
    /**
     * The two-character country code for the country where the product was manufactured or originates. Use ISO 3166-1 alpha-2 format.
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
    /**
     * @member {Money} maximumRetailPrice
     * @type {Money}
     */
    maximumRetailPrice: Money;
    /**
     * Identification of the instructions on how specified item/carton/pallet should be handled.
     * @member {String} handlingCode
     * @type {String}
     */
    handlingCode: string;
}
export namespace ItemDetails {
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
    namespace HandlingCodeEnum {
        let Oversized: string;
        let Fragile: string;
        let Food: string;
        let HandleWithCare: string;
    }
    /**
     * *
     */
    type HandlingCodeEnum = string;
}
import { RegulationReferences } from './RegulationReferences.js';
import { Expiry } from './Expiry.js';
import { Money } from './Money.js';
//# sourceMappingURL=ItemDetails.d.ts.map