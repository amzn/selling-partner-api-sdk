/**
 * The Issue model module.
 * @module listingsitems_v2021_08_01/model/Issue
 * @version 2021-08-01
 */
export class Issue {
    /**
     * Constructs a <code>Issue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Issue} obj Optional instance to populate.
     * @return {Issue} The populated <code>Issue</code> instance.
     */
    static constructFromObject(data: any, obj: Issue): Issue;
    /**
     * Constructs a new <code>Issue</code>.
     * An issue with a listings item.
     * @alias module:listingsitems_v2021_08_01/model/Issue
     * @class
     * @param code {String} An issue code that identifies the type of issue.
     * @param message {String} A message that describes the issue.
     * @param severity {String} The severity of the issue.
     * @param categories {[String]} List of issue categories.   Possible values:   * 'INVALID_ATTRIBUTE' - Indicating an invalid attribute in the listing.   * 'MISSING_ATTRIBUTE' - Highlighting a missing attribute in the listing.   * 'INVALID_IMAGE' - Signifying an invalid image in the listing.   * 'MISSING_IMAGE' - Noting the absence of an image in the listing.   * 'INVALID_PRICE' - Pertaining to issues with the listing's price-related attributes.   * 'MISSING_PRICE' - Pointing out the absence of a price attribute in the listing.   * 'DUPLICATE' - Identifying listings with potential duplicate problems, such as this ASIN potentially being a duplicate of another ASIN.   * 'QUALIFICATION_REQUIRED' - Indicating that the listing requires qualification-related approval.
     */
    constructor(code: string, message: string, severity: string, categories: [string]);
    code: string;
    message: string;
    severity: string;
    categories: string[];
    /**
     * The names of the attributes associated with the issue, if applicable.
     * @member {String[]} attributeNames
     * @type {String[]}
     */
    attributeNames: string[];
    /**
     * @member {IssueEnforcements} enforcements
     * @type {IssueEnforcements}
     */
    enforcements: IssueEnforcements;
}
export namespace Issue {
    namespace SeverityEnum {
        let ERROR: string;
        let WARNING: string;
        let INFO: string;
    }
    /**
     * *
     */
    type SeverityEnum = string;
}
import { IssueEnforcements } from './IssueEnforcements.js';
//# sourceMappingURL=Issue.d.ts.map