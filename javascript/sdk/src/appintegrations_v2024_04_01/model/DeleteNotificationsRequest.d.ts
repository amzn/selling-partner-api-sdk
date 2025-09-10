/**
 * The DeleteNotificationsRequest model module.
 * @module appintegrations_v2024_04_01/model/DeleteNotificationsRequest
 * @version 2024-04-01
 */
export class DeleteNotificationsRequest {
    /**
     * Constructs a <code>DeleteNotificationsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {DeleteNotificationsRequest} obj Optional instance to populate.
     * @return {DeleteNotificationsRequest} The populated <code>DeleteNotificationsRequest</code> instance.
     */
    static constructFromObject(data: any, obj: DeleteNotificationsRequest): DeleteNotificationsRequest;
    /**
     * Constructs a new <code>DeleteNotificationsRequest</code>.
     * The request for the &#x60;deleteNotifications&#x60; operation.
     * @alias module:appintegrations_v2024_04_01/model/DeleteNotificationsRequest
     * @class
     * @param templateId {String} The unique identifier of the notification template you used to onboard your application.
     * @param deletionReason {String} The unique identifier that maps each notification status to a reason code.
     */
    constructor(templateId: string, deletionReason: string);
    templateId: string;
    deletionReason: string;
}
export namespace DeleteNotificationsRequest {
    namespace DeletionReasonEnum {
        let INCORRECT_CONTENT: string;
        let INCORRECT_RECIPIENT: string;
    }
    /**
     * *
     */
    type DeletionReasonEnum = string;
}
//# sourceMappingURL=DeleteNotificationsRequest.d.ts.map