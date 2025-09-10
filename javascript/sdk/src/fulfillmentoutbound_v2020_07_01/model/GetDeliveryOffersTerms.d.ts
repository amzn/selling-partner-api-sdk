/**
 * The GetDeliveryOffersTerms model module.
 * @module fulfillmentoutbound_v2020_07_01/model/GetDeliveryOffersTerms
 * @version 2020-07-01
 */
export class GetDeliveryOffersTerms {
    /**
     * Constructs a <code>GetDeliveryOffersTerms</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetDeliveryOffersTerms} obj Optional instance to populate.
     * @return {GetDeliveryOffersTerms} The populated <code>GetDeliveryOffersTerms</code> instance.
     */
    static constructFromObject(data: any, obj: GetDeliveryOffersTerms): GetDeliveryOffersTerms;
    /**
     * Constructs a new <code>GetDeliveryOffersTerms</code>.
     * The delivery terms for the delivery offer.
     * @alias module:fulfillmentoutbound_v2020_07_01/model/GetDeliveryOffersTerms
     * @class
     * @param origin {Origin}
     * @param destination {Destination}
     */
    constructor(origin: Origin, destination: Destination);
    origin: Origin;
    destination: Destination;
}
import { Origin } from './Origin.js';
import { Destination } from './Destination.js';
//# sourceMappingURL=GetDeliveryOffersTerms.d.ts.map