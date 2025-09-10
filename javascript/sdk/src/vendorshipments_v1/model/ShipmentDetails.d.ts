/**
 * The ShipmentDetails model module.
 * @module vendorshipments_v1/model/ShipmentDetails
 * @version v1
 */
export class ShipmentDetails {
    /**
     * Constructs a <code>ShipmentDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ShipmentDetails} obj Optional instance to populate.
     * @return {ShipmentDetails} The populated <code>ShipmentDetails</code> instance.
     */
    static constructFromObject(data: any, obj: ShipmentDetails): ShipmentDetails;
    /**
     * @member {Pagination} pagination
     * @type {Pagination}
     */
    pagination: Pagination;
    /**
     * A list of one or more shipments with underlying details.
     * @member {[Shipment]} shipments
     * @type {[Shipment]}
     */
    shipments: [Shipment];
}
import { Pagination } from './Pagination.js';
import { Shipment } from './Shipment.js';
//# sourceMappingURL=ShipmentDetails.d.ts.map