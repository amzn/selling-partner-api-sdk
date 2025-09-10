/**
 * The DeliveryMessage model module.
 * @module fulfillmentoutbound_v2020_07_01/model/DeliveryMessage
 * @version 2020-07-01
 */
export class DeliveryMessage {
    /**
     * Constructs a <code>DeliveryMessage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {DeliveryMessage} obj Optional instance to populate.
     * @return {DeliveryMessage} The populated <code>DeliveryMessage</code> instance.
     */
    static constructFromObject(data: any, obj: DeliveryMessage): DeliveryMessage;
    /**
     * The message content for a delivery offering.
     * @member {String} text
     * @type {String}
     */
    text: string;
    /**
     * The locale for the message (e.g., `en_US`).
     * @member {String} locale
     * @type {String}
     */
    locale: string;
}
//# sourceMappingURL=DeliveryMessage.d.ts.map