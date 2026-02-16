/**
 * The Pallet model module.
 * @module vendorshipments_v1/model/Pallet
 * @version v1
 */
export class Pallet {
    /**
     * Constructs a <code>Pallet</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Pallet} obj Optional instance to populate.
     * @return {Pallet} The populated <code>Pallet</code> instance.
     */
    static constructFromObject(data: any, obj: Pallet): Pallet;
    /**
     * Constructs a new <code>Pallet</code>.
     * Details of the Pallet/Tare being shipped.
     * @alias module:vendorshipments_v1/model/Pallet
     * @class
     * @param palletIdentifiers {ContainerIdentification[]} A list of pallet identifiers.
     */
    constructor(palletIdentifiers: ContainerIdentification[]);
    palletIdentifiers: ContainerIdentification[];
    /**
     * Number of layers per pallet. Only applicable to container type Pallet.
     * @member {Number} tier
     * @type {Number}
     */
    tier: number;
    /**
     * Number of cartons per layer on the pallet. Only applicable to container type Pallet.
     * @member {Number} block
     * @type {Number}
     */
    block: number;
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
     * @member {CartonReferenceDetails} cartonReferenceDetails
     * @type {CartonReferenceDetails}
     */
    cartonReferenceDetails: CartonReferenceDetails;
    /**
     * A list of container item details.
     * @member {ContainerItem[]} items
     * @type {ContainerItem[]}
     */
    items: ContainerItem[];
}
import { ContainerIdentification } from './ContainerIdentification.js';
import { Dimensions } from './Dimensions.js';
import { Weight } from './Weight.js';
import { CartonReferenceDetails } from './CartonReferenceDetails.js';
import { ContainerItem } from './ContainerItem.js';
//# sourceMappingURL=Pallet.d.ts.map