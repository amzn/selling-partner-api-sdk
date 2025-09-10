/**
 * The SetAppointmentFulfillmentDataRequest model module.
 * @module services_v1/model/SetAppointmentFulfillmentDataRequest
 * @version v1
 */
export class SetAppointmentFulfillmentDataRequest {
    /**
     * Constructs a <code>SetAppointmentFulfillmentDataRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {SetAppointmentFulfillmentDataRequest} obj Optional instance to populate.
     * @return {SetAppointmentFulfillmentDataRequest} The populated <code>SetAppointmentFulfillmentDataRequest</code> instance.
     */
    static constructFromObject(data: any, obj: SetAppointmentFulfillmentDataRequest): SetAppointmentFulfillmentDataRequest;
    /**
     * @member {DateTimeRange} estimatedArrivalTime
     * @type {DateTimeRange}
     */
    estimatedArrivalTime: DateTimeRange;
    /**
     * @member {FulfillmentTime} fulfillmentTime
     * @type {FulfillmentTime}
     */
    fulfillmentTime: FulfillmentTime;
    /**
     * List of resources that performs or performed job appointment fulfillment.
     * @member {[AppointmentResource]} appointmentResources
     * @type {[AppointmentResource]}
     */
    appointmentResources: [AppointmentResource];
    /**
     * List of documents captured during service appointment fulfillment.
     * @member {[FulfillmentDocument]} fulfillmentDocuments
     * @type {[FulfillmentDocument]}
     */
    fulfillmentDocuments: [FulfillmentDocument];
}
import { DateTimeRange } from './DateTimeRange.js';
import { FulfillmentTime } from './FulfillmentTime.js';
import { AppointmentResource } from './AppointmentResource.js';
import { FulfillmentDocument } from './FulfillmentDocument.js';
//# sourceMappingURL=SetAppointmentFulfillmentDataRequest.d.ts.map