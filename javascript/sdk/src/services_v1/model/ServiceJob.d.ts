/**
 * The ServiceJob model module.
 * @module services_v1/model/ServiceJob
 * @version v1
 */
export class ServiceJob {
    /**
     * Constructs a <code>ServiceJob</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ServiceJob} obj Optional instance to populate.
     * @return {ServiceJob} The populated <code>ServiceJob</code> instance.
     */
    static constructFromObject(data: any, obj: ServiceJob): ServiceJob;
    /**
     * The date and time of the creation of the job in ISO 8601 format.
     * @member {Date} createTime
     * @type {Date}
     */
    createTime: Date;
    /**
     * Amazon identifier for the service job.
     * @member {String} serviceJobId
     * @type {String}
     */
    serviceJobId: string;
    /**
     * The status of the service job.
     * @member {String} serviceJobStatus
     * @type {String}
     */
    serviceJobStatus: string;
    /**
     * @member {ScopeOfWork} scopeOfWork
     * @type {ScopeOfWork}
     */
    scopeOfWork: ScopeOfWork;
    /**
     * @member {Seller} seller
     * @type {Seller}
     */
    seller: Seller;
    /**
     * @member {ServiceJobProvider} serviceJobProvider
     * @type {ServiceJobProvider}
     */
    serviceJobProvider: ServiceJobProvider;
    /**
     * A list of appointment windows preferred by the buyer. Included only if the buyer selected appointment windows when creating the order.
     * @member {Array[]} preferredAppointmentTimes
     * @type {Array[]}
     */
    preferredAppointmentTimes: any[][];
    /**
     * A list of appointments.
     * @member {Array[]} appointments
     * @type {Array[]}
     */
    appointments: any[][];
    /**
     * The Amazon-defined identifier for an order placed by the buyer, in 3-7-7 format.
     * @member {String} serviceOrderId
     * @type {String}
     */
    serviceOrderId: string;
    /**
     * The marketplace identifier.
     * @member {String} marketplaceId
     * @type {String}
     */
    marketplaceId: string;
    /**
     * The Amazon-defined identifier for the region scope.
     * @member {String} storeId
     * @type {String}
     */
    storeId: string;
    /**
     * @member {Buyer} buyer
     * @type {Buyer}
     */
    buyer: Buyer;
    /**
     * A list of items associated with the service job.
     * @member {Array[]} associatedItems
     * @type {Array[]}
     */
    associatedItems: any[][];
    /**
     * @member {ServiceLocation} serviceLocation
     * @type {ServiceLocation}
     */
    serviceLocation: ServiceLocation;
}
export namespace ServiceJob {
    namespace ServiceJobStatusEnum {
        let NOT_SERVICED: string;
        let CANCELLED: string;
        let COMPLETED: string;
        let PENDING_SCHEDULE: string;
        let NOT_FULFILLABLE: string;
        let HOLD: string;
        let PAYMENT_DECLINED: string;
    }
    /**
     * *
     */
    type ServiceJobStatusEnum = string;
}
import { ScopeOfWork } from './ScopeOfWork.js';
import { Seller } from './Seller.js';
import { ServiceJobProvider } from './ServiceJobProvider.js';
import { Buyer } from './Buyer.js';
import { ServiceLocation } from './ServiceLocation.js';
//# sourceMappingURL=ServiceJob.d.ts.map