/**
 * The ShipLabelsResponse model module.
 * @module externalfulfillmentshipments_v2024_09_11/model/ShipLabelsResponse
 * @version 2024-09-11
 */
export class ShipLabelsResponse {
    /**
     * Constructs a <code>ShipLabelsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ShipLabelsResponse} obj Optional instance to populate.
     * @return {ShipLabelsResponse} The populated <code>ShipLabelsResponse</code> instance.
     */
    static constructFromObject(data: any, obj: ShipLabelsResponse): ShipLabelsResponse;
    /**
     * Constructs a new <code>ShipLabelsResponse</code>.
     * The response to the &#x60;generateShipLabels&#x60; operation.
     * @alias module:externalfulfillmentshipments_v2024_09_11/model/ShipLabelsResponse
     * @class
     * @param packageShipLabelList {[PackageShipLabel]} A list of label documents for each package specified in the request. In case of partial failures when generating labels, the `isErrored` and `errorDetails` attributes detail the cause of failure.
     */
    constructor(packageShipLabelList: [PackageShipLabel]);
    packageShipLabelList: [PackageShipLabel];
}
import { PackageShipLabel } from './PackageShipLabel.js';
//# sourceMappingURL=ShipLabelsResponse.d.ts.map