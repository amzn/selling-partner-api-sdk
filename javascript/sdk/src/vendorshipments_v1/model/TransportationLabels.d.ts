/**
 * The TransportationLabels model module.
 * @module vendorshipments_v1/model/TransportationLabels
 * @version v1
 */
export class TransportationLabels {
    /**
     * Constructs a <code>TransportationLabels</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {TransportationLabels} obj Optional instance to populate.
     * @return {TransportationLabels} The populated <code>TransportationLabels</code> instance.
     */
    static constructFromObject(data: any, obj: TransportationLabels): TransportationLabels;
    /**
     * @member {Pagination} pagination
     * @type {Pagination}
     */
    pagination: Pagination;
    /**
     * A list of one or more ShipmentLabels.
     * @member {[TransportLabel]} transportLabels
     * @type {[TransportLabel]}
     */
    transportLabels: [TransportLabel];
}
import { Pagination } from './Pagination.js';
import { TransportLabel } from './TransportLabel.js';
//# sourceMappingURL=TransportationLabels.d.ts.map