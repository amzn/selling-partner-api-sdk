/**
 * The Restriction model module.
 * @module listingsrestrictions_v2021_08_01/model/Restriction
 * @version 2021-08-01
 */
export class Restriction {
    /**
     * Constructs a <code>Restriction</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Restriction} obj Optional instance to populate.
     * @return {Restriction} The populated <code>Restriction</code> instance.
     */
    static constructFromObject(data: any, obj: Restriction): Restriction;
    /**
     * Constructs a new <code>Restriction</code>.
     * A listing restriction, optionally qualified by a condition, with a list of reasons for the restriction.
     * @alias module:listingsrestrictions_v2021_08_01/model/Restriction
     * @class
     * @param marketplaceId {String} A marketplace identifier. Identifies the Amazon marketplace where the restriction is enforced.
     */
    constructor(marketplaceId: string);
    marketplaceId: string;
    /**
     * The condition that applies to the restriction.
     * @member {String} conditionType
     * @type {String}
     */
    conditionType: string;
    /**
     * A list of reasons for the restriction.
     * @member {[Reason]} reasons
     * @type {[Reason]}
     */
    reasons: [Reason];
}
export namespace Restriction {
    namespace ConditionTypeEnum {
        let new_new: string;
        let new_open_box: string;
        let new_oem: string;
        let refurbished_refurbished: string;
        let used_like_new: string;
        let used_very_good: string;
        let used_good: string;
        let used_acceptable: string;
        let collectible_like_new: string;
        let collectible_very_good: string;
        let collectible_good: string;
        let collectible_acceptable: string;
        let club_club: string;
    }
    /**
     * *
     */
    type ConditionTypeEnum = string;
}
import { Reason } from './Reason.js';
//# sourceMappingURL=Restriction.d.ts.map