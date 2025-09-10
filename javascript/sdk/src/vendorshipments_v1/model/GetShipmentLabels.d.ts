/**
 * The GetShipmentLabels model module.
 * @module vendorshipments_v1/model/GetShipmentLabels
 * @version v1
 */
export class GetShipmentLabels {
    /**
     * Constructs a <code>GetShipmentLabels</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetShipmentLabels} obj Optional instance to populate.
     * @return {GetShipmentLabels} The populated <code>GetShipmentLabels</code> instance.
     */
    static constructFromObject(data: any, obj: GetShipmentLabels): GetShipmentLabels;
    /**
     * @member {TransportationLabels} payload
     * @type {TransportationLabels}
     */
    payload: TransportationLabels;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @member {[Error]} errors
     * @type {[Error]}
     */
    errors: [Error];
}
import { TransportationLabels } from './TransportationLabels.js';
import { Error } from './Error.js';
//# sourceMappingURL=GetShipmentLabels.d.ts.map