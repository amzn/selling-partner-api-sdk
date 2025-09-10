/**
 * The ValueAddedServiceDetails model module.
 * @module shipping_v2/model/ValueAddedServiceDetails
 * @version v2
 */
export class ValueAddedServiceDetails {
    /**
     * Constructs a <code>ValueAddedServiceDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ValueAddedServiceDetails} obj Optional instance to populate.
     * @return {ValueAddedServiceDetails} The populated <code>ValueAddedServiceDetails</code> instance.
     */
    static constructFromObject(data: any, obj: ValueAddedServiceDetails): ValueAddedServiceDetails;
    /**
     * @member {CollectOnDelivery} collectOnDelivery
     * @type {CollectOnDelivery}
     */
    collectOnDelivery: CollectOnDelivery;
}
import { CollectOnDelivery } from './CollectOnDelivery.js';
//# sourceMappingURL=ValueAddedServiceDetails.d.ts.map