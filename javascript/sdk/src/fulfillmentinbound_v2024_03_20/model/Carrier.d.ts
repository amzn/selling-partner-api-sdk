/**
 * The Carrier model module.
 * @module fulfillmentinbound_v2024_03_20/model/Carrier
 * @version 2024-03-20
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
     * The carrier code. For example, USPS or DHLEX.
     * @member {String} alphaCode
     * @type {String}
     */
    alphaCode: string;
    /**
     * The name of the carrier.
     * @member {String} name
     * @type {String}
     */
    name: string;
}
//# sourceMappingURL=Carrier.d.ts.map