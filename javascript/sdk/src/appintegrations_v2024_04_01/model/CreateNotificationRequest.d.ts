/**
 * The CreateNotificationRequest model module.
 * @module appintegrations_v2024_04_01/model/CreateNotificationRequest
 * @version 2024-04-01
 */
export class CreateNotificationRequest {
    /**
     * Constructs a <code>CreateNotificationRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {CreateNotificationRequest} obj Optional instance to populate.
     * @return {CreateNotificationRequest} The populated <code>CreateNotificationRequest</code> instance.
     */
    static constructFromObject(data: any, obj: CreateNotificationRequest): CreateNotificationRequest;
    /**
     * Constructs a new <code>CreateNotificationRequest</code>.
     * The request for the &#x60;createNotification&#x60; operation.
     * @alias module:appintegrations_v2024_04_01/model/CreateNotificationRequest
     * @class
     * @param templateId {String} The unique identifier of the notification template you used to onboard your application.
     * @param notificationParameters {{String: Object}} The dynamic parameters required by the notification templated specified by `templateId`.
     */
    constructor(templateId: string, notificationParameters: {
        String: any;
    });
    templateId: string;
    notificationParameters: {
        String: any;
    };
    /**
     * An encrypted marketplace identifier for the posted notification.
     * @member {String} marketplaceId
     * @type {String}
     */
    marketplaceId: string;
}
//# sourceMappingURL=CreateNotificationRequest.d.ts.map