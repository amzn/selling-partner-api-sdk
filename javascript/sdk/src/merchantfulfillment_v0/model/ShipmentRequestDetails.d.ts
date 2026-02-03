/**
 * The ShipmentRequestDetails model module.
 * @module merchantfulfillment_v0/model/ShipmentRequestDetails
 * @version v0
 */
export class ShipmentRequestDetails {
    /**
     * Constructs a <code>ShipmentRequestDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ShipmentRequestDetails} obj Optional instance to populate.
     * @return {ShipmentRequestDetails} The populated <code>ShipmentRequestDetails</code> instance.
     */
    static constructFromObject(data: any, obj: ShipmentRequestDetails): ShipmentRequestDetails;
    /**
     * Constructs a new <code>ShipmentRequestDetails</code>.
     * Shipment information required for requesting shipping service offers or for creating a shipment.
     * @alias module:merchantfulfillment_v0/model/ShipmentRequestDetails
     * @class
     * @param amazonOrderId {String} An Amazon-defined order identifier, in 3-7-7 format.
     * @param itemList {Array[]} The list of items you want to include in a shipment.
     * @param shipFromAddress {Address}
     * @param packageDimensions {PackageDimensions}
     * @param weight {Weight}
     * @param shippingServiceOptions {ShippingServiceOptions}
     */
    constructor(amazonOrderId: string, itemList: any[][], shipFromAddress: Address, packageDimensions: PackageDimensions, weight: Weight, shippingServiceOptions: ShippingServiceOptions);
    amazonOrderId: string;
    itemList: any[][];
    shipFromAddress: Address;
    packageDimensions: PackageDimensions;
    weight: Weight;
    shippingServiceOptions: ShippingServiceOptions;
    /**
     * A seller-defined order identifier.
     * @member {String} sellerOrderId
     * @type {String}
     */
    sellerOrderId: string;
    /**
     * Date-time formatted timestamp.
     * @member {Date} mustArriveByDate
     * @type {Date}
     */
    mustArriveByDate: Date;
    /**
     * Date-time formatted timestamp.
     * @member {Date} shipDate
     * @type {Date}
     */
    shipDate: Date;
    /**
     * @member {LabelCustomization} labelCustomization
     * @type {LabelCustomization}
     */
    labelCustomization: LabelCustomization;
}
import { Address } from './Address.js';
import { PackageDimensions } from './PackageDimensions.js';
import { Weight } from './Weight.js';
import { ShippingServiceOptions } from './ShippingServiceOptions.js';
import { LabelCustomization } from './LabelCustomization.js';
//# sourceMappingURL=ShipmentRequestDetails.d.ts.map