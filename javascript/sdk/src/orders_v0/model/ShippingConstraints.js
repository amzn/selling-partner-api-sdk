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
import {ConstraintType} from './ConstraintType.js';

/**
 * The ShippingConstraints model module.
 * @module orders_v0/model/ShippingConstraints
 * @version v0
 */
export class ShippingConstraints {
  /**
   * Constructs a new <code>ShippingConstraints</code>.
   * Delivery constraints applicable to this order.
   * @alias module:orders_v0/model/ShippingConstraints
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ShippingConstraints</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:orders_v0/model/ShippingConstraints} obj Optional instance to populate.
   * @return {module:orders_v0/model/ShippingConstraints} The populated <code>ShippingConstraints</code> instance.
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
      obj = obj || new ShippingConstraints();
      if (data.hasOwnProperty('PalletDelivery'))
        obj.palletDelivery = ConstraintType.constructFromObject(data['PalletDelivery']);
      if (data.hasOwnProperty('SignatureConfirmation'))
        obj.signatureConfirmation = ConstraintType.constructFromObject(data['SignatureConfirmation']);
      if (data.hasOwnProperty('RecipientIdentityVerification'))
        obj.recipientIdentityVerification = ConstraintType.constructFromObject(data['RecipientIdentityVerification']);
      if (data.hasOwnProperty('RecipientAgeVerification'))
        obj.recipientAgeVerification = ConstraintType.constructFromObject(data['RecipientAgeVerification']);
    }
    return obj;
  }
}

/**
 * @member {module:orders_v0/model/ConstraintType} palletDelivery
 */
ShippingConstraints.prototype.palletDelivery = undefined;

/**
 * @member {module:orders_v0/model/ConstraintType} signatureConfirmation
 */
ShippingConstraints.prototype.signatureConfirmation = undefined;

/**
 * @member {module:orders_v0/model/ConstraintType} recipientIdentityVerification
 */
ShippingConstraints.prototype.recipientIdentityVerification = undefined;

/**
 * @member {module:orders_v0/model/ConstraintType} recipientAgeVerification
 */
ShippingConstraints.prototype.recipientAgeVerification = undefined;


