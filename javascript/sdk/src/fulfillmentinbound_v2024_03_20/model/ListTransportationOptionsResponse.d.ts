/**
 * The ListTransportationOptionsResponse model module.
 * @module fulfillmentinbound_v2024_03_20/model/ListTransportationOptionsResponse
 * @version 2024-03-20
 */
export class ListTransportationOptionsResponse {
    /**
     * Constructs a <code>ListTransportationOptionsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ListTransportationOptionsResponse} obj Optional instance to populate.
     * @return {ListTransportationOptionsResponse} The populated <code>ListTransportationOptionsResponse</code> instance.
     */
    static constructFromObject(data: any, obj: ListTransportationOptionsResponse): ListTransportationOptionsResponse;
    /**
     * Constructs a new <code>ListTransportationOptionsResponse</code>.
     * The &#x60;listTransportationOptions&#x60; response.
     * @alias module:fulfillmentinbound_v2024_03_20/model/ListTransportationOptionsResponse
     * @class
     * @param transportationOptions {[TransportationOption]} Transportation options generated for the placement option.
     */
    constructor(transportationOptions: [TransportationOption]);
    transportationOptions: TransportationOption[];
    /**
     * @member {Pagination} pagination
     * @type {Pagination}
     */
    pagination: Pagination;
}
import { TransportationOption } from './TransportationOption.js';
import { Pagination } from './Pagination.js';
//# sourceMappingURL=ListTransportationOptionsResponse.d.ts.map