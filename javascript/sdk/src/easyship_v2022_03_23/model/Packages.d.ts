/**
 * The Packages model module.
 * @module easyship_v2022_03_23/model/Packages
 * @version 2022-03-23
 */
export class Packages {
    /**
     * Constructs a <code>Packages</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Packages} obj Optional instance to populate.
     * @return {Packages} The populated <code>Packages</code> instance.
     */
    static constructFromObject(data: any, obj: Packages): Packages;
    /**
     * Constructs a new <code>Packages</code>.
     * A list of packages.
     * @alias module:easyship_v2022_03_23/model/Packages
     * @class
     * @param packages {[Package]} A list of packages.
     */
    constructor(packages: [Package]);
    packages: [Package];
}
import { Package } from './Package.js';
//# sourceMappingURL=Packages.d.ts.map