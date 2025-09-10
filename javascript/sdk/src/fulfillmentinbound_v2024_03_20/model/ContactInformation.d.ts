/**
 * The ContactInformation model module.
 * @module fulfillmentinbound_v2024_03_20/model/ContactInformation
 * @version 2024-03-20
 */
export class ContactInformation {
    /**
     * Constructs a <code>ContactInformation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ContactInformation} obj Optional instance to populate.
     * @return {ContactInformation} The populated <code>ContactInformation</code> instance.
     */
    static constructFromObject(data: any, obj: ContactInformation): ContactInformation;
    /**
     * Constructs a new <code>ContactInformation</code>.
     * The seller&#39;s contact information.
     * @alias module:fulfillmentinbound_v2024_03_20/model/ContactInformation
     * @class
     * @param name {String} The contact's name.
     * @param phoneNumber {String} The phone number.
     */
    constructor(name: string, phoneNumber: string);
    name: string;
    phoneNumber: string;
    /**
     * The email address.
     * @member {String} email
     * @type {String}
     */
    email: string;
}
//# sourceMappingURL=ContactInformation.d.ts.map