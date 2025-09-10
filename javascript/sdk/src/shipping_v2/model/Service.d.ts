/**
 * The Service model module.
 * @module shipping_v2/model/Service
 * @version v2
 */
export class Service {
    /**
     * Constructs a <code>Service</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Service} obj Optional instance to populate.
     * @return {Service} The populated <code>Service</code> instance.
     */
    static constructFromObject(data: any, obj: Service): Service;
    /**
     * Constructs a new <code>Service</code>.
     * Service Related Info
     * @alias module:shipping_v2/model/Service
     * @class
     * @param id {String} An identifier for the shipping service.
     * @param name {String} The name of the shipping service.
     */
    constructor(id: string, name: string);
    id: string;
    name: string;
}
//# sourceMappingURL=Service.d.ts.map