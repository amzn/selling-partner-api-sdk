/**
 * The AssignAppointmentResourcesRequest model module.
 * @module services_v1/model/AssignAppointmentResourcesRequest
 * @version v1
 */
export class AssignAppointmentResourcesRequest {
    /**
     * Constructs a <code>AssignAppointmentResourcesRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {AssignAppointmentResourcesRequest} obj Optional instance to populate.
     * @return {AssignAppointmentResourcesRequest} The populated <code>AssignAppointmentResourcesRequest</code> instance.
     */
    static constructFromObject(data: any, obj: AssignAppointmentResourcesRequest): AssignAppointmentResourcesRequest;
    /**
     * Constructs a new <code>AssignAppointmentResourcesRequest</code>.
     * Request schema for the &#x60;assignAppointmentResources&#x60; operation.
     * @alias module:services_v1/model/AssignAppointmentResourcesRequest
     * @class
     * @param resources {Array[]} List of resources that performs or performed job appointment fulfillment.
     */
    constructor(resources: any[][]);
    resources: any[][];
}
//# sourceMappingURL=AssignAppointmentResourcesRequest.d.ts.map