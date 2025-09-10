/**
 * The ServiceSelection model module.
 * @module shipping_v2/model/ServiceSelection
 * @version v2
 */
export class ServiceSelection {
    /**
     * Constructs a <code>ServiceSelection</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ServiceSelection} obj Optional instance to populate.
     * @return {ServiceSelection} The populated <code>ServiceSelection</code> instance.
     */
    static constructFromObject(data: any, obj: ServiceSelection): ServiceSelection;
    /**
     * Constructs a new <code>ServiceSelection</code>.
     * Service Selection Criteria.
     * @alias module:shipping_v2/model/ServiceSelection
     * @class
     * @param serviceId {[String]} A list of ServiceId.
     */
    constructor(serviceId: [string]);
    serviceId: [string];
}
//# sourceMappingURL=ServiceSelection.d.ts.map