/**
 * The PackingConfiguration model module.
 * @module fulfillmentinbound_v2024_03_20/model/PackingConfiguration
 * @version 2024-03-20
 */
export class PackingConfiguration {
    /**
     * Constructs a <code>PackingConfiguration</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {PackingConfiguration} obj Optional instance to populate.
     * @return {PackingConfiguration} The populated <code>PackingConfiguration</code> instance.
     */
    static constructFromObject(data: any, obj: PackingConfiguration): PackingConfiguration;
    /**
     * The box content information sources that are allowed.
     * @member {Array[]} boxPackingMethods
     * @type {Array[]}
     */
    boxPackingMethods: any[][];
    /**
     * @member {BoxRequirements} boxRequirements
     * @type {BoxRequirements}
     */
    boxRequirements: BoxRequirements;
    /**
     * A list of supported shipping requirements for this packing configuration.
     * @member {Array[]} shippingRequirements
     * @type {Array[]}
     */
    shippingRequirements: any[][];
}
import { BoxRequirements } from './BoxRequirements.js';
//# sourceMappingURL=PackingConfiguration.d.ts.map