/**
 * The Reason model module.
 * @module listingsrestrictions_v2021_08_01/model/Reason
 * @version 2021-08-01
 */
export class Reason {
    /**
     * Constructs a <code>Reason</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Reason} obj Optional instance to populate.
     * @return {Reason} The populated <code>Reason</code> instance.
     */
    static constructFromObject(data: any, obj: Reason): Reason;
    /**
     * Constructs a new <code>Reason</code>.
     * A reason for the restriction, including path forward links that may allow Selling Partners to remove the restriction, if available.
     * @alias module:listingsrestrictions_v2021_08_01/model/Reason
     * @class
     * @param message {String} A message describing the reason for the restriction.
     */
    constructor(message: string);
    message: string;
    /**
     * A code indicating why the listing is restricted.
     * @member {String} reasonCode
     * @type {String}
     */
    reasonCode: string;
    /**
     * A list of path forward links that may allow Selling Partners to remove the restriction.
     * @member {Array[]} links
     * @type {Array[]}
     */
    links: any[][];
}
export namespace Reason {
    namespace ReasonCodeEnum {
        let APPROVAL_REQUIRED: string;
        let ASIN_NOT_FOUND: string;
        let NOT_ELIGIBLE: string;
    }
    /**
     * *
     */
    type ReasonCodeEnum = string;
}
//# sourceMappingURL=Reason.d.ts.map