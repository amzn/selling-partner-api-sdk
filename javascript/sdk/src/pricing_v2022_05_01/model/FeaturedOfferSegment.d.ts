/**
 * The FeaturedOfferSegment model module.
 * @module pricing_v2022_05_01/model/FeaturedOfferSegment
 * @version 2022-05-01
 */
export class FeaturedOfferSegment {
    /**
     * Constructs a <code>FeaturedOfferSegment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {FeaturedOfferSegment} obj Optional instance to populate.
     * @return {FeaturedOfferSegment} The populated <code>FeaturedOfferSegment</code> instance.
     */
    static constructFromObject(data: any, obj: FeaturedOfferSegment): FeaturedOfferSegment;
    /**
     * Constructs a new <code>FeaturedOfferSegment</code>.
     * Describes the segment in which the offer is featured.
     * @alias module:pricing_v2022_05_01/model/FeaturedOfferSegment
     * @class
     * @param customerMembership {String} The customer membership type that makes up this segment
     * @param segmentDetails {SegmentDetails}
     */
    constructor(customerMembership: string, segmentDetails: SegmentDetails);
    customerMembership: string;
    segmentDetails: SegmentDetails;
}
export namespace FeaturedOfferSegment {
    namespace CustomerMembershipEnum {
        let PRIME: string;
        let NON_PRIME: string;
        let DEFAULT: string;
    }
    /**
     * *
     */
    type CustomerMembershipEnum = string;
}
import { SegmentDetails } from './SegmentDetails.js';
//# sourceMappingURL=FeaturedOfferSegment.d.ts.map