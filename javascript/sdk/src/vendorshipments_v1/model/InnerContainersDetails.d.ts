/**
 * The InnerContainersDetails model module.
 * @module vendorshipments_v1/model/InnerContainersDetails
 * @version v1
 */
export class InnerContainersDetails {
    /**
     * Constructs a <code>InnerContainersDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {InnerContainersDetails} obj Optional instance to populate.
     * @return {InnerContainersDetails} The populated <code>InnerContainersDetails</code> instance.
     */
    static constructFromObject(data: any, obj: InnerContainersDetails): InnerContainersDetails;
    /**
     * Total containers as part of the shipment
     * @member {Number} containerCount
     * @type {Number}
     */
    containerCount: number;
    /**
     * Container sequence numbers that are involved in this shipment.
     * @member {[ContainerSequenceNumbers]} containerSequenceNumbers
     * @type {[ContainerSequenceNumbers]}
     */
    containerSequenceNumbers: [ContainerSequenceNumbers];
}
import { ContainerSequenceNumbers } from './ContainerSequenceNumbers.js';
//# sourceMappingURL=InnerContainersDetails.d.ts.map