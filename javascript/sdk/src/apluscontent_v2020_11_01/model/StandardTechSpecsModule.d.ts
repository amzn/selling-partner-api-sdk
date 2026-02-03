/**
 * The StandardTechSpecsModule model module.
 * @module apluscontent_v2020_11_01/model/StandardTechSpecsModule
 * @version 2020-11-01
 */
export class StandardTechSpecsModule {
    /**
     * Constructs a <code>StandardTechSpecsModule</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {StandardTechSpecsModule} obj Optional instance to populate.
     * @return {StandardTechSpecsModule} The populated <code>StandardTechSpecsModule</code> instance.
     */
    static constructFromObject(data: any, obj: StandardTechSpecsModule): StandardTechSpecsModule;
    /**
     * Constructs a new <code>StandardTechSpecsModule</code>.
     * The standard table of technical feature names and definitions.
     * @alias module:apluscontent_v2020_11_01/model/StandardTechSpecsModule
     * @class
     * @param specificationList {Array[]} The specification list.
     */
    constructor(specificationList: any[][]);
    specificationList: any[][];
    /**
     * @member {TextComponent} headline
     * @type {TextComponent}
     */
    headline: TextComponent;
    /**
     * The number of tables you want present. Features are evenly divided between the tables.
     * @member {Number} tableCount
     * @type {Number}
     */
    tableCount: number;
}
import { TextComponent } from './TextComponent.js';
//# sourceMappingURL=StandardTechSpecsModule.d.ts.map