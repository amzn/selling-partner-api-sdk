/**
 * The ProcessingDirective model module.
 * @module notifications_v1/model/ProcessingDirective
 * @version v1
 */
export class ProcessingDirective {
    /**
     * Constructs a <code>ProcessingDirective</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ProcessingDirective} obj Optional instance to populate.
     * @return {ProcessingDirective} The populated <code>ProcessingDirective</code> instance.
     */
    static constructFromObject(data: any, obj: ProcessingDirective): ProcessingDirective;
    /**
     * @member {EventFilter} eventFilter
     * @type {EventFilter}
     */
    eventFilter: EventFilter;
}
import { EventFilter } from './EventFilter.js';
//# sourceMappingURL=ProcessingDirective.d.ts.map