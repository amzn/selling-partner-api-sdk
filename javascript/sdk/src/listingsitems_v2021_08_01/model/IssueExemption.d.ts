/**
 * The IssueExemption model module.
 * @module listingsitems_v2021_08_01/model/IssueExemption
 * @version 2021-08-01
 */
export class IssueExemption {
    /**
     * Constructs a <code>IssueExemption</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {IssueExemption} obj Optional instance to populate.
     * @return {IssueExemption} The populated <code>IssueExemption</code> instance.
     */
    static constructFromObject(data: any, obj: IssueExemption): IssueExemption;
    /**
     * Constructs a new <code>IssueExemption</code>.
     * Conveying the status of the listed enforcement actions and, if applicable, provides information about the exemption&#39;s expiry date.
     * @alias module:listingsitems_v2021_08_01/model/IssueExemption
     * @class
     * @param status {String} This field indicates the current exemption status for the listed enforcement actions. It can take values such as `EXEMPT`, signifying permanent exemption, `EXEMPT_UNTIL_EXPIRY_DATE` indicating temporary exemption until a specified date, or `NOT_EXEMPT` signifying no exemptions, and enforcement actions were already applied.
     */
    constructor(status: string);
    status: string;
    /**
     * Represents the timestamp, in ISO 8601 format, that specifies the date when the temporary exemptions expires, and Amazon begins enforcing the listed actions.
     * @member {Date} expiryDate
     * @type {Date}
     */
    expiryDate: Date;
}
export namespace IssueExemption {
    namespace StatusEnum {
        let EXEMPT: string;
        let EXEMPT_UNTIL_EXPIRY_DATE: string;
        let NOT_EXEMPT: string;
    }
    /**
     * *
     */
    type StatusEnum = string;
}
//# sourceMappingURL=IssueExemption.d.ts.map