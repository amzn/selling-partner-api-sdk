/**
 * Selling Partner API for Orders
 * Use the Orders Selling Partner API to programmatically retrieve order information. With this API, you can develop fast, flexible, and custom applications to manage order synchronization, perform order research, and create demand-based decision support tools.   _Note:_ For the JP, AU, and SG marketplaces, the Orders API supports orders from 2016 onward. For all other marketplaces, the Orders API supports orders for the last two years (orders older than this don't show up in the response).
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient.js';
import {AddressExtendedFields} from './AddressExtendedFields.js';

/**
 * The Address model module.
 * @module orders_v0/model/Address
 * @version v0
 */
export class Address {
  /**
   * Constructs a new <code>Address</code>.
   * The shipping address for the order.
   * @alias module:orders_v0/model/Address
   * @class
   * @param name {String} The name.
   */
  constructor(name) {
    this.name = name;
  }

  /**
   * Constructs a <code>Address</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:orders_v0/model/Address} obj Optional instance to populate.
   * @return {module:orders_v0/model/Address} The populated <code>Address</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      switch(typeof data) {
        case 'string':
          obj = String(data);
          break;
        case 'number':
          obj = Number(data);
          break;
        case 'boolean':
          obj = Boolean(data);
          break;
      }
      obj = obj || new Address();
      if (data.hasOwnProperty('Name'))
        obj.name = ApiClient.convertToType(data['Name'], 'String');
      if (data.hasOwnProperty('CompanyName'))
        obj.companyName = ApiClient.convertToType(data['CompanyName'], 'String');
      if (data.hasOwnProperty('AddressLine1'))
        obj.addressLine1 = ApiClient.convertToType(data['AddressLine1'], 'String');
      if (data.hasOwnProperty('AddressLine2'))
        obj.addressLine2 = ApiClient.convertToType(data['AddressLine2'], 'String');
      if (data.hasOwnProperty('AddressLine3'))
        obj.addressLine3 = ApiClient.convertToType(data['AddressLine3'], 'String');
      if (data.hasOwnProperty('City'))
        obj.city = ApiClient.convertToType(data['City'], 'String');
      if (data.hasOwnProperty('County'))
        obj.county = ApiClient.convertToType(data['County'], 'String');
      if (data.hasOwnProperty('District'))
        obj.district = ApiClient.convertToType(data['District'], 'String');
      if (data.hasOwnProperty('StateOrRegion'))
        obj.stateOrRegion = ApiClient.convertToType(data['StateOrRegion'], 'String');
      if (data.hasOwnProperty('Municipality'))
        obj.municipality = ApiClient.convertToType(data['Municipality'], 'String');
      if (data.hasOwnProperty('PostalCode'))
        obj.postalCode = ApiClient.convertToType(data['PostalCode'], 'String');
      if (data.hasOwnProperty('CountryCode'))
        obj.countryCode = ApiClient.convertToType(data['CountryCode'], 'String');
      if (data.hasOwnProperty('Phone'))
        obj.phone = ApiClient.convertToType(data['Phone'], 'String');
      if (data.hasOwnProperty('ExtendedFields'))
        obj.extendedFields = AddressExtendedFields.constructFromObject(data['ExtendedFields']);
      if (data.hasOwnProperty('AddressType'))
        obj.addressType = ApiClient.convertToType(data['AddressType'], 'String');
    }
    return obj;
  }
}

/**
 * The name.
 * @member {String} name
 */
Address.prototype.name = undefined;

/**
 * The company name of the recipient.  **Note**: This attribute is only available for shipping address.
 * @member {String} companyName
 */
Address.prototype.companyName = undefined;

/**
 * The street address.
 * @member {String} addressLine1
 */
Address.prototype.addressLine1 = undefined;

/**
 * Additional street address information, if required.
 * @member {String} addressLine2
 */
Address.prototype.addressLine2 = undefined;

/**
 * Additional street address information, if required.
 * @member {String} addressLine3
 */
Address.prototype.addressLine3 = undefined;

/**
 * The city.
 * @member {String} city
 */
Address.prototype.city = undefined;

/**
 * The county.
 * @member {String} county
 */
Address.prototype.county = undefined;

/**
 * The district.
 * @member {String} district
 */
Address.prototype.district = undefined;

/**
 * The state or region.
 * @member {String} stateOrRegion
 */
Address.prototype.stateOrRegion = undefined;

/**
 * The municipality.
 * @member {String} municipality
 */
Address.prototype.municipality = undefined;

/**
 * The postal code.
 * @member {String} postalCode
 */
Address.prototype.postalCode = undefined;

/**
 * The country code. A two-character country code, in ISO 3166-1 alpha-2 format.
 * @member {String} countryCode
 */
Address.prototype.countryCode = undefined;

/**
 * The phone number of the buyer.  **Note**:  1. This attribute is only available for shipping address. 2. In some cases, the buyer phone number is suppressed:  a. Phone is suppressed for all `AFN` (fulfilled by Amazon) orders. b. Phone is suppressed for the shipped `MFN` (fulfilled by seller) order when the current date is past the Latest Delivery Date.
 * @member {String} phone
 */
Address.prototype.phone = undefined;

/**
 * @member {module:orders_v0/model/AddressExtendedFields} extendedFields
 */
Address.prototype.extendedFields = undefined;

/**
 * Allowed values for the <code>AddressType</code> property.
 * @enum {String}
 * @readonly
 */
Address['AddressTypeEnum'] = {

    /**
     * value: "Residential"
     * @const
     */
    "Residential": "Residential",

    /**
     * value: "Commercial"
     * @const
     */
    "Commercial": "Commercial"
};

/**
 * The address type of the shipping address.
 * @member {module:orders_v0/model/Address.AddressTypeEnum} addressType
 */
Address.prototype.addressType = undefined;


