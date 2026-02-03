/**
 * The ShippingLabel model module.
 * @module vendordfshipping_v2021_12_28/model/ShippingLabel
 * @version 2021-12-28
 */
export class ShippingLabel {
    /**
     * Constructs a <code>ShippingLabel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ShippingLabel} obj Optional instance to populate.
     * @return {ShippingLabel} The populated <code>ShippingLabel</code> instance.
     */
    static constructFromObject(data: any, obj: ShippingLabel): ShippingLabel;
    /**
     * Constructs a new <code>ShippingLabel</code>.
     * Shipping label information for an order, including the purchase order number, selling party, ship from party, label format, and package details.
     * @alias module:vendordfshipping_v2021_12_28/model/ShippingLabel
     * @class
     * @param purchaseOrderNumber {String} This field will contain the Purchase Order Number for this order.
     * @param sellingParty {PartyIdentification}
     * @param shipFromParty {PartyIdentification}
     * @param labelFormat {String} Format of the label.
     * @param labelData {Array[]} Provides the details of the packages in this shipment.
     */
    constructor(purchaseOrderNumber: string, sellingParty: PartyIdentification, shipFromParty: PartyIdentification, labelFormat: string, labelData: any[][]);
    purchaseOrderNumber: string;
    sellingParty: PartyIdentification;
    shipFromParty: PartyIdentification;
    labelFormat: string;
    labelData: any[][];
}
export namespace ShippingLabel {
    namespace LabelFormatEnum {
        let PNG: string;
        let ZPL: string;
    }
    /**
     * *
     */
    type LabelFormatEnum = string;
}
import { PartyIdentification } from './PartyIdentification.js';
//# sourceMappingURL=ShippingLabel.d.ts.map