/**
 * The Stop model module.
 * @module vendorshipments_v1/model/Stop
 * @version v1
 */
export class Stop {
    /**
     * Constructs a <code>Stop</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Stop} obj Optional instance to populate.
     * @return {Stop} The populated <code>Stop</code> instance.
     */
    static constructFromObject(data: any, obj: Stop): Stop;
    /**
     * Constructs a new <code>Stop</code>.
     * Contractual or operational port or point relevant to the movement of the cargo.
     * @alias module:vendorshipments_v1/model/Stop
     * @class
     * @param functionCode {String} Provide the function code.
     */
    constructor(functionCode: string);
    functionCode: string;
    /**
     * @member {Location} locationIdentification
     * @type {Location}
     */
    locationIdentification: Location;
    /**
     * Date and time of the arrival of the cargo.
     * @member {Date} arrivalTime
     * @type {Date}
     */
    arrivalTime: Date;
    /**
     * Date and time of the departure of the cargo.
     * @member {Date} departureTime
     * @type {Date}
     */
    departureTime: Date;
}
export namespace Stop {
    namespace FunctionCodeEnum {
        let PortOfDischarge: string;
        let FreightPayableAt: string;
        let PortOfLoading: string;
    }
    /**
     * *
     */
    type FunctionCodeEnum = string;
}
import { Location } from './Location.js';
//# sourceMappingURL=Stop.d.ts.map