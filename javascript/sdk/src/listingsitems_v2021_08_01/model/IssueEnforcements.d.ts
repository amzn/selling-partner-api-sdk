/**
 * The IssueEnforcements model module.
 * @module listingsitems_v2021_08_01/model/IssueEnforcements
 * @version 2021-08-01
 */
export class IssueEnforcements {
    /**
     * Constructs a <code>IssueEnforcements</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {IssueEnforcements} obj Optional instance to populate.
     * @return {IssueEnforcements} The populated <code>IssueEnforcements</code> instance.
     */
    static constructFromObject(data: any, obj: IssueEnforcements): IssueEnforcements;
    /**
     * Constructs a new <code>IssueEnforcements</code>.
     * This field provides information about the enforcement actions taken by Amazon that affect the publishing or status of a listing. It also includes details about any associated exemptions.
     * @alias module:listingsitems_v2021_08_01/model/IssueEnforcements
     * @class
     * @param actions {[IssueEnforcementAction]} List of enforcement actions taken by Amazon that affect the publishing or status of a listing.
     * @param exemption {IssueExemption}
     */
    constructor(actions: [IssueEnforcementAction], exemption: IssueExemption);
    actions: [IssueEnforcementAction];
    exemption: IssueExemption;
}
import { IssueEnforcementAction } from './IssueEnforcementAction.js';
import { IssueExemption } from './IssueExemption.js';
//# sourceMappingURL=IssueEnforcements.d.ts.map