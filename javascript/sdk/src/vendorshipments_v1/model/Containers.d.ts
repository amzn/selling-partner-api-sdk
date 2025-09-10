/**
 * The Containers model module.
 * @module vendorshipments_v1/model/Containers
 * @version v1
 */
export class Containers {
    /**
     * Constructs a <code>Containers</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Containers} obj Optional instance to populate.
     * @return {Containers} The populated <code>Containers</code> instance.
     */
    static constructFromObject(data: any, obj: Containers): Containers;
    /**
     * Constructs a new <code>Containers</code>.
     * A list of the items in this transportation and their associated inner container details. If any of the item detail fields are common at a carton or a pallet level, provide them at the corresponding carton or pallet level.
     * @alias module:vendorshipments_v1/model/Containers
     * @class
     * @param containerType {String} The type of container.
     * @param containerIdentifiers {[ContainerIdentification]} A list of carton identifiers.
     */
    constructor(containerType: string, containerIdentifiers: [ContainerIdentification]);
    containerType: string;
    containerIdentifiers: [ContainerIdentification];
    /**
     * An integer that must be submitted for multi-box shipments only, where one item may come in separate packages.
     * @member {String} containerSequenceNumber
     * @type {String}
     */
    containerSequenceNumber: string;
    /**
     * The tracking number used for identifying the shipment.
     * @member {String} trackingNumber
     * @type {String}
     */
    trackingNumber: string;
    /**
     * @member {Dimensions} dimensions
     * @type {Dimensions}
     */
    dimensions: Dimensions;
    /**
     * @member {Weight} weight
     * @type {Weight}
     */
    weight: Weight;
    /**
     * Number of layers per pallet.
     * @member {Number} tier
     * @type {Number}
     */
    tier: number;
    /**
     * Number of cartons per layer on the pallet.
     * @member {Number} block
     * @type {Number}
     */
    block: number;
    /**
     * @member {InnerContainersDetails} innerContainersDetails
     * @type {InnerContainersDetails}
     */
    innerContainersDetails: InnerContainersDetails;
    /**
     * A list of packed items.
     * @member {[PackedItems]} packedItems
     * @type {[PackedItems]}
     */
    packedItems: [PackedItems];
}
export namespace Containers {
    namespace ContainerTypeEnum {
        let carton: string;
        let pallet: string;
    }
    /**
     * *
     */
    type ContainerTypeEnum = string;
}
import { ContainerIdentification } from './ContainerIdentification.js';
import { Dimensions } from './Dimensions.js';
import { Weight } from './Weight.js';
import { InnerContainersDetails } from './InnerContainersDetails.js';
import { PackedItems } from './PackedItems.js';
//# sourceMappingURL=Containers.d.ts.map