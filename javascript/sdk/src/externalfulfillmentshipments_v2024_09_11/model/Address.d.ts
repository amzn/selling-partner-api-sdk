/**
 * The Address model module.
 * @module externalfulfillmentshipments_v2024_09_11/model/Address
 * @version 2024-09-11
 */
export class Address {
    /**
     * Constructs a <code>Address</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Address} obj Optional instance to populate.
     * @return {Address} The populated <code>Address</code> instance.
     */
    static constructFromObject(data: any, obj: Address): Address;
    /**
     * Constructs a new <code>Address</code>.
     * The address.
     * @alias module:externalfulfillmentshipments_v2024_09_11/model/Address
     * @class
     * @param postalCode {String} The postal code of the address. It contains a series of letters or digits or both, sometimes including spaces or punctuation.
     */
    constructor(postalCode: string);
    postalCode: string;
    /**
     * The name of the person, business or institution at that address.
     * @member {String} name
     * @type {String}
     */
    name: string;
    /**
     * The first line of the address.
     * @member {String} addressLine1
     * @type {String}
     */
    addressLine1: string;
    /**
     * Additional address information, if required.
     * @member {String} addressLine2
     * @type {String}
     */
    addressLine2: string;
    /**
     * Additional address information, if required.
     * @member {String} addressLine3
     * @type {String}
     */
    addressLine3: string;
    /**
     * The district or state where the person, business, or institution is located.
     * @member {String} district
     * @type {String}
     */
    district: string;
    /**
     * The municiplaity where the person, business, or institution is located.
     * @member {String} municipality
     * @type {String}
     */
    municipality: string;
    /**
     * The state or region where the person, business, or institution is located.
     * @member {String} state
     * @type {String}
     */
    state: string;
    /**
     * The city where the person, business, or institution is located.
     * @member {String} city
     * @type {String}
     */
    city: string;
    /**
     * The two digit country code. In ISO 3166-1 alpha-2 format.
     * @member {String} countryCode
     * @type {String}
     */
    countryCode: string;
    /**
     * The email address of the contact associated with the address.
     * @member {String} email
     * @type {String}
     */
    email: string;
    /**
     * The email cc addresses of the contact associated with the address.
     * @member {Array[]} copyEmails
     * @type {Array[]}
     */
    copyEmails: any[][];
    /**
     * The phone number of the person, business, or institution located at the address.
     * @member {String} phoneNumber
     * @type {String}
     */
    phoneNumber: string;
    /**
     * The type of address.
     * @member {String} addressType
     * @type {String}
     */
    addressType: string;
}
//# sourceMappingURL=Address.d.ts.map