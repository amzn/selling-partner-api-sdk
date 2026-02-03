/**
 * The VehiclesResponse model module.
 * @module vehicles_v2024_11_01/model/VehiclesResponse
 * @version 2024-11-01
 */
export class VehiclesResponse {
    /**
     * Constructs a <code>VehiclesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {VehiclesResponse} obj Optional instance to populate.
     * @return {VehiclesResponse} The populated <code>VehiclesResponse</code> instance.
     */
    static constructFromObject(data: any, obj: VehiclesResponse): VehiclesResponse;
    /**
     * Constructs a new <code>VehiclesResponse</code>.
     * Get paginated list of vehicle from Amazon&#39;s catalog
     * @alias module:vehicles_v2024_11_01/model/VehiclesResponse
     * @class
     * @param vehicles {Array[]} List of vehicles from Amazon's catalog.
     */
    constructor(vehicles: any[][]);
    vehicles: any[][];
    /**
     * @member {Pagination} pagination
     * @type {Pagination}
     */
    pagination: Pagination;
}
import { Pagination } from './Pagination.js';
//# sourceMappingURL=VehiclesResponse.d.ts.map