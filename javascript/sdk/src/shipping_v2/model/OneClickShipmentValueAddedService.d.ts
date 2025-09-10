/**
 * The OneClickShipmentValueAddedService model module.
 * @module shipping_v2/model/OneClickShipmentValueAddedService
 * @version v2
 */
export class OneClickShipmentValueAddedService {
    /**
     * Constructs a <code>OneClickShipmentValueAddedService</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {OneClickShipmentValueAddedService} obj Optional instance to populate.
     * @return {OneClickShipmentValueAddedService} The populated <code>OneClickShipmentValueAddedService</code> instance.
     */
    static constructFromObject(data: any, obj: OneClickShipmentValueAddedService): OneClickShipmentValueAddedService;
    /**
     * Constructs a new <code>OneClickShipmentValueAddedService</code>.
     * A value-added service to be applied to a shipping service purchase.
     * @alias module:shipping_v2/model/OneClickShipmentValueAddedService
     * @class
     * @param id {String} The identifier of the selected value-added service.
     */
    constructor(id: string);
    id: string;
    /**
     * @member {Currency} amount
     * @type {Currency}
     */
    amount: Currency;
}
import { Currency } from './Currency.js';
//# sourceMappingURL=OneClickShipmentValueAddedService.d.ts.map