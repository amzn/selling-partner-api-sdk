/**
 * The PayeeContactInformation model module.
 * @module sellerWallet_2024_03_01/model/PayeeContactInformation
 * @version 2024-03-01
 */
export class PayeeContactInformation {
    /**
     * Constructs a <code>PayeeContactInformation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {PayeeContactInformation} obj Optional instance to populate.
     * @return {PayeeContactInformation} The populated <code>PayeeContactInformation</code> instance.
     */
    static constructFromObject(data: any, obj: PayeeContactInformation): PayeeContactInformation;
    /**
     * Constructs a new <code>PayeeContactInformation</code>.
     * The contact information of the payee. This field is required when the request &#x60;bankAccountOwnershipType&#x60; is &#x60;THIRD_PARTY&#x60;. The contact information is used for payee verification and registration purposes.
     * @alias module:sellerWallet_2024_03_01/model/PayeeContactInformation
     * @class
     * @param payeeFirstName {String} First name of the payee. There is a 50 character limit.
     * @param payeeLastName {String} Last name of the payee. There is a 50 character limit.
     * @param addressLine1 {String} Address Line 1 of the public address
     * @param city {String} City name of the public address
     * @param state {String} State name of the public address. This is the state or region for China-based addresses.
     * @param postalCode {String} Postal code of the public address
     * @param countryCode {String} The two digit country code, in ISO 3166 format.
     * @param emailAddress {String} Email address of the payee.
     * @param phoneNumber {String} Valid phone number of the payee.
     * @param payeeEntityType {PayeeEntityType}
     */
    constructor(payeeFirstName: string, payeeLastName: string, addressLine1: string, city: string, state: string, postalCode: string, countryCode: string, emailAddress: string, phoneNumber: string, payeeEntityType: PayeeEntityType);
    payeeFirstName: string;
    payeeLastName: string;
    addressLine1: string;
    city: string;
    state: string;
    postalCode: string;
    countryCode: string;
    emailAddress: string;
    phoneNumber: string;
    payeeEntityType: PayeeEntityType;
    /**
     * Middle name of the payee. There is a 50 character limit.
     * @member {String} payeeMiddleName
     * @type {String}
     */
    payeeMiddleName: string;
    /**
     * Address Line 2 of the public address
     * @member {String} addressLine2
     * @type {String}
     */
    addressLine2: string;
    /**
     * Country name of the public address
     * @member {String} country
     * @type {String}
     */
    country: string;
}
import { PayeeEntityType } from './PayeeEntityType.js';
//# sourceMappingURL=PayeeContactInformation.d.ts.map