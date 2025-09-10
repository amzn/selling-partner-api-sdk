/**
 * The Route model module.
 * @module vendorshipments_v1/model/Route
 * @version v1
 */
export class Route {
    /**
     * Constructs a <code>Route</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Route} obj Optional instance to populate.
     * @return {Route} The populated <code>Route</code> instance.
     */
    static constructFromObject(data: any, obj: Route): Route;
    /**
     * Constructs a new <code>Route</code>.
     * This is used only for direct import shipment confirmations.
     * @alias module:vendorshipments_v1/model/Route
     * @class
     * @param stops {[Stop]} The port or location involved in transporting the cargo, as specified in transportation contracts or operational plans.
     */
    constructor(stops: [Stop]);
    stops: [Stop];
}
import { Stop } from './Stop.js';
//# sourceMappingURL=Route.d.ts.map