/**
 * The ReportScheduleList model module.
 * @module reports_v2021_06_30/model/ReportScheduleList
 * @version 2021-06-30
 */
export class ReportScheduleList {
    /**
     * Constructs a <code>ReportScheduleList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ReportScheduleList} obj Optional instance to populate.
     * @return {ReportScheduleList} The populated <code>ReportScheduleList</code> instance.
     */
    static constructFromObject(data: any, obj: ReportScheduleList): ReportScheduleList;
    /**
     * Constructs a new <code>ReportScheduleList</code>.
     * A list of report schedules.
     * @alias module:reports_v2021_06_30/model/ReportScheduleList
     * @class
     * @param reportSchedules {ReportSchedule[]} Detailed information about a report schedule.
     */
    constructor(reportSchedules: ReportSchedule[]);
    reportSchedules: ReportSchedule[];
}
import { ReportSchedule } from './ReportSchedule.js';
//# sourceMappingURL=ReportScheduleList.d.ts.map