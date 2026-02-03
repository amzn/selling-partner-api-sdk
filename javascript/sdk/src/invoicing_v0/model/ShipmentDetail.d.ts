/**
 * The ShipmentDetail model module.
 * @module invoicing_v0/model/ShipmentDetail
 * @version v0
 */
export class ShipmentDetail {
    /**
     * Constructs a <code>ShipmentDetail</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ShipmentDetail} obj Optional instance to populate.
     * @return {ShipmentDetail} The populated <code>ShipmentDetail</code> instance.
     */
    static constructFromObject(data: any, obj: ShipmentDetail): ShipmentDetail;
    /**
     * The Amazon-defined identifier for the warehouse.
     * @member {String} warehouseId
     * @type {String}
     */
    warehouseId: string;
    /**
     * The Amazon-defined identifier for the order.
     * @member {String} amazonOrderId
     * @type {String}
     */
    amazonOrderId: string;
    /**
     * The Amazon-defined identifier for the shipment.
     * @member {String} amazonShipmentId
     * @type {String}
     */
    amazonShipmentId: string;
    /**
     * The date and time when the order was created.
     * @member {Date} purchaseDate
     * @type {Date}
     */
    purchaseDate: Date;
    /**
     * @member {Address} shippingAddress
     * @type {Address}
     */
    shippingAddress: Address;
    /**
     * The list of payment method details.
     * @member {Array[]} paymentMethodDetails
     * @type {Array[]}
     */
    paymentMethodDetails: any[][];
    /**
     * List of payment transactions
     * @member {Array[]} payments
     * @type {Array[]}
     */
    payments: any[][];
    /**
     * The identifier for the marketplace where the order was placed.
     * @member {String} marketplaceId
     * @type {String}
     */
    marketplaceId: string;
    /**
     * The seller identifier.
     * @member {String} sellerId
     * @type {String}
     */
    sellerId: string;
    /**
     * The name of the buyer.
     * @member {String} buyerName
     * @type {String}
     */
    buyerName: string;
    /**
     * The county of the buyer.
     * @member {String} buyerCounty
     * @type {String}
     */
    buyerCounty: string;
    /**
     * @member {BuyerTaxInfo} buyerTaxInfo
     * @type {BuyerTaxInfo}
     */
    buyerTaxInfo: BuyerTaxInfo;
    /**
     * @member {MarketplaceTaxInfo} marketplaceTaxInfo
     * @type {MarketplaceTaxInfo}
     */
    marketplaceTaxInfo: MarketplaceTaxInfo;
    /**
     * The seller’s friendly name registered in the marketplace.
     * @member {String} sellerDisplayName
     * @type {String}
     */
    sellerDisplayName: string;
    /**
     * A list of shipment items.
     * @member {Array[]} shipmentItems
     * @type {Array[]}
     */
    shipmentItems: any[][];
}
import { Address } from './Address.js';
import { BuyerTaxInfo } from './BuyerTaxInfo.js';
import { MarketplaceTaxInfo } from './MarketplaceTaxInfo.js';
//# sourceMappingURL=ShipmentDetail.d.ts.map