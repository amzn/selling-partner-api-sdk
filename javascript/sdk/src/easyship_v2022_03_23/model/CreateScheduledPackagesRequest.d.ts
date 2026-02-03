/**
 * The CreateScheduledPackagesRequest model module.
 * @module easyship_v2022_03_23/model/CreateScheduledPackagesRequest
 * @version 2022-03-23
 */
export class CreateScheduledPackagesRequest {
    /**
     * Constructs a <code>CreateScheduledPackagesRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {CreateScheduledPackagesRequest} obj Optional instance to populate.
     * @return {CreateScheduledPackagesRequest} The populated <code>CreateScheduledPackagesRequest</code> instance.
     */
    static constructFromObject(data: any, obj: CreateScheduledPackagesRequest): CreateScheduledPackagesRequest;
    /**
     * Constructs a new <code>CreateScheduledPackagesRequest</code>.
     * The request body for the POST /easyShip/2022-03-23/packages/bulk API.
     * @alias module:easyship_v2022_03_23/model/CreateScheduledPackagesRequest
     * @class
     * @param marketplaceId {String} A string of up to 255 characters.
     * @param orderScheduleDetailsList {Array[]} An array allowing users to specify orders to be scheduled.
     * @param labelFormat {LabelFormat}
     */
    constructor(marketplaceId: string, orderScheduleDetailsList: any[][], labelFormat: LabelFormat);
    marketplaceId: string;
    orderScheduleDetailsList: any[][];
    labelFormat: LabelFormat;
}
import { LabelFormat } from './LabelFormat.js';
//# sourceMappingURL=CreateScheduledPackagesRequest.d.ts.map