/**
 * The GetDeliveryOffersResult model module.
 * @module fulfillmentoutbound_v2020_07_01/model/GetDeliveryOffersResult
 * @version 2020-07-01
 */
export class GetDeliveryOffersResult {
    /**
     * Constructs a <code>GetDeliveryOffersResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetDeliveryOffersResult} obj Optional instance to populate.
     * @return {GetDeliveryOffersResult} The populated <code>GetDeliveryOffersResult</code> instance.
     */
    static constructFromObject(data: any, obj: GetDeliveryOffersResult): GetDeliveryOffersResult;
    /**
     * An array of delivery offer information.
     * @member {[DeliveryOffer]} deliveryOffers
     * @type {[DeliveryOffer]}
     */
    deliveryOffers: [DeliveryOffer];
}
import { DeliveryOffer } from './DeliveryOffer.js';
//# sourceMappingURL=GetDeliveryOffersResult.d.ts.map