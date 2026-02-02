/**
 * The ReplenishmentPreferences model module.
 * @module awd_v2024_05_09/model/ReplenishmentPreferences
 * @version 2024-05-09
 */
export class ReplenishmentPreferences {
    /**
     * Constructs a <code>ReplenishmentPreferences</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ReplenishmentPreferences} obj Optional instance to populate.
     * @return {ReplenishmentPreferences} The populated <code>ReplenishmentPreferences</code> instance.
     */
    static constructFromObject(data: any, obj: ReplenishmentPreferences): ReplenishmentPreferences;
    /**
     * @member {ConfirmationMode} confirmation
     * @type {ConfirmationMode}
     */
    confirmation: ConfirmationMode;
}
import { ConfirmationMode } from './ConfirmationMode.js';
//# sourceMappingURL=ReplenishmentPreferences.d.ts.map