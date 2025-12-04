/**
 * The SelectedDeliveryWindow model module.
 * @module fulfillmentinbound_v2024_03_20/model/SelectedDeliveryWindow
 * @version 2024-03-20
 */
export class SelectedDeliveryWindow {
    /**
     * Constructs a <code>SelectedDeliveryWindow</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {SelectedDeliveryWindow} obj Optional instance to populate.
     * @return {SelectedDeliveryWindow} The populated <code>SelectedDeliveryWindow</code> instance.
     */
    static constructFromObject(data: any, obj: SelectedDeliveryWindow): SelectedDeliveryWindow;
    /**
     * Constructs a new <code>SelectedDeliveryWindow</code>.
     * Selected delivery window attributes.
     * @alias module:fulfillmentinbound_v2024_03_20/model/SelectedDeliveryWindow
     * @class
     * @param availabilityType {String} The type of delivery window availability. Values: `AVAILABLE`, `BLOCKED`, `CONGESTED`, `DISCOUNTED`
     * @param deliveryWindowOptionId {String} Identifier of a delivery window option. A delivery window option represent one option for when a shipment is expected to be delivered.
     * @param endDate {Date} The end timestamp of the window.
     * @param startDate {Date} The start timestamp of the window.
     */
    constructor(availabilityType: string, deliveryWindowOptionId: string, endDate: Date, startDate: Date);
    availabilityType: string;
    deliveryWindowOptionId: string;
    endDate: Date;
    startDate: Date;
    /**
     * The timestamp at which this Window can no longer be edited.
     * @member {Date} editableUntil
     * @type {Date}
     */
    editableUntil: Date;
}
//# sourceMappingURL=SelectedDeliveryWindow.d.ts.map