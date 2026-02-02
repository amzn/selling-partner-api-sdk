/**
 * The CustomerAddress model module.
 * @module orders_v2026_01_01/model/CustomerAddress
 * @version 2026-01-01
 */
export class CustomerAddress {
    /**
     * Constructs a <code>CustomerAddress</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {CustomerAddress} obj Optional instance to populate.
     * @return {CustomerAddress} The populated <code>CustomerAddress</code> instance.
     */
    static constructFromObject(data: any, obj: CustomerAddress): CustomerAddress;
    /**
     * The full name of the person who will receive the delivery at this address.
     * @member {String} name
     * @type {String}
     */
    name: string;
    /**
     * The name of the business or organization at this address.
     * @member {String} companyName
     * @type {String}
     */
    companyName: string;
    /**
     * The primary street address.
     * @member {String} addressLine1
     * @type {String}
     */
    addressLine1: string;
    /**
     * Additional address information.
     * @member {String} addressLine2
     * @type {String}
     */
    addressLine2: string;
    /**
     * Additional address information.
     * @member {String} addressLine3
     * @type {String}
     */
    addressLine3: string;
    /**
     * The city of the address.
     * @member {String} city
     * @type {String}
     */
    city: string;
    /**
     * The district or county of the address.
     * @member {String} districtOrCounty
     * @type {String}
     */
    districtOrCounty: string;
    /**
     * The state, province, or region of the address.
     * @member {String} stateOrRegion
     * @type {String}
     */
    stateOrRegion: string;
    /**
     * The municipality of the address.
     * @member {String} municipality
     * @type {String}
     */
    municipality: string;
    /**
     * The postal code, ZIP code, or equivalent mailing code of the address.
     * @member {String} postalCode
     * @type {String}
     */
    postalCode: string;
    /**
     * The two-letter country code identifying the country of the address, in ISO 3166-1 format.
     * @member {String} countryCode
     * @type {String}
     */
    countryCode: string;
    /**
     * The contact phone number for delivery coordination and customer communication.  **Note**: The buyer phone number will be suppressed in some cases, including but not limited to:  - All FBA (Fulfillment by Amazon) orders. - Shipped FBM (Fulfilled by the merchant) orders when current date is past the latest delivery date.
     * @member {String} phone
     * @type {String}
     */
    phone: string;
    /**
     * @member {AddressExtendedFields} extendedFields
     * @type {AddressExtendedFields}
     */
    extendedFields: AddressExtendedFields;
    /**
     * The type of location.  **Possible values**: `RESIDENTIAL`, `COMMERCIAL`, `PICKUP_POINT`
     * @member {String} addressType
     * @type {String}
     */
    addressType: string;
}
import { AddressExtendedFields } from './AddressExtendedFields.js';
//# sourceMappingURL=CustomerAddress.d.ts.map