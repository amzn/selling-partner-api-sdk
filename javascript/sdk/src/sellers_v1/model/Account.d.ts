/**
 * The Account model module.
 * @module sellers_v1/model/Account
 * @version v1
 */
export class Account {
    /**
     * Constructs a <code>Account</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Account} obj Optional instance to populate.
     * @return {Account} The populated <code>Account</code> instance.
     */
    static constructFromObject(data: any, obj: Account): Account;
    /**
     * Constructs a new <code>Account</code>.
     * The response schema for the &#x60;getAccount&#x60; operation.
     * @alias module:sellers_v1/model/Account
     * @class
     * @param marketplaceParticipationList {[MarketplaceParticipation]} List of marketplace participations.
     * @param businessType {String} The type of business registered for the seller account.
     * @param sellingPlan {String} The selling plan details.
     */
    constructor(marketplaceParticipationList: [MarketplaceParticipation], businessType: string, sellingPlan: string);
    marketplaceParticipationList: [MarketplaceParticipation];
    businessType: string;
    sellingPlan: string;
    /**
     * @member {Business} business
     * @type {Business}
     */
    business: Business;
    /**
     * @member {PrimaryContact} primaryContact
     * @type {PrimaryContact}
     */
    primaryContact: PrimaryContact;
}
export namespace Account {
    namespace BusinessTypeEnum {
        let CHARITY: string;
        let CRAFTSMAN: string;
        let NATURAL_PERSON_COMPANY: string;
        let PUBLIC_LISTED: string;
        let PRIVATE_LIMITED: string;
        let SOLE_PROPRIETORSHIP: string;
        let STATE_OWNED: string;
        let INDIVIDUAL: string;
    }
    /**
     * *
     */
    type BusinessTypeEnum = string;
    namespace SellingPlanEnum {
        export let PROFESSIONAL: string;
        let INDIVIDUAL_1: string;
        export { INDIVIDUAL_1 as INDIVIDUAL };
    }
    /**
     * *
     */
    type SellingPlanEnum = string;
}
import { MarketplaceParticipation } from './MarketplaceParticipation.js';
import { Business } from './Business.js';
import { PrimaryContact } from './PrimaryContact.js';
//# sourceMappingURL=Account.d.ts.map