/**
 * The Poa model module.
 * @module services_v1/model/Poa
 * @version v1
 */
export class Poa {
    /**
     * Constructs a <code>Poa</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Poa} obj Optional instance to populate.
     * @return {Poa} The populated <code>Poa</code> instance.
     */
    static constructFromObject(data: any, obj: Poa): Poa;
    /**
     * @member {AppointmentTime} appointmentTime
     * @type {AppointmentTime}
     */
    appointmentTime: AppointmentTime;
    /**
     * A list of technicians.
     * @member {[Technician]} technicians
     * @type {[Technician]}
     */
    technicians: [Technician];
    /**
     * The identifier of the technician who uploaded the POA.
     * @member {String} uploadingTechnician
     * @type {String}
     */
    uploadingTechnician: string;
    /**
     * The date and time when the POA was uploaded in ISO 8601 format.
     * @member {Date} uploadTime
     * @type {Date}
     */
    uploadTime: Date;
    /**
     * The type of POA uploaded.
     * @member {String} poaType
     * @type {String}
     */
    poaType: string;
}
export namespace Poa {
    namespace PoaTypeEnum {
        let NO_SIGNATURE_DUMMY_POS: string;
        let CUSTOMER_SIGNATURE: string;
        let DUMMY_RECEIPT: string;
        let POA_RECEIPT: string;
    }
    /**
     * *
     */
    type PoaTypeEnum = string;
}
import { AppointmentTime } from './AppointmentTime.js';
import { Technician } from './Technician.js';
//# sourceMappingURL=Poa.d.ts.map