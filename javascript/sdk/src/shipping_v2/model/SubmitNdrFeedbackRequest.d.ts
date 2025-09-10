/**
 * The SubmitNdrFeedbackRequest model module.
 * @module shipping_v2/model/SubmitNdrFeedbackRequest
 * @version v2
 */
export class SubmitNdrFeedbackRequest {
    /**
     * Constructs a <code>SubmitNdrFeedbackRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {SubmitNdrFeedbackRequest} obj Optional instance to populate.
     * @return {SubmitNdrFeedbackRequest} The populated <code>SubmitNdrFeedbackRequest</code> instance.
     */
    static constructFromObject(data: any, obj: SubmitNdrFeedbackRequest): SubmitNdrFeedbackRequest;
    /**
     * Constructs a new <code>SubmitNdrFeedbackRequest</code>.
     * The request schema for the NdrFeedback operation
     * @alias module:shipping_v2/model/SubmitNdrFeedbackRequest
     * @class
     * @param trackingId {String} The carrier generated identifier for a package in a purchased shipment.
     * @param ndrAction {NdrAction}
     */
    constructor(trackingId: string, ndrAction: NdrAction);
    trackingId: string;
    ndrAction: NdrAction;
    /**
     * @member {NdrRequestData} ndrRequestData
     * @type {NdrRequestData}
     */
    ndrRequestData: NdrRequestData;
}
import { NdrAction } from './NdrAction.js';
import { NdrRequestData } from './NdrRequestData.js';
//# sourceMappingURL=SubmitNdrFeedbackRequest.d.ts.map