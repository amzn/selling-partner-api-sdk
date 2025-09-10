/**
 * The StatusUpdateDetails model module.
 * @module vendordfshipping_v2021_12_28/model/StatusUpdateDetails
 * @version 2021-12-28
 */
export class StatusUpdateDetails {
    /**
     * Constructs a <code>StatusUpdateDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {StatusUpdateDetails} obj Optional instance to populate.
     * @return {StatusUpdateDetails} The populated <code>StatusUpdateDetails</code> instance.
     */
    static constructFromObject(data: any, obj: StatusUpdateDetails): StatusUpdateDetails;
    /**
     * Constructs a new <code>StatusUpdateDetails</code>.
     * Details for the shipment status update given by the vendor for the specific package.
     * @alias module:vendordfshipping_v2021_12_28/model/StatusUpdateDetails
     * @class
     * @param trackingNumber {String} The shipment tracking number is required for every package and should match the `trackingNumber` sent for the shipment confirmation.
     * @param statusCode {String} Indicates the shipment status code of the package that provides transportation information for Amazon tracking systems and ultimately for the final customer. For more information, refer to the [Additional Fields Explanation](https://developer-docs.amazon.com/sp-api/docs/vendor-direct-fulfillment-shipping-api-use-case-guide#additional-fields-explanation).
     * @param reasonCode {String} Provides a reason code for the status of the package that will provide additional information about the transportation status. For more information, refer to the [Additional Fields Explanation](https://developer-docs.amazon.com/sp-api/docs/vendor-direct-fulfillment-shipping-api-use-case-guide#additional-fields-explanation).
     * @param statusDateTime {Date} The date and time when the shipment status was updated. Values are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format, with UTC time zone or UTC offset. For example, 2020-07-16T23:00:00Z or 2020-07-16T23:00:00+01:00.
     * @param statusLocationAddress {Address}
     */
    constructor(trackingNumber: string, statusCode: string, reasonCode: string, statusDateTime: Date, statusLocationAddress: Address);
    trackingNumber: string;
    statusCode: string;
    reasonCode: string;
    statusDateTime: Date;
    statusLocationAddress: Address;
    /**
     * @member {ShipmentSchedule} shipmentSchedule
     * @type {ShipmentSchedule}
     */
    shipmentSchedule: ShipmentSchedule;
}
import { Address } from './Address.js';
import { ShipmentSchedule } from './ShipmentSchedule.js';
//# sourceMappingURL=StatusUpdateDetails.d.ts.map