/**
 * The RequestedValueAddedService model module.
 * @module shipping_v2/model/RequestedValueAddedService
 * @version v2
 */
export class RequestedValueAddedService {
    /**
     * Constructs a <code>RequestedValueAddedService</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {RequestedValueAddedService} obj Optional instance to populate.
     * @return {RequestedValueAddedService} The populated <code>RequestedValueAddedService</code> instance.
     */
    static constructFromObject(data: any, obj: RequestedValueAddedService): RequestedValueAddedService;
    /**
     * Constructs a new <code>RequestedValueAddedService</code>.
     * A value-added service to be applied to a shipping service purchase.
     * @alias module:shipping_v2/model/RequestedValueAddedService
     * @class
     * @param id {String} The identifier of the selected value-added service. Must be among those returned in the response to the getRates operation.
     */
    constructor(id: string);
    id: string;
}
//# sourceMappingURL=RequestedValueAddedService.d.ts.map