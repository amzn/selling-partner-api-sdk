/**
 * The UpdateScheduleResponse model module.
 * @module services_v1/model/UpdateScheduleResponse
 * @version v1
 */
export class UpdateScheduleResponse {
    /**
     * Constructs a <code>UpdateScheduleResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {UpdateScheduleResponse} obj Optional instance to populate.
     * @return {UpdateScheduleResponse} The populated <code>UpdateScheduleResponse</code> instance.
     */
    static constructFromObject(data: any, obj: UpdateScheduleResponse): UpdateScheduleResponse;
    /**
     * Contains the `UpdateScheduleRecords` for which the error/warning has occurred.
     * @member {Array[]} payload
     * @type {Array[]}
     */
    payload: any[][];
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @member {Array[]} errors
     * @type {Array[]}
     */
    errors: any[][];
}
//# sourceMappingURL=UpdateScheduleResponse.d.ts.map