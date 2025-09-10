/**
 * The BoxIdentifierInput model module.
 * @module fulfillmentinbound_v2024_03_20/model/BoxIdentifierInput
 * @version 2024-03-20
 */
export class BoxIdentifierInput {
    /**
     * Constructs a <code>BoxIdentifierInput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {BoxIdentifierInput} obj Optional instance to populate.
     * @return {BoxIdentifierInput} The populated <code>BoxIdentifierInput</code> instance.
     */
    static constructFromObject(data: any, obj: BoxIdentifierInput): BoxIdentifierInput;
    /**
     * Constructs a new <code>BoxIdentifierInput</code>.
     * Input information for updating a box identifier.
     * @alias module:fulfillmentinbound_v2024_03_20/model/BoxIdentifierInput
     * @class
     * @param externalContainerIdentifierType {BoxIdentifierType}
     * @param packageId {String} Primary key to uniquely identify a Box Package.
     */
    constructor(externalContainerIdentifierType: BoxIdentifierType, packageId: string);
    externalContainerIdentifierType: BoxIdentifierType;
    packageId: string;
    /**
     * The custom identifier for a certain box.
     * @member {String} externalContainerIdentifier
     * @type {String}
     */
    externalContainerIdentifier: string;
}
import { BoxIdentifierType } from './BoxIdentifierType.js';
//# sourceMappingURL=BoxIdentifierInput.d.ts.map