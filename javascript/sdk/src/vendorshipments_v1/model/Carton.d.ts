/**
 * The Carton model module.
 * @module vendorshipments_v1/model/Carton
 * @version v1
 */
export class Carton {
    /**
     * Constructs a <code>Carton</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Carton} obj Optional instance to populate.
     * @return {Carton} The populated <code>Carton</code> instance.
     */
    static constructFromObject(data: any, obj: Carton): Carton;
    /**
     * Constructs a new <code>Carton</code>.
     * Details of the carton/package being shipped.
     * @alias module:vendorshipments_v1/model/Carton
     * @class
     * @param cartonSequenceNumber {String} Carton sequence number for the carton. The first carton will be 001, the second 002, and so on. This number is used as a reference to refer to this carton from the pallet level.
     * @param items {Array[]} A list of container item details.
     */
    constructor(cartonSequenceNumber: string, items: any[][]);
    cartonSequenceNumber: string;
    items: any[][];
    /**
     * A list of carton identifiers.
     * @member {Array[]} cartonIdentifiers
     * @type {Array[]}
     */
    cartonIdentifiers: any[][];
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
     * This is required to be provided for every carton in the small parcel shipments.
     * @member {String} trackingNumber
     * @type {String}
     */
    trackingNumber: string;
}
import { Dimensions } from './Dimensions.js';
import { Weight } from './Weight.js';
//# sourceMappingURL=Carton.d.ts.map