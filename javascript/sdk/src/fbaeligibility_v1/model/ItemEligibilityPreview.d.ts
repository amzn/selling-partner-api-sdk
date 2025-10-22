/**
 * The ItemEligibilityPreview model module.
 * @module fbaeligibility_v1/model/ItemEligibilityPreview
 * @version v1
 */
export class ItemEligibilityPreview {
    /**
     * Constructs a <code>ItemEligibilityPreview</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ItemEligibilityPreview} obj Optional instance to populate.
     * @return {ItemEligibilityPreview} The populated <code>ItemEligibilityPreview</code> instance.
     */
    static constructFromObject(data: any, obj: ItemEligibilityPreview): ItemEligibilityPreview;
    /**
     * Constructs a new <code>ItemEligibilityPreview</code>.
     * The response object which contains the ASIN, marketplaceId if required, eligibility program, the eligibility status (boolean), and a list of ineligibility reason codes.
     * @alias module:fbaeligibility_v1/model/ItemEligibilityPreview
     * @class
     * @param asin {String} The ASIN for which eligibility was determined.
     * @param program {String} The program for which eligibility was determined.
     * @param isEligibleForProgram {Boolean} Indicates if the item is eligible for the program.
     */
    constructor(asin: string, program: string, isEligibleForProgram: boolean);
    asin: string;
    program: string;
    isEligibleForProgram: boolean;
    /**
     * The marketplace for which eligibility was determined.
     * @member {String} marketplaceId
     * @type {String}
     */
    marketplaceId: string;
    /**
     * Potential Ineligibility Reason Codes.
     * @member {[String]} ineligibilityReasonList
     * @type {[String]}
     */
    ineligibilityReasonList: [string];
}
export namespace ItemEligibilityPreview {
    namespace ProgramEnum {
        let INBOUND: string;
        let COMMINGLING: string;
    }
    /**
     * *
     */
    type ProgramEnum = string;
    namespace IneligibilityReasonListEnum {
        let FBA_INB_0004: string;
        let FBA_INB_0006: string;
        let FBA_INB_0007: string;
        let FBA_INB_0008: string;
        let FBA_INB_0009: string;
        let FBA_INB_0010: string;
        let FBA_INB_0011: string;
        let FBA_INB_0012: string;
        let FBA_INB_0013: string;
        let FBA_INB_0014: string;
        let FBA_INB_0015: string;
        let FBA_INB_0016: string;
        let FBA_INB_0017: string;
        let FBA_INB_0018: string;
        let FBA_INB_0019: string;
        let FBA_INB_0034: string;
        let FBA_INB_0035: string;
        let FBA_INB_0036: string;
        let FBA_INB_0037: string;
        let FBA_INB_0038: string;
        let FBA_INB_0050: string;
        let FBA_INB_0051: string;
        let FBA_INB_0053: string;
        let FBA_INB_0055: string;
        let FBA_INB_0056: string;
        let FBA_INB_0059: string;
        let FBA_INB_0065: string;
        let FBA_INB_0066: string;
        let FBA_INB_0067: string;
        let FBA_INB_0068: string;
        let FBA_INB_0095: string;
        let FBA_INB_0097: string;
        let FBA_INB_0098: string;
        let FBA_INB_0099: string;
        let FBA_INB_0100: string;
        let FBA_INB_0103: string;
        let FBA_INB_0104: string;
        let FBA_INB_0197: string;
        let FBA_INB_0342: string;
        let UNKNOWN_INB_ERROR_CODE: string;
    }
    /**
     * *
     */
    type IneligibilityReasonListEnum = string;
}
//# sourceMappingURL=ItemEligibilityPreview.d.ts.map