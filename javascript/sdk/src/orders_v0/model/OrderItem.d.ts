/**
 * The OrderItem model module.
 * @module orders_v0/model/OrderItem
 * @version v0
 */
export class OrderItem {
    /**
     * Constructs a <code>OrderItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {OrderItem} obj Optional instance to populate.
     * @return {OrderItem} The populated <code>OrderItem</code> instance.
     */
    static constructFromObject(data: any, obj: OrderItem): OrderItem;
    /**
     * Constructs a new <code>OrderItem</code>.
     * A single order item.
     * @alias module:orders_v0/model/OrderItem
     * @class
     * @param ASIN {String} The item's Amazon Standard Identification Number (ASIN).
     * @param orderItemId {String} An Amazon-defined order item identifier.
     * @param quantityOrdered {Number} The number of items in the order.
     */
    constructor(ASIN: string, orderItemId: string, quantityOrdered: number);
    ASIN: string;
    orderItemId: string;
    quantityOrdered: number;
    /**
     * The item's seller stock keeping unit (SKU).
     * @member {String} sellerSKU
     * @type {String}
     */
    sellerSKU: string;
    /**
     * A list of associated items that a customer has purchased with a product. For example, a tire installation service purchased with tires.
     * @member {[AssociatedItem]} associatedItems
     * @type {[AssociatedItem]}
     */
    associatedItems: [AssociatedItem];
    /**
     * The item's name.
     * @member {String} title
     * @type {String}
     */
    title: string;
    /**
     * The number of items shipped.
     * @member {Number} quantityShipped
     * @type {Number}
     */
    quantityShipped: number;
    /**
     * @member {ProductInfoDetail} productInfo
     * @type {ProductInfoDetail}
     */
    productInfo: ProductInfoDetail;
    /**
     * @member {PointsGrantedDetail} pointsGranted
     * @type {PointsGrantedDetail}
     */
    pointsGranted: PointsGrantedDetail;
    /**
     * @member {Money} itemPrice
     * @type {Money}
     */
    itemPrice: Money;
    /**
     * @member {Money} shippingPrice
     * @type {Money}
     */
    shippingPrice: Money;
    /**
     * @member {Money} itemTax
     * @type {Money}
     */
    itemTax: Money;
    /**
     * @member {Money} shippingTax
     * @type {Money}
     */
    shippingTax: Money;
    /**
     * @member {Money} shippingDiscount
     * @type {Money}
     */
    shippingDiscount: Money;
    /**
     * @member {Money} shippingDiscountTax
     * @type {Money}
     */
    shippingDiscountTax: Money;
    /**
     * @member {Money} promotionDiscount
     * @type {Money}
     */
    promotionDiscount: Money;
    /**
     * @member {Money} promotionDiscountTax
     * @type {Money}
     */
    promotionDiscountTax: Money;
    /**
     * A list of promotion identifiers provided by the seller when the promotions were created.
     * @member {[String]} promotionIds
     * @type {[String]}
     */
    promotionIds: [string];
    /**
     * @member {Money} cODFee
     * @type {Money}
     */
    cODFee: Money;
    /**
     * @member {Money} cODFeeDiscount
     * @type {Money}
     */
    cODFeeDiscount: Money;
    /**
     * Indicates whether the item is a gift.  **Possible values**: `true` and `false`.
     * @member {String} isGift
     * @type {String}
     */
    isGift: string;
    /**
     * The condition of the item, as described by the seller.
     * @member {String} conditionNote
     * @type {String}
     */
    conditionNote: string;
    /**
     * The condition of the item.  **Possible values**: `New`, `Used`, `Collectible`, `Refurbished`, `Preorder`, and `Club`.
     * @member {String} conditionId
     * @type {String}
     */
    conditionId: string;
    /**
     * The subcondition of the item.  **Possible values**: `New`, `Mint`, `Very Good`, `Good`, `Acceptable`, `Poor`, `Club`, `OEM`, `Warranty`, `Refurbished Warranty`, `Refurbished`, `Open Box`, `Any`, and `Other`.
     * @member {String} conditionSubtypeId
     * @type {String}
     */
    conditionSubtypeId: string;
    /**
     * The start date of the scheduled delivery window in the time zone for the order destination. In [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date time format.
     * @member {String} scheduledDeliveryStartDate
     * @type {String}
     */
    scheduledDeliveryStartDate: string;
    /**
     * The end date of the scheduled delivery window in the time zone for the order destination. In [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date time format.
     * @member {String} scheduledDeliveryEndDate
     * @type {String}
     */
    scheduledDeliveryEndDate: string;
    /**
     * Indicates that the selling price is a special price that is only available for Amazon Business orders. For more information about the Amazon Business Seller Program, refer to the [Amazon Business website](https://www.amazon.com/b2b/info/amazon-business).   **Possible values**: `BusinessPrice`
     * @member {String} priceDesignation
     * @type {String}
     */
    priceDesignation: string;
    /**
     * @member {TaxCollection} taxCollection
     * @type {TaxCollection}
     */
    taxCollection: TaxCollection;
    /**
     * When true, the product type for this item has a serial number.   Only returned for Amazon Easy Ship orders.
     * @member {Boolean} serialNumberRequired
     * @type {Boolean}
     */
    serialNumberRequired: boolean;
    /**
     * When true, the ASIN is enrolled in Transparency. The Transparency serial number that you must submit is determined by:  **1D or 2D Barcode:** This has a **T** logo. Submit either the 29-character alpha-numeric identifier beginning with **AZ** or **ZA**, or the 38-character Serialized Global Trade Item Number (SGTIN). **2D Barcode SN:** Submit the 7- to 20-character serial number barcode, which likely has the prefix **SN**. The serial number is applied to the same side of the packaging as the GTIN (UPC/EAN/ISBN) barcode. **QR code SN:** Submit the URL that the QR code generates.
     * @member {Boolean} isTransparency
     * @type {Boolean}
     */
    isTransparency: boolean;
    /**
     * The IOSS number of the marketplace. Sellers shipping to the EU from outside the EU must provide this IOSS number to their carrier when Amazon has collected the VAT on the sale.
     * @member {String} iossNumber
     * @type {String}
     */
    iossNumber: string;
    /**
     * The store chain store identifier. Linked to a specific store in a store chain.
     * @member {String} storeChainStoreId
     * @type {String}
     */
    storeChainStoreId: string;
    /**
     * The category of deemed reseller. This applies to selling partners that are not based in the EU and is used to help them meet the VAT Deemed Reseller tax laws in the EU and UK.
     * @member {String} deemedResellerCategory
     * @type {String}
     */
    deemedResellerCategory: string;
    /**
     * @member {ItemBuyerInfo} buyerInfo
     * @type {ItemBuyerInfo}
     */
    buyerInfo: ItemBuyerInfo;
    /**
     * @member {BuyerRequestedCancel} buyerRequestedCancel
     * @type {BuyerRequestedCancel}
     */
    buyerRequestedCancel: BuyerRequestedCancel;
    /**
     * A list of serial numbers for electronic products that are shipped to customers. Returned for FBA orders only.
     * @member {[String]} serialNumbers
     * @type {[String]}
     */
    serialNumbers: [string];
    /**
     * @member {SubstitutionPreferences} substitutionPreferences
     * @type {SubstitutionPreferences}
     */
    substitutionPreferences: SubstitutionPreferences;
    /**
     * @member {Measurement} measurement
     * @type {Measurement}
     */
    measurement: Measurement;
    /**
     * @member {ShippingConstraints} shippingConstraints
     * @type {ShippingConstraints}
     */
    shippingConstraints: ShippingConstraints;
    /**
     * @member {AmazonPrograms} amazonPrograms
     * @type {AmazonPrograms}
     */
    amazonPrograms: AmazonPrograms;
}
export namespace OrderItem {
    namespace DeemedResellerCategoryEnum {
        let IOSS: string;
        let UOSS: string;
    }
    /**
     * *
     */
    type DeemedResellerCategoryEnum = string;
}
import { AssociatedItem } from './AssociatedItem.js';
import { ProductInfoDetail } from './ProductInfoDetail.js';
import { PointsGrantedDetail } from './PointsGrantedDetail.js';
import { Money } from './Money.js';
import { TaxCollection } from './TaxCollection.js';
import { ItemBuyerInfo } from './ItemBuyerInfo.js';
import { BuyerRequestedCancel } from './BuyerRequestedCancel.js';
import { SubstitutionPreferences } from './SubstitutionPreferences.js';
import { Measurement } from './Measurement.js';
import { ShippingConstraints } from './ShippingConstraints.js';
import { AmazonPrograms } from './AmazonPrograms.js';
//# sourceMappingURL=OrderItem.d.ts.map