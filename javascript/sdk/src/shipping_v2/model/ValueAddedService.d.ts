/**
 * The ValueAddedService model module.
 * @module shipping_v2/model/ValueAddedService
 * @version v2
 */
export class ValueAddedService {
    /**
     * Constructs a <code>ValueAddedService</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ValueAddedService} obj Optional instance to populate.
     * @return {ValueAddedService} The populated <code>ValueAddedService</code> instance.
     */
    static constructFromObject(data: any, obj: ValueAddedService): ValueAddedService;
    /**
     * Constructs a new <code>ValueAddedService</code>.
     * A value-added service available for purchase with a shipment service offering.
     * @alias module:shipping_v2/model/ValueAddedService
     * @class
     * @param id {String} The identifier for the value-added service.
     * @param name {String} The name of the value-added service.
     * @param cost {Currency}
     */
    constructor(id: string, name: string, cost: Currency);
    id: string;
    name: string;
    cost: Currency;
}
import { Currency } from './Currency.js';
//# sourceMappingURL=ValueAddedService.d.ts.map