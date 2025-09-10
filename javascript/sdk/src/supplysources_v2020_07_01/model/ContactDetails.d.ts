/**
 * The ContactDetails model module.
 * @module supplysources_v2020_07_01/model/ContactDetails
 * @version 2020-07-01
 */
export class ContactDetails {
    /**
     * Constructs a <code>ContactDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ContactDetails} obj Optional instance to populate.
     * @return {ContactDetails} The populated <code>ContactDetails</code> instance.
     */
    static constructFromObject(data: any, obj: ContactDetails): ContactDetails;
    /**
     * @member {ContactDetailsPrimary} primary
     * @type {ContactDetailsPrimary}
     */
    primary: ContactDetailsPrimary;
}
import { ContactDetailsPrimary } from './ContactDetailsPrimary.js';
//# sourceMappingURL=ContactDetails.d.ts.map