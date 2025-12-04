/**
 * The GetDeliveryOfferingsResult model module.
 * @module fulfillmentoutbound_v2020_07_01/model/GetDeliveryOfferingsResult
 * @version 2020-07-01
 */
export class GetDeliveryOfferingsResult {
    /**
     * Constructs a <code>GetDeliveryOfferingsResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetDeliveryOfferingsResult} obj Optional instance to populate.
     * @return {GetDeliveryOfferingsResult} The populated <code>GetDeliveryOfferingsResult</code> instance.
     */
    static constructFromObject(data: any, obj: GetDeliveryOfferingsResult): GetDeliveryOfferingsResult;
    /**
     * An array of delivery offering information.
     * @member {[DeliveryOffering]} deliveryOfferings
     * @type {[DeliveryOffering]}
     */
    deliveryOfferings: [DeliveryOffering];
}
import { DeliveryOffering } from './DeliveryOffering.js';
//# sourceMappingURL=GetDeliveryOfferingsResult.d.ts.map