/**
 * The OfferProgramConfiguration model module.
 * @module replenishment_v2022_11_07/model/OfferProgramConfiguration
 * @version 2022-11-07
 */
export class OfferProgramConfiguration {
    /**
     * Constructs a <code>OfferProgramConfiguration</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {OfferProgramConfiguration} obj Optional instance to populate.
     * @return {OfferProgramConfiguration} The populated <code>OfferProgramConfiguration</code> instance.
     */
    static constructFromObject(data: any, obj: OfferProgramConfiguration): OfferProgramConfiguration;
    /**
     * @member {OfferProgramConfigurationPreferences} preferences
     * @type {OfferProgramConfigurationPreferences}
     */
    preferences: OfferProgramConfigurationPreferences;
    /**
     * @member {OfferProgramConfigurationPromotions} promotions
     * @type {OfferProgramConfigurationPromotions}
     */
    promotions: OfferProgramConfigurationPromotions;
    /**
     * @member {EnrollmentMethod} enrollmentMethod
     * @type {EnrollmentMethod}
     */
    enrollmentMethod: EnrollmentMethod;
}
import { OfferProgramConfigurationPreferences } from './OfferProgramConfigurationPreferences.js';
import { OfferProgramConfigurationPromotions } from './OfferProgramConfigurationPromotions.js';
import { EnrollmentMethod } from './EnrollmentMethod.js';
//# sourceMappingURL=OfferProgramConfiguration.d.ts.map