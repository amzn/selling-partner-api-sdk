/**
 * The Container model module.
 * @module vendordfshipping_v2021_12_28/model/Container
 * @version 2021-12-28
 */
export class Container {
    /**
     * Constructs a <code>Container</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Container} obj Optional instance to populate.
     * @return {Container} The populated <code>Container</code> instance.
     */
    static constructFromObject(data: any, obj: Container): Container;
    /**
     * Constructs a new <code>Container</code>.
     * A container used for shipping and packing items.
     * @alias module:vendordfshipping_v2021_12_28/model/Container
     * @class
     * @param containerType {String} The type of container.
     * @param containerIdentifier {String} The container identifier.
     * @param weight {Weight}
     * @param packedItems {[PackedItem]} A list of packed items.
     */
    constructor(containerType: string, containerIdentifier: string, weight: Weight, packedItems: [PackedItem]);
    containerType: string;
    containerIdentifier: string;
    weight: Weight;
    packedItems: [PackedItem];
    /**
     * The tracking number.
     * @member {String} trackingNumber
     * @type {String}
     */
    trackingNumber: string;
    /**
     * The manifest identifier.
     * @member {String} manifestId
     * @type {String}
     */
    manifestId: string;
    /**
     * The date of the manifest.
     * @member {String} manifestDate
     * @type {String}
     */
    manifestDate: string;
    /**
     * The shipment method. This property is required when calling the `submitShipmentConfirmations` operation, and optional otherwise.
     * @member {String} shipMethod
     * @type {String}
     */
    shipMethod: string;
    /**
     * SCAC code required for NA VOC vendors only.
     * @member {String} scacCode
     * @type {String}
     */
    scacCode: string;
    /**
     * Carrier required for EU VOC vendors only.
     * @member {String} carrier
     * @type {String}
     */
    carrier: string;
    /**
     * An integer that must be submitted for multi-box shipments only, where one item may come in separate packages.
     * @member {Number} containerSequenceNumber
     * @type {Number}
     */
    containerSequenceNumber: number;
    /**
     * @member {Dimensions} dimensions
     * @type {Dimensions}
     */
    dimensions: Dimensions;
}
export namespace Container {
    namespace ContainerTypeEnum {
        let Carton: string;
        let Pallet: string;
    }
    /**
     * *
     */
    type ContainerTypeEnum = string;
}
import { Weight } from './Weight.js';
import { PackedItem } from './PackedItem.js';
import { Dimensions } from './Dimensions.js';
//# sourceMappingURL=Container.d.ts.map