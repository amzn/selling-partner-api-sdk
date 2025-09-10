/**
 * The ServiceLocation model module.
 * @module services_v1/model/ServiceLocation
 * @version v1
 */
export class ServiceLocation {
    /**
     * Constructs a <code>ServiceLocation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ServiceLocation} obj Optional instance to populate.
     * @return {ServiceLocation} The populated <code>ServiceLocation</code> instance.
     */
    static constructFromObject(data: any, obj: ServiceLocation): ServiceLocation;
    /**
     * The location of the service job.
     * @member {String} serviceLocationType
     * @type {String}
     */
    serviceLocationType: string;
    /**
     * @member {Address} address
     * @type {Address}
     */
    address: Address;
}
export namespace ServiceLocation {
    namespace ServiceLocationTypeEnum {
        let IN_HOME: string;
        let IN_STORE: string;
        let ONLINE: string;
    }
    /**
     * *
     */
    type ServiceLocationTypeEnum = string;
}
import { Address } from './Address.js';
//# sourceMappingURL=ServiceLocation.d.ts.map