/**
 * The SampleLocation model module.
 * @module pricing_v2022_05_01/model/SampleLocation
 * @version 2022-05-01
 */
export class SampleLocation {
    /**
     * Constructs a <code>SampleLocation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {SampleLocation} obj Optional instance to populate.
     * @return {SampleLocation} The populated <code>SampleLocation</code> instance.
     */
    static constructFromObject(data: any, obj: SampleLocation): SampleLocation;
    /**
     * @member {PostalCode} postalCode
     * @type {PostalCode}
     */
    postalCode: PostalCode;
}
import { PostalCode } from './PostalCode.js';
//# sourceMappingURL=SampleLocation.d.ts.map