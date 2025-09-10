/**
 * The OperationalConfiguration model module.
 * @module supplysources_v2020_07_01/model/OperationalConfiguration
 * @version 2020-07-01
 */
export class OperationalConfiguration {
    /**
     * Constructs a <code>OperationalConfiguration</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {OperationalConfiguration} obj Optional instance to populate.
     * @return {OperationalConfiguration} The populated <code>OperationalConfiguration</code> instance.
     */
    static constructFromObject(data: any, obj: OperationalConfiguration): OperationalConfiguration;
    /**
     * @member {ContactDetails} contactDetails
     * @type {ContactDetails}
     */
    contactDetails: ContactDetails;
    /**
     * @member {ThroughputConfig} throughputConfig
     * @type {ThroughputConfig}
     */
    throughputConfig: ThroughputConfig;
    /**
     * @member {OperatingHoursByDay} operatingHoursByDay
     * @type {OperatingHoursByDay}
     */
    operatingHoursByDay: OperatingHoursByDay;
    /**
     * @member {Duration} handlingTime
     * @type {Duration}
     */
    handlingTime: Duration;
}
import { ContactDetails } from './ContactDetails.js';
import { ThroughputConfig } from './ThroughputConfig.js';
import { OperatingHoursByDay } from './OperatingHoursByDay.js';
import { Duration } from './Duration.js';
//# sourceMappingURL=OperationalConfiguration.d.ts.map