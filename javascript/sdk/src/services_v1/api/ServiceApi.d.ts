/**
* Service service.
* @module services_v1/api/ServiceApi
* @version v1
*/
export class ServiceApi {
    /**
      * Constructs a new ServiceApi.
      * @alias module:services_v1/api/ServiceApi
      * @class
      * @param {ApiClient} [apiClient] Optional API client implementation to use,
      * default to {@link ApiClient#instance} if unspecified.
      */
    constructor(apiClient?: ApiClient);
    apiClient: any;
    /**
       * Initialize rate limiters for API operations
       */
    initializeDefaultRateLimiterMap(): void;
    /**
       * Get rate limiter for a specific operation
       * @param {String} operation name
       */
    getRateLimiter(operation: string): any;
    /**
       * Adds an appointment to the service job indicated by the service job identifier specified.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 20 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} serviceJobId An Amazon defined service job identifier.
       * @param {AddAppointmentRequest} body Add appointment operation input details.
       * @return {Promise<SetAppointmentResponse>}
       */
    addAppointmentForServiceJobByServiceJobIdWithHttpInfo(serviceJobId: string, body: AddAppointmentRequest): Promise<SetAppointmentResponse>;
    /**
       * Adds an appointment to the service job indicated by the service job identifier specified.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 20 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} serviceJobId An Amazon defined service job identifier.
       * @param {AddAppointmentRequest} body Add appointment operation input details.
       * @return {Promise<SetAppointmentResponse>}
       */
    addAppointmentForServiceJobByServiceJobId(serviceJobId: string, body: AddAppointmentRequest): Promise<SetAppointmentResponse>;
    /**
       * Assigns new resource(s) or overwrite/update the existing one(s) to a service job appointment.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 2 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} serviceJobId An Amazon-defined service job identifier. Get this value by calling the &#x60;getServiceJobs&#x60; operation of the Services API.
       * @param {String} appointmentId An Amazon-defined identifier of active service job appointment.
       * @param {AssignAppointmentResourcesRequest} body
       * @return {Promise<AssignAppointmentResourcesResponse>}
       */
    assignAppointmentResourcesWithHttpInfo(serviceJobId: string, appointmentId: string, body: AssignAppointmentResourcesRequest): Promise<AssignAppointmentResourcesResponse>;
    /**
       * Assigns new resource(s) or overwrite/update the existing one(s) to a service job appointment.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 2 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} serviceJobId An Amazon-defined service job identifier. Get this value by calling the &#x60;getServiceJobs&#x60; operation of the Services API.
       * @param {String} appointmentId An Amazon-defined identifier of active service job appointment.
       * @param {AssignAppointmentResourcesRequest} body
       * @return {Promise<AssignAppointmentResourcesResponse>}
       */
    assignAppointmentResources(serviceJobId: string, appointmentId: string, body: AssignAppointmentResourcesRequest): Promise<AssignAppointmentResourcesResponse>;
    /**
       * Cancel a reservation.   **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 20 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} reservationId Reservation Identifier
       * @param {[String]} marketplaceIds An identifier for the marketplace in which the resource operates.
       * @return {Promise<CancelReservationResponse>}
       */
    cancelReservationWithHttpInfo(reservationId: string, marketplaceIds: [string]): Promise<CancelReservationResponse>;
    /**
       * Cancel a reservation.   **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 20 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} reservationId Reservation Identifier
       * @param {[String]} marketplaceIds An identifier for the marketplace in which the resource operates.
       * @return {Promise<CancelReservationResponse>}
       */
    cancelReservation(reservationId: string, marketplaceIds: [string]): Promise<CancelReservationResponse>;
    /**
       * Cancels the service job indicated by the service job identifier specified.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 20 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} serviceJobId An Amazon defined service job identifier.
       * @param {String} cancellationReasonCode A cancel reason code that specifies the reason for cancelling a service job.
       * @return {Promise<CancelServiceJobByServiceJobIdResponse>}
       */
    cancelServiceJobByServiceJobIdWithHttpInfo(serviceJobId: string, cancellationReasonCode: string): Promise<CancelServiceJobByServiceJobIdResponse>;
    /**
       * Cancels the service job indicated by the service job identifier specified.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 20 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} serviceJobId An Amazon defined service job identifier.
       * @param {String} cancellationReasonCode A cancel reason code that specifies the reason for cancelling a service job.
       * @return {Promise<CancelServiceJobByServiceJobIdResponse>}
       */
    cancelServiceJobByServiceJobId(serviceJobId: string, cancellationReasonCode: string): Promise<CancelServiceJobByServiceJobIdResponse>;
    /**
       * Completes the service job indicated by the service job identifier specified.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 20 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} serviceJobId An Amazon defined service job identifier.
       * @return {Promise<CompleteServiceJobByServiceJobIdResponse>}
       */
    completeServiceJobByServiceJobIdWithHttpInfo(serviceJobId: string): Promise<CompleteServiceJobByServiceJobIdResponse>;
    /**
       * Completes the service job indicated by the service job identifier specified.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 20 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} serviceJobId An Amazon defined service job identifier.
       * @return {Promise<CompleteServiceJobByServiceJobIdResponse>}
       */
    completeServiceJobByServiceJobId(serviceJobId: string): Promise<CompleteServiceJobByServiceJobIdResponse>;
    /**
       * Create a reservation.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 20 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
       * @param {[String]} marketplaceIds An identifier for the marketplace in which the resource operates.
       * @param {CreateReservationRequest} body Reservation details
       * @return {Promise<CreateReservationResponse>}
       */
    createReservationWithHttpInfo(marketplaceIds: [string], body: CreateReservationRequest): Promise<CreateReservationResponse>;
    /**
       * Create a reservation.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 20 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
       * @param {[String]} marketplaceIds An identifier for the marketplace in which the resource operates.
       * @param {CreateReservationRequest} body Reservation details
       * @return {Promise<CreateReservationResponse>}
       */
    createReservation(marketplaceIds: [string], body: CreateReservationRequest): Promise<CreateReservationResponse>;
    /**
       * Creates an upload destination.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 20 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
       * @param {ServiceUploadDocument} body Upload document operation input details.
       * @return {Promise<CreateServiceDocumentUploadDestination>}
       */
    createServiceDocumentUploadDestinationWithHttpInfo(body: ServiceUploadDocument): Promise<CreateServiceDocumentUploadDestination>;
    /**
       * Creates an upload destination.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 20 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
       * @param {ServiceUploadDocument} body Upload document operation input details.
       * @return {Promise<CreateServiceDocumentUploadDestination>}
       */
    createServiceDocumentUploadDestination(body: ServiceUploadDocument): Promise<CreateServiceDocumentUploadDestination>;
    /**
       * Gets appointment slots as per the service context specified.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 20 | 40 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} asin ASIN associated with the service.
       * @param {String} storeId Store identifier defining the region scope to retrive appointment slots.
       * @param {[String]} marketplaceIds An identifier for the marketplace for which appointment slots are queried
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.startTime] A time from which the appointment slots will be retrieved. The specified time must be in ISO 8601 format. If &#x60;startTime&#x60; is provided, &#x60;endTime&#x60; should also be provided. Default value is as per business configuration.
       * @param {String} [opts.endTime] A time up to which the appointment slots will be retrieved. The specified time must be in ISO 8601 format. If &#x60;endTime&#x60; is provided, &#x60;startTime&#x60; should also be provided. Default value is as per business configuration. Maximum range of appointment slots can be 90 days.
       * @return {Promise<GetAppointmentSlotsResponse>}
       */
    getAppointmentSlotsWithHttpInfo(asin: string, storeId: string, marketplaceIds: [string], opts?: {
        startTime?: string;
        endTime?: string;
    }): Promise<GetAppointmentSlotsResponse>;
    /**
       * Gets appointment slots as per the service context specified.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 20 | 40 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} asin ASIN associated with the service.
       * @param {String} storeId Store identifier defining the region scope to retrive appointment slots.
       * @param {[String]} marketplaceIds An identifier for the marketplace for which appointment slots are queried
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.startTime] A time from which the appointment slots will be retrieved. The specified time must be in ISO 8601 format. If &#x60;startTime&#x60; is provided, &#x60;endTime&#x60; should also be provided. Default value is as per business configuration.
       * @param {String} [opts.endTime] A time up to which the appointment slots will be retrieved. The specified time must be in ISO 8601 format. If &#x60;endTime&#x60; is provided, &#x60;startTime&#x60; should also be provided. Default value is as per business configuration. Maximum range of appointment slots can be 90 days.
       * @return {Promise<GetAppointmentSlotsResponse>}
       */
    getAppointmentSlots(asin: string, storeId: string, marketplaceIds: [string], opts?: {
        startTime?: string;
        endTime?: string;
    }): Promise<GetAppointmentSlotsResponse>;
    /**
       * Gets appointment slots for the service associated with the service job id specified.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 20 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} serviceJobId A service job identifier to retrive appointment slots for associated service.
       * @param {[String]} marketplaceIds An identifier for the marketplace in which the resource operates.
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.startTime] A time from which the appointment slots will be retrieved. The specified time must be in ISO 8601 format. If &#x60;startTime&#x60; is provided, &#x60;endTime&#x60; should also be provided. Default value is as per business configuration.
       * @param {String} [opts.endTime] A time up to which the appointment slots will be retrieved. The specified time must be in ISO 8601 format. If &#x60;endTime&#x60; is provided, &#x60;startTime&#x60; should also be provided. Default value is as per business configuration. Maximum range of appointment slots can be 90 days.
       * @return {Promise<GetAppointmentSlotsResponse>}
       */
    getAppointmmentSlotsByJobIdWithHttpInfo(serviceJobId: string, marketplaceIds: [string], opts?: {
        startTime?: string;
        endTime?: string;
    }): Promise<GetAppointmentSlotsResponse>;
    /**
       * Gets appointment slots for the service associated with the service job id specified.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 20 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} serviceJobId A service job identifier to retrive appointment slots for associated service.
       * @param {[String]} marketplaceIds An identifier for the marketplace in which the resource operates.
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.startTime] A time from which the appointment slots will be retrieved. The specified time must be in ISO 8601 format. If &#x60;startTime&#x60; is provided, &#x60;endTime&#x60; should also be provided. Default value is as per business configuration.
       * @param {String} [opts.endTime] A time up to which the appointment slots will be retrieved. The specified time must be in ISO 8601 format. If &#x60;endTime&#x60; is provided, &#x60;startTime&#x60; should also be provided. Default value is as per business configuration. Maximum range of appointment slots can be 90 days.
       * @return {Promise<GetAppointmentSlotsResponse>}
       */
    getAppointmmentSlotsByJobId(serviceJobId: string, marketplaceIds: [string], opts?: {
        startTime?: string;
        endTime?: string;
    }): Promise<GetAppointmentSlotsResponse>;
    /**
       * Provides capacity in fixed-size slots.   **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 20 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} resourceId Resource Identifier.
       * @param {[String]} marketplaceIds An identifier for the marketplace in which the resource operates.
       * @param {FixedSlotCapacityQuery} body Request body.
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.nextPageToken] Next page token returned in the response of your previous request.
       * @return {Promise<FixedSlotCapacity>}
       */
    getFixedSlotCapacityWithHttpInfo(resourceId: string, marketplaceIds: [string], body: FixedSlotCapacityQuery, opts?: {
        nextPageToken?: string;
    }): Promise<FixedSlotCapacity>;
    /**
       * Provides capacity in fixed-size slots.   **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 20 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} resourceId Resource Identifier.
       * @param {[String]} marketplaceIds An identifier for the marketplace in which the resource operates.
       * @param {FixedSlotCapacityQuery} body Request body.
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.nextPageToken] Next page token returned in the response of your previous request.
       * @return {Promise<FixedSlotCapacity>}
       */
    getFixedSlotCapacity(resourceId: string, marketplaceIds: [string], body: FixedSlotCapacityQuery, opts?: {
        nextPageToken?: string;
    }): Promise<FixedSlotCapacity>;
    /**
       * Provides capacity slots in a format similar to availability records.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 20 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} resourceId Resource Identifier.
       * @param {[String]} marketplaceIds An identifier for the marketplace in which the resource operates.
       * @param {RangeSlotCapacityQuery} body Request body.
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.nextPageToken] Next page token returned in the response of your previous request.
       * @return {Promise<RangeSlotCapacity>}
       */
    getRangeSlotCapacityWithHttpInfo(resourceId: string, marketplaceIds: [string], body: RangeSlotCapacityQuery, opts?: {
        nextPageToken?: string;
    }): Promise<RangeSlotCapacity>;
    /**
       * Provides capacity slots in a format similar to availability records.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 20 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} resourceId Resource Identifier.
       * @param {[String]} marketplaceIds An identifier for the marketplace in which the resource operates.
       * @param {RangeSlotCapacityQuery} body Request body.
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.nextPageToken] Next page token returned in the response of your previous request.
       * @return {Promise<RangeSlotCapacity>}
       */
    getRangeSlotCapacity(resourceId: string, marketplaceIds: [string], body: RangeSlotCapacityQuery, opts?: {
        nextPageToken?: string;
    }): Promise<RangeSlotCapacity>;
    /**
       * Gets details of service job indicated by the provided &#x60;serviceJobID&#x60;.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 20 | 40 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} serviceJobId A service job identifier.
       * @return {Promise<GetServiceJobByServiceJobIdResponse>}
       */
    getServiceJobByServiceJobIdWithHttpInfo(serviceJobId: string): Promise<GetServiceJobByServiceJobIdResponse>;
    /**
       * Gets details of service job indicated by the provided &#x60;serviceJobID&#x60;.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 20 | 40 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} serviceJobId A service job identifier.
       * @return {Promise<GetServiceJobByServiceJobIdResponse>}
       */
    getServiceJobByServiceJobId(serviceJobId: string): Promise<GetServiceJobByServiceJobIdResponse>;
    /**
       * Gets service job details for the specified filter query.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 40 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
       * @param {[String]} marketplaceIds Used to select jobs that were placed in the specified marketplaces.
       * @param {Object} [opts] Optional parameters
       * @param {[String]} [opts.serviceOrderIds] List of service order ids for the query you want to perform.Max values supported 20.
       * @param {[String]} [opts.serviceJobStatus] A list of one or more job status by which to filter the list of jobs.
       * @param {String} [opts.pageToken] String returned in the response of your previous request.
       * @param {Number} [opts.pageSize] A non-negative integer that indicates the maximum number of jobs to return in the list, Value must be 1 - 20. Default 20. (default to 20)
       * @param {String} [opts.sortField] Sort fields on which you want to sort the output.
       * @param {String} [opts.sortOrder] Sort order for the query you want to perform.
       * @param {String} [opts.createdAfter] A date used for selecting jobs created at or after a specified time. Must be in ISO 8601 format. Required if &#x60;LastUpdatedAfter&#x60; is not specified. Specifying both &#x60;CreatedAfter&#x60; and &#x60;LastUpdatedAfter&#x60; returns an error.
       * @param {String} [opts.createdBefore] A date used for selecting jobs created at or before a specified time. Must be in ISO 8601 format.
       * @param {String} [opts.lastUpdatedAfter] A date used for selecting jobs updated at or after a specified time. Must be in ISO 8601 format. Required if &#x60;createdAfter&#x60; is not specified. Specifying both &#x60;CreatedAfter&#x60; and &#x60;LastUpdatedAfter&#x60; returns an error.
       * @param {String} [opts.lastUpdatedBefore] A date used for selecting jobs updated at or before a specified time. Must be in ISO 8601 format.
       * @param {String} [opts.scheduleStartDate] A date used for filtering jobs schedules at or after a specified time. Must be in ISO 8601 format. Schedule end date should not be earlier than schedule start date.
       * @param {String} [opts.scheduleEndDate] A date used for filtering jobs schedules at or before a specified time. Must be in ISO 8601 format. Schedule end date should not be earlier than schedule start date.
       * @param {[String]} [opts.asins] List of Amazon Standard Identification Numbers (ASIN) of the items. Max values supported is 20.
       * @param {[String]} [opts.requiredSkills] A defined set of related knowledge, skills, experience, tools, materials, and work processes common to service delivery for a set of products and/or service scenarios. Max values supported is 20.
       * @param {[String]} [opts.storeIds] List of Amazon-defined identifiers for the region scope. Max values supported is 50.
       * @return {Promise<GetServiceJobsResponse>}
       */
    getServiceJobsWithHttpInfo(marketplaceIds: [string], opts?: {
        serviceOrderIds?: [string];
        serviceJobStatus?: [string];
        pageToken?: string;
        pageSize?: number;
        sortField?: string;
        sortOrder?: string;
        createdAfter?: string;
        createdBefore?: string;
        lastUpdatedAfter?: string;
        lastUpdatedBefore?: string;
        scheduleStartDate?: string;
        scheduleEndDate?: string;
        asins?: [string];
        requiredSkills?: [string];
        storeIds?: [string];
    }): Promise<GetServiceJobsResponse>;
    /**
       * Gets service job details for the specified filter query.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 40 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
       * @param {[String]} marketplaceIds Used to select jobs that were placed in the specified marketplaces.
       * @param {Object} [opts] Optional parameters
       * @param {[String]} [opts.serviceOrderIds] List of service order ids for the query you want to perform.Max values supported 20.
       * @param {[String]} [opts.serviceJobStatus] A list of one or more job status by which to filter the list of jobs.
       * @param {String} [opts.pageToken] String returned in the response of your previous request.
       * @param {Number} [opts.pageSize] A non-negative integer that indicates the maximum number of jobs to return in the list, Value must be 1 - 20. Default 20. (default to 20)
       * @param {String} [opts.sortField] Sort fields on which you want to sort the output.
       * @param {String} [opts.sortOrder] Sort order for the query you want to perform.
       * @param {String} [opts.createdAfter] A date used for selecting jobs created at or after a specified time. Must be in ISO 8601 format. Required if &#x60;LastUpdatedAfter&#x60; is not specified. Specifying both &#x60;CreatedAfter&#x60; and &#x60;LastUpdatedAfter&#x60; returns an error.
       * @param {String} [opts.createdBefore] A date used for selecting jobs created at or before a specified time. Must be in ISO 8601 format.
       * @param {String} [opts.lastUpdatedAfter] A date used for selecting jobs updated at or after a specified time. Must be in ISO 8601 format. Required if &#x60;createdAfter&#x60; is not specified. Specifying both &#x60;CreatedAfter&#x60; and &#x60;LastUpdatedAfter&#x60; returns an error.
       * @param {String} [opts.lastUpdatedBefore] A date used for selecting jobs updated at or before a specified time. Must be in ISO 8601 format.
       * @param {String} [opts.scheduleStartDate] A date used for filtering jobs schedules at or after a specified time. Must be in ISO 8601 format. Schedule end date should not be earlier than schedule start date.
       * @param {String} [opts.scheduleEndDate] A date used for filtering jobs schedules at or before a specified time. Must be in ISO 8601 format. Schedule end date should not be earlier than schedule start date.
       * @param {[String]} [opts.asins] List of Amazon Standard Identification Numbers (ASIN) of the items. Max values supported is 20.
       * @param {[String]} [opts.requiredSkills] A defined set of related knowledge, skills, experience, tools, materials, and work processes common to service delivery for a set of products and/or service scenarios. Max values supported is 20.
       * @param {[String]} [opts.storeIds] List of Amazon-defined identifiers for the region scope. Max values supported is 50.
       * @return {Promise<GetServiceJobsResponse>}
       */
    getServiceJobs(marketplaceIds: [string], opts?: {
        serviceOrderIds?: [string];
        serviceJobStatus?: [string];
        pageToken?: string;
        pageSize?: number;
        sortField?: string;
        sortOrder?: string;
        createdAfter?: string;
        createdBefore?: string;
        lastUpdatedAfter?: string;
        lastUpdatedBefore?: string;
        scheduleStartDate?: string;
        scheduleEndDate?: string;
        asins?: [string];
        requiredSkills?: [string];
        storeIds?: [string];
    }): Promise<GetServiceJobsResponse>;
    /**
       * Reschedules an appointment for the service job indicated by the service job identifier specified.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 20 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} serviceJobId An Amazon defined service job identifier.
       * @param {String} appointmentId An existing appointment identifier for the Service Job.
       * @param {RescheduleAppointmentRequest} body Reschedule appointment operation input details.
       * @return {Promise<SetAppointmentResponse>}
       */
    rescheduleAppointmentForServiceJobByServiceJobIdWithHttpInfo(serviceJobId: string, appointmentId: string, body: RescheduleAppointmentRequest): Promise<SetAppointmentResponse>;
    /**
       * Reschedules an appointment for the service job indicated by the service job identifier specified.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 20 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} serviceJobId An Amazon defined service job identifier.
       * @param {String} appointmentId An existing appointment identifier for the Service Job.
       * @param {RescheduleAppointmentRequest} body Reschedule appointment operation input details.
       * @return {Promise<SetAppointmentResponse>}
       */
    rescheduleAppointmentForServiceJobByServiceJobId(serviceJobId: string, appointmentId: string, body: RescheduleAppointmentRequest): Promise<SetAppointmentResponse>;
    /**
       * Updates the appointment fulfillment data related to a given &#x60;jobID&#x60; and &#x60;appointmentID&#x60;.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 20 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} serviceJobId An Amazon-defined service job identifier. Get this value by calling the &#x60;getServiceJobs&#x60; operation of the Services API.
       * @param {String} appointmentId An Amazon-defined identifier of active service job appointment.
       * @param {SetAppointmentFulfillmentDataRequest} body Appointment fulfillment data collection details.
       * @return {Promise<String>}
       */
    setAppointmentFulfillmentDataWithHttpInfo(serviceJobId: string, appointmentId: string, body: SetAppointmentFulfillmentDataRequest): Promise<string>;
    /**
       * Updates the appointment fulfillment data related to a given &#x60;jobID&#x60; and &#x60;appointmentID&#x60;.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 20 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} serviceJobId An Amazon-defined service job identifier. Get this value by calling the &#x60;getServiceJobs&#x60; operation of the Services API.
       * @param {String} appointmentId An Amazon-defined identifier of active service job appointment.
       * @param {SetAppointmentFulfillmentDataRequest} body Appointment fulfillment data collection details.
       * @return {Promise<String>}
       */
    setAppointmentFulfillmentData(serviceJobId: string, appointmentId: string, body: SetAppointmentFulfillmentDataRequest): Promise<string>;
    /**
       * Update a reservation.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 20 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} reservationId Reservation Identifier
       * @param {[String]} marketplaceIds An identifier for the marketplace in which the resource operates.
       * @param {UpdateReservationRequest} body Reservation details
       * @return {Promise<UpdateReservationResponse>}
       */
    updateReservationWithHttpInfo(reservationId: string, marketplaceIds: [string], body: UpdateReservationRequest): Promise<UpdateReservationResponse>;
    /**
       * Update a reservation.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 20 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} reservationId Reservation Identifier
       * @param {[String]} marketplaceIds An identifier for the marketplace in which the resource operates.
       * @param {UpdateReservationRequest} body Reservation details
       * @return {Promise<UpdateReservationResponse>}
       */
    updateReservation(reservationId: string, marketplaceIds: [string], body: UpdateReservationRequest): Promise<UpdateReservationResponse>;
    /**
       * Update the schedule of the given resource.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 20 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} resourceId Resource (store) Identifier
       * @param {[String]} marketplaceIds An identifier for the marketplace in which the resource operates.
       * @param {UpdateScheduleRequest} body Schedule details
       * @return {Promise<UpdateScheduleResponse>}
       */
    updateScheduleWithHttpInfo(resourceId: string, marketplaceIds: [string], body: UpdateScheduleRequest): Promise<UpdateScheduleResponse>;
    /**
       * Update the schedule of the given resource.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 20 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} resourceId Resource (store) Identifier
       * @param {[String]} marketplaceIds An identifier for the marketplace in which the resource operates.
       * @param {UpdateScheduleRequest} body Schedule details
       * @return {Promise<UpdateScheduleResponse>}
       */
    updateSchedule(resourceId: string, marketplaceIds: [string], body: UpdateScheduleRequest): Promise<UpdateScheduleResponse>;
    #private;
}
import { AddAppointmentRequest } from '../model/AddAppointmentRequest.js';
import { SetAppointmentResponse } from '../model/SetAppointmentResponse.js';
import { AssignAppointmentResourcesRequest } from '../model/AssignAppointmentResourcesRequest.js';
import { AssignAppointmentResourcesResponse } from '../model/AssignAppointmentResourcesResponse.js';
import { CancelReservationResponse } from '../model/CancelReservationResponse.js';
import { CancelServiceJobByServiceJobIdResponse } from '../model/CancelServiceJobByServiceJobIdResponse.js';
import { CompleteServiceJobByServiceJobIdResponse } from '../model/CompleteServiceJobByServiceJobIdResponse.js';
import { CreateReservationRequest } from '../model/CreateReservationRequest.js';
import { CreateReservationResponse } from '../model/CreateReservationResponse.js';
import { ServiceUploadDocument } from '../model/ServiceUploadDocument.js';
import { CreateServiceDocumentUploadDestination } from '../model/CreateServiceDocumentUploadDestination.js';
import { GetAppointmentSlotsResponse } from '../model/GetAppointmentSlotsResponse.js';
import { FixedSlotCapacityQuery } from '../model/FixedSlotCapacityQuery.js';
import { FixedSlotCapacity } from '../model/FixedSlotCapacity.js';
import { RangeSlotCapacityQuery } from '../model/RangeSlotCapacityQuery.js';
import { RangeSlotCapacity } from '../model/RangeSlotCapacity.js';
import { GetServiceJobByServiceJobIdResponse } from '../model/GetServiceJobByServiceJobIdResponse.js';
import { GetServiceJobsResponse } from '../model/GetServiceJobsResponse.js';
import { RescheduleAppointmentRequest } from '../model/RescheduleAppointmentRequest.js';
import { SetAppointmentFulfillmentDataRequest } from '../model/SetAppointmentFulfillmentDataRequest.js';
import { UpdateReservationRequest } from '../model/UpdateReservationRequest.js';
import { UpdateReservationResponse } from '../model/UpdateReservationResponse.js';
import { UpdateScheduleRequest } from '../model/UpdateScheduleRequest.js';
import { UpdateScheduleResponse } from '../model/UpdateScheduleResponse.js';
import { ApiClient } from '../ApiClient.js';
//# sourceMappingURL=ServiceApi.d.ts.map