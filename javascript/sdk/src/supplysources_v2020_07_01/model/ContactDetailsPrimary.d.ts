/**
 * The ContactDetailsPrimary model module.
 * @module supplysources_v2020_07_01/model/ContactDetailsPrimary
 * @version 2020-07-01
 */
export class ContactDetailsPrimary {
    /**
     * Constructs a <code>ContactDetailsPrimary</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ContactDetailsPrimary} obj Optional instance to populate.
     * @return {ContactDetailsPrimary} The populated <code>ContactDetailsPrimary</code> instance.
     */
    static constructFromObject(data: any, obj: ContactDetailsPrimary): ContactDetailsPrimary;
    /**
     * The email address to which email messages are delivered.
     * @member {String} email
     * @type {String}
     */
    email: string;
    /**
     * The phone number of the person, business or institution.
     * @member {String} phone
     * @type {String}
     */
    phone: string;
}
//# sourceMappingURL=ContactDetailsPrimary.d.ts.map