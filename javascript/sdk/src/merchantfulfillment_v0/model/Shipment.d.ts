/**
 * The Shipment model module.
 * @module merchantfulfillment_v0/model/Shipment
 * @version v0
 */
export class Shipment {
    /**
     * Constructs a <code>Shipment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Shipment} obj Optional instance to populate.
     * @return {Shipment} The populated <code>Shipment</code> instance.
     */
    static constructFromObject(data: any, obj: Shipment): Shipment;
    /**
     * Constructs a new <code>Shipment</code>.
     * The details of a shipment. Includes the shipment status.
     * @alias module:merchantfulfillment_v0/model/Shipment
     * @class
     * @param shipmentId {String} An Amazon-defined shipment identifier.
     * @param amazonOrderId {String} An Amazon-defined order identifier, in 3-7-7 format.
     * @param itemList {[Item]} The list of items you want to include in a shipment.
     * @param shipFromAddress {Address}
     * @param shipToAddress {Address}
     * @param packageDimensions {PackageDimensions}
     * @param weight {Weight}
     * @param insurance {CurrencyAmount}
     * @param shippingService {ShippingService}
     * @param label {Label}
     * @param status {ShipmentStatus}
     * @param createdDate {Date} Date-time formatted timestamp.
     */
    constructor(shipmentId: string, amazonOrderId: string, itemList: [Item], shipFromAddress: Address, shipToAddress: Address, packageDimensions: PackageDimensions, weight: Weight, insurance: CurrencyAmount, shippingService: ShippingService, label: Label, status: ShipmentStatus, createdDate: Date);
    shipmentId: string;
    amazonOrderId: string;
    itemList: Item[];
    shipFromAddress: Address;
    shipToAddress: Address;
    packageDimensions: PackageDimensions;
    weight: Weight;
    insurance: CurrencyAmount;
    shippingService: ShippingService;
    label: Label;
    status: ShipmentStatus;
    createdDate: Date;
    /**
     * A seller-defined order identifier.
     * @member {String} sellerOrderId
     * @type {String}
     */
    sellerOrderId: string;
    /**
     * The shipment tracking identifier provided by the carrier.
     * @member {String} trackingId
     * @type {String}
     */
    trackingId: string;
    /**
     * Date-time formatted timestamp.
     * @member {Date} lastUpdatedDate
     * @type {Date}
     */
    lastUpdatedDate: Date;
}
import { Item } from './Item.js';
import { Address } from './Address.js';
import { PackageDimensions } from './PackageDimensions.js';
import { Weight } from './Weight.js';
import { CurrencyAmount } from './CurrencyAmount.js';
import { ShippingService } from './ShippingService.js';
import { Label } from './Label.js';
import { ShipmentStatus } from './ShipmentStatus.js';
//# sourceMappingURL=Shipment.d.ts.map