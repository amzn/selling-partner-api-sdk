/**
 * The OrderDetails model module.
 * @module vendororders_v1/model/OrderDetails
 * @version v1
 */
export class OrderDetails {
    /**
     * Constructs a <code>OrderDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {OrderDetails} obj Optional instance to populate.
     * @return {OrderDetails} The populated <code>OrderDetails</code> instance.
     */
    static constructFromObject(data: any, obj: OrderDetails): OrderDetails;
    /**
     * Constructs a new <code>OrderDetails</code>.
     * Details of an order.
     * @alias module:vendororders_v1/model/OrderDetails
     * @class
     * @param purchaseOrderDate {Date} The date the purchase order was placed. Must be in ISO-8601 date/time format.
     * @param purchaseOrderStateChangedDate {Date} The date when current purchase order state was changed. Current purchase order state is available in the field 'purchaseOrderState'. Must be in ISO-8601 date/time format.
     * @param items {OrderItem[]} A list of items in this purchase order.
     */
    constructor(purchaseOrderDate: Date, purchaseOrderStateChangedDate: Date, items: OrderItem[]);
    purchaseOrderDate: Date;
    purchaseOrderStateChangedDate: Date;
    items: OrderItem[];
    /**
     * The date when purchase order was last changed by Amazon after the order was placed. This date will be greater than 'purchaseOrderDate'. This means the PO data was changed on that date and vendors are required to fulfill the  updated PO. The PO changes can be related to Item Quantity, Ship to Location, Ship Window etc. This field will not be present in orders that have not changed after creation. Must be in ISO-8601 date/time format.
     * @member {Date} purchaseOrderChangedDate
     * @type {Date}
     */
    purchaseOrderChangedDate: Date;
    /**
     * Type of purchase order.
     * @member {String} purchaseOrderType
     * @type {String}
     */
    purchaseOrderType: string;
    /**
     * @member {ImportDetails} importDetails
     * @type {ImportDetails}
     */
    importDetails: ImportDetails;
    /**
     * If requested by the recipient, this field will contain a promotional/deal number. The discount code line is optional. It is used to obtain a price discount on items on the order.
     * @member {String} dealCode
     * @type {String}
     */
    dealCode: string;
    /**
     * Payment method used.
     * @member {String} paymentMethod
     * @type {String}
     */
    paymentMethod: string;
    /**
     * @member {PartyIdentification} buyingParty
     * @type {PartyIdentification}
     */
    buyingParty: PartyIdentification;
    /**
     * @member {PartyIdentification} sellingParty
     * @type {PartyIdentification}
     */
    sellingParty: PartyIdentification;
    /**
     * @member {PartyIdentification} shipToParty
     * @type {PartyIdentification}
     */
    shipToParty: PartyIdentification;
    /**
     * @member {PartyIdentification} billToParty
     * @type {PartyIdentification}
     */
    billToParty: PartyIdentification;
    /**
     * Defines a date time interval according to ISO8601. Interval is separated by double hyphen (--).
     * @member {String} shipWindow
     * @type {String}
     */
    shipWindow: string;
    /**
     * Defines a date time interval according to ISO8601. Interval is separated by double hyphen (--).
     * @member {String} deliveryWindow
     * @type {String}
     */
    deliveryWindow: string;
}
export namespace OrderDetails {
    namespace PurchaseOrderTypeEnum {
        let RegularOrder: string;
        let ConsignedOrder: string;
        let NewProductIntroduction: string;
        let RushOrder: string;
    }
    /**
     * *
     */
    type PurchaseOrderTypeEnum = string;
    namespace PaymentMethodEnum {
        let Invoice: string;
        let Consignment: string;
        let CreditCard: string;
        let Prepaid: string;
    }
    /**
     * *
     */
    type PaymentMethodEnum = string;
}
import { OrderItem } from './OrderItem.js';
import { ImportDetails } from './ImportDetails.js';
import { PartyIdentification } from './PartyIdentification.js';
//# sourceMappingURL=OrderDetails.d.ts.map