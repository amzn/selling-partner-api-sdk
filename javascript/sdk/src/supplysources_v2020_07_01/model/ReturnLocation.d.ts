/**
 * The ReturnLocation model module.
 * @module supplysources_v2020_07_01/model/ReturnLocation
 * @version 2020-07-01
 */
export class ReturnLocation {
    /**
     * Constructs a <code>ReturnLocation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ReturnLocation} obj Optional instance to populate.
     * @return {ReturnLocation} The populated <code>ReturnLocation</code> instance.
     */
    static constructFromObject(data: any, obj: ReturnLocation): ReturnLocation;
    /**
     * The Amazon provided `supplySourceId` where orders can be returned to.
     * @member {String} supplySourceId
     * @type {String}
     */
    supplySourceId: string;
    /**
     * @member {AddressWithContact} addressWithContact
     * @type {AddressWithContact}
     */
    addressWithContact: AddressWithContact;
}
import { AddressWithContact } from './AddressWithContact.js';
//# sourceMappingURL=ReturnLocation.d.ts.map