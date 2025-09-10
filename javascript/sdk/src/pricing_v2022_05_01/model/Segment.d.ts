/**
 * The Segment model module.
 * @module pricing_v2022_05_01/model/Segment
 * @version 2022-05-01
 */
export class Segment {
    /**
     * Constructs a <code>Segment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Segment} obj Optional instance to populate.
     * @return {Segment} The populated <code>Segment</code> instance.
     */
    static constructFromObject(data: any, obj: Segment): Segment;
    /**
     * @member {SegmentDetails} segmentDetails
     * @type {SegmentDetails}
     */
    segmentDetails: SegmentDetails;
}
import { SegmentDetails } from './SegmentDetails.js';
//# sourceMappingURL=Segment.d.ts.map