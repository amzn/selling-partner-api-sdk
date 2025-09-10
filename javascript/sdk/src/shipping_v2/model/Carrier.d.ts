/**
 * The Carrier model module.
 * @module shipping_v2/model/Carrier
 * @version v2
 */
export class Carrier {
    /**
     * Constructs a <code>Carrier</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Carrier} obj Optional instance to populate.
     * @return {Carrier} The populated <code>Carrier</code> instance.
     */
    static constructFromObject(data: any, obj: Carrier): Carrier;
    /**
     * Constructs a new <code>Carrier</code>.
     * Carrier Related Info
     * @alias module:shipping_v2/model/Carrier
     * @class
     * @param id {String} The carrier identifier for the offering, provided by the carrier.
     * @param name {String} The carrier name for the offering.
     */
    constructor(id: string, name: string);
    id: string;
    name: string;
}
//# sourceMappingURL=Carrier.d.ts.map