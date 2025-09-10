/**
 * The SegmentDetails model module.
 * @module pricing_v2022_05_01/model/SegmentDetails
 * @version 2022-05-01
 */
export class SegmentDetails {
    /**
     * Constructs a <code>SegmentDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {SegmentDetails} obj Optional instance to populate.
     * @return {SegmentDetails} The populated <code>SegmentDetails</code> instance.
     */
    static constructFromObject(data: any, obj: SegmentDetails): SegmentDetails;
    /**
     * The glance view weighted percentage for this segment, which is the glance views for this segment as a percentage of total glance views across all segments for the ASIN. A higher percentage indicates that more Amazon customers receive this offer as the Featured Offer.
     * @member {Number} glanceViewWeightPercentage
     * @type {Number}
     */
    glanceViewWeightPercentage: number;
    /**
     * @member {SampleLocation} sampleLocation
     * @type {SampleLocation}
     */
    sampleLocation: SampleLocation;
}
import { SampleLocation } from './SampleLocation.js';
//# sourceMappingURL=SegmentDetails.d.ts.map