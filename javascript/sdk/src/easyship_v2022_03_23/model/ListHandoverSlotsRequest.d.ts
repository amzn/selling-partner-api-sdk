/**
 * The ListHandoverSlotsRequest model module.
 * @module easyship_v2022_03_23/model/ListHandoverSlotsRequest
 * @version 2022-03-23
 */
export class ListHandoverSlotsRequest {
    /**
     * Constructs a <code>ListHandoverSlotsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ListHandoverSlotsRequest} obj Optional instance to populate.
     * @return {ListHandoverSlotsRequest} The populated <code>ListHandoverSlotsRequest</code> instance.
     */
    static constructFromObject(data: any, obj: ListHandoverSlotsRequest): ListHandoverSlotsRequest;
    /**
     * Constructs a new <code>ListHandoverSlotsRequest</code>.
     * The request schema for the &#x60;listHandoverSlots&#x60; operation.
     * @alias module:easyship_v2022_03_23/model/ListHandoverSlotsRequest
     * @class
     * @param marketplaceId {String} A string of up to 255 characters.
     * @param amazonOrderId {String} An Amazon-defined order identifier. Identifies the order that the seller wants to deliver using Amazon Easy Ship.
     * @param packageDimensions {Dimensions}
     * @param packageWeight {Weight}
     */
    constructor(marketplaceId: string, amazonOrderId: string, packageDimensions: Dimensions, packageWeight: Weight);
    marketplaceId: string;
    amazonOrderId: string;
    packageDimensions: Dimensions;
    packageWeight: Weight;
}
import { Dimensions } from './Dimensions.js';
import { Weight } from './Weight.js';
//# sourceMappingURL=ListHandoverSlotsRequest.d.ts.map