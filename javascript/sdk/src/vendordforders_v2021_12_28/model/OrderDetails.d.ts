/**
 * The OrderDetails model module.
 * @module vendordforders_v2021_12_28/model/OrderDetails
 * @version 2021-12-28
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
     * @alias module:vendordforders_v2021_12_28/model/OrderDetails
     * @class
     * @param customerOrderNumber {String} The customer order number.
     * @param orderDate {Date} The date the order was placed. This  field is expected to be in ISO-8601 date/time format, for example:2018-07-16T23:00:00Z/ 2018-07-16T23:00:00-05:00 /2018-07-16T23:00:00-08:00. If no time zone is specified, UTC should be assumed.
     * @param shipmentDetails {ShipmentDetails}
     * @param sellingParty {PartyIdentification}
     * @param shipFromParty {PartyIdentification}
     * @param shipToParty {Address}
     * @param billToParty {PartyIdentification}
     * @param items {Array[]} A list of items in this purchase order.
     */
    constructor(customerOrderNumber: string, orderDate: Date, shipmentDetails: ShipmentDetails, sellingParty: PartyIdentification, shipFromParty: PartyIdentification, shipToParty: Address, billToParty: PartyIdentification, items: any[][]);
    customerOrderNumber: string;
    orderDate: Date;
    shipmentDetails: ShipmentDetails;
    sellingParty: PartyIdentification;
    shipFromParty: PartyIdentification;
    shipToParty: Address;
    billToParty: PartyIdentification;
    items: any[][];
    /**
     * Current status of the order.
     * @member {String} orderStatus
     * @type {String}
     */
    orderStatus: string;
    /**
     * @member {TaxItemDetails} taxTotal
     * @type {TaxItemDetails}
     */
    taxTotal: TaxItemDetails;
    /**
     * When `true`, the order contains customizable items.
     * @member {Boolean} hasCustomizableItems
     * @type {Boolean}
     */
    hasCustomizableItems: boolean;
}
export namespace OrderDetails {
    namespace OrderStatusEnum {
        let NEW: string;
        let SHIPPED: string;
        let ACCEPTED: string;
        let CANCELLED: string;
    }
    /**
     * *
     */
    type OrderStatusEnum = string;
}
import { ShipmentDetails } from './ShipmentDetails.js';
import { PartyIdentification } from './PartyIdentification.js';
import { Address } from './Address.js';
import { TaxItemDetails } from './TaxItemDetails.js';
//# sourceMappingURL=OrderDetails.d.ts.map