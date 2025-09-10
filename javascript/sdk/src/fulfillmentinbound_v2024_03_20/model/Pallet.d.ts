/**
 * The Pallet model module.
 * @module fulfillmentinbound_v2024_03_20/model/Pallet
 * @version 2024-03-20
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
     * Contains information about a pallet that is used in the inbound plan. The pallet is a container that holds multiple items or boxes.
     * @alias module:fulfillmentinbound_v2024_03_20/model/Pallet
     * @class
     * @param packageId {String} Primary key to uniquely identify a Package (Box or Pallet).
     */
    constructor(packageId: string);
    packageId: string;
    /**
     * @member {Dimensions} dimensions
     * @type {Dimensions}
     */
    dimensions: Dimensions;
    /**
     * The number of containers where all other properties like weight or dimensions are identical.
     * @member {Number} quantity
     * @type {Number}
     */
    quantity: number;
    /**
     * @member {Stackability} stackability
     * @type {Stackability}
     */
    stackability: Stackability;
    /**
     * @member {Weight} weight
     * @type {Weight}
     */
    weight: Weight;
}
import { Dimensions } from './Dimensions.js';
import { Stackability } from './Stackability.js';
import { Weight } from './Weight.js';
//# sourceMappingURL=Pallet.d.ts.map