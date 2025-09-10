/**
 * The AddressWithContact model module.
 * @module supplysources_v2020_07_01/model/AddressWithContact
 * @version 2020-07-01
 */
export class AddressWithContact {
    /**
     * Constructs a <code>AddressWithContact</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {AddressWithContact} obj Optional instance to populate.
     * @return {AddressWithContact} The populated <code>AddressWithContact</code> instance.
     */
    static constructFromObject(data: any, obj: AddressWithContact): AddressWithContact;
    /**
     * @member {ContactDetails} contactDetails
     * @type {ContactDetails}
     */
    contactDetails: ContactDetails;
    /**
     * @member {Address} address
     * @type {Address}
     */
    address: Address;
}
import { ContactDetails } from './ContactDetails.js';
import { Address } from './Address.js';
//# sourceMappingURL=AddressWithContact.d.ts.map