/**
 * The DeliveryInformation model module.
 * @module fulfillmentoutbound_v2020_07_01/model/DeliveryInformation
 * @version 2020-07-01
 */
export class DeliveryInformation {
    /**
     * Constructs a <code>DeliveryInformation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {DeliveryInformation} obj Optional instance to populate.
     * @return {DeliveryInformation} The populated <code>DeliveryInformation</code> instance.
     */
    static constructFromObject(data: any, obj: DeliveryInformation): DeliveryInformation;
    /**
     * A list of delivery documents for a package.
     * @member {Array[]} deliveryDocumentList
     * @type {Array[]}
     */
    deliveryDocumentList: any[][];
    /**
     * @member {DropOffLocation} dropOffLocation
     * @type {DropOffLocation}
     */
    dropOffLocation: DropOffLocation;
}
import { DropOffLocation } from './DropOffLocation.js';
//# sourceMappingURL=DeliveryInformation.d.ts.map