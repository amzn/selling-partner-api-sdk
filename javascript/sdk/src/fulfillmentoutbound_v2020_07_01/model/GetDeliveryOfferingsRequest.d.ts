/**
 * The GetDeliveryOfferingsRequest model module.
 * @module fulfillmentoutbound_v2020_07_01/model/GetDeliveryOfferingsRequest
 * @version 2020-07-01
 */
export class GetDeliveryOfferingsRequest {
    /**
     * Constructs a <code>GetDeliveryOfferingsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetDeliveryOfferingsRequest} obj Optional instance to populate.
     * @return {GetDeliveryOfferingsRequest} The populated <code>GetDeliveryOfferingsRequest</code> instance.
     */
    static constructFromObject(data: any, obj: GetDeliveryOfferingsRequest): GetDeliveryOfferingsRequest;
    /**
     * Constructs a new <code>GetDeliveryOfferingsRequest</code>.
     * The request body schema for the &#x60;getDeliveryOfferings&#x60; operation.
     * @alias module:fulfillmentoutbound_v2020_07_01/model/GetDeliveryOfferingsRequest
     * @class
     * @param destinationAddress {VariablePrecisionAddress}
     * @param shipFromCountryCode {String} The two digit country code the items should ship from. In ISO 3166-1 alpha-2 format.
     * @param sellerSku {String} The seller SKU of the item.
     */
    constructor(destinationAddress: VariablePrecisionAddress, shipFromCountryCode: string, sellerSku: string);
    destinationAddress: VariablePrecisionAddress;
    shipFromCountryCode: string;
    sellerSku: string;
    /**
     * @member {DeliveryQuantity} quantity
     * @type {DeliveryQuantity}
     */
    quantity: DeliveryQuantity;
}
import { VariablePrecisionAddress } from './VariablePrecisionAddress.js';
import { DeliveryQuantity } from './DeliveryQuantity.js';
//# sourceMappingURL=GetDeliveryOfferingsRequest.d.ts.map