/**
 * The Box model module.
 * @module fulfillmentinbound_v2024_03_20/model/Box
 * @version 2024-03-20
 */
export class Box {
    /**
     * Constructs a <code>Box</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Box} obj Optional instance to populate.
     * @return {Box} The populated <code>Box</code> instance.
     */
    static constructFromObject(data: any, obj: Box): Box;
    /**
     * Constructs a new <code>Box</code>.
     * Contains information about a box that is used in the inbound plan. The box is a container that holds multiple items.
     * @alias module:fulfillmentinbound_v2024_03_20/model/Box
     * @class
     * @param packageId {String} Primary key to uniquely identify a Package (Box or Pallet).
     */
    constructor(packageId: string);
    packageId: string;
    /**
     * The ID provided by Amazon that identifies a given box. This ID is comprised of the external shipment ID (which is generated after transportation has been confirmed) and the index of the box.
     * @member {String} boxId
     * @type {String}
     */
    boxId: string;
    /**
     * @member {BoxContentInformationSource} contentInformationSource
     * @type {BoxContentInformationSource}
     */
    contentInformationSource: BoxContentInformationSource;
    /**
     * @member {Region} destinationRegion
     * @type {Region}
     */
    destinationRegion: Region;
    /**
     * @member {Dimensions} dimensions
     * @type {Dimensions}
     */
    dimensions: Dimensions;
    /**
     * The external identifier for this container / box.
     * @member {String} externalContainerIdentifier
     * @type {String}
     */
    externalContainerIdentifier: string;
    /**
     * Type of the external identifier used. Can be: `AMAZON`, `SSCC`.
     * @member {String} externalContainerIdentifierType
     * @type {String}
     */
    externalContainerIdentifierType: string;
    /**
     * Items contained within the box.
     * @member {Array[]} items
     * @type {Array[]}
     */
    items: any[][];
    /**
     * The number of containers where all other properties like weight or dimensions are identical.
     * @member {Number} quantity
     * @type {Number}
     */
    quantity: number;
    /**
     * Template name of the box.
     * @member {String} templateName
     * @type {String}
     */
    templateName: string;
    /**
     * @member {Weight} weight
     * @type {Weight}
     */
    weight: Weight;
}
import { BoxContentInformationSource } from './BoxContentInformationSource.js';
import { Region } from './Region.js';
import { Dimensions } from './Dimensions.js';
import { Weight } from './Weight.js';
//# sourceMappingURL=Box.d.ts.map