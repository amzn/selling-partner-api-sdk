/**
 * The CancelSelfShipAppointmentRequest model module.
 * @module fulfillmentinbound_v2024_03_20/model/CancelSelfShipAppointmentRequest
 * @version 2024-03-20
 */
export class CancelSelfShipAppointmentRequest {
    /**
     * Constructs a <code>CancelSelfShipAppointmentRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {CancelSelfShipAppointmentRequest} obj Optional instance to populate.
     * @return {CancelSelfShipAppointmentRequest} The populated <code>CancelSelfShipAppointmentRequest</code> instance.
     */
    static constructFromObject(data: any, obj: CancelSelfShipAppointmentRequest): CancelSelfShipAppointmentRequest;
    /**
     * @member {ReasonComment} reasonComment
     * @type {ReasonComment}
     */
    reasonComment: ReasonComment;
}
import { ReasonComment } from './ReasonComment.js';
//# sourceMappingURL=CancelSelfShipAppointmentRequest.d.ts.map