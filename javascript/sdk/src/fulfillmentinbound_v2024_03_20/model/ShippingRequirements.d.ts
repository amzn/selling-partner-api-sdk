/**
 * The ShippingRequirements model module.
 * @module fulfillmentinbound_v2024_03_20/model/ShippingRequirements
 * @version 2024-03-20
 */
export class ShippingRequirements {
    /**
     * Constructs a <code>ShippingRequirements</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ShippingRequirements} obj Optional instance to populate.
     * @return {ShippingRequirements} The populated <code>ShippingRequirements</code> instance.
     */
    static constructFromObject(data: any, obj: ShippingRequirements): ShippingRequirements;
    /**
     * Constructs a new <code>ShippingRequirements</code>.
     * The possible shipping modes for the packing option for a given shipping solution or program. Available solutions are Amazon-Partnered Carrier and Use Your Own Carrier. Available modes are ground small parcel, freight less-than-truckload (LTL), freight full-truckload (FTL) palletized, freight FTL non-palletized, ocean less-than-container-load (LCL), ocean full-container load (FCL), air small parcel, and air small parcel express.
     * @alias module:fulfillmentinbound_v2024_03_20/model/ShippingRequirements
     * @class
     * @param modes {Array[]} Available shipment modes for this shipping program.
     * @param solution {String} Shipping program for the option. Can be: `AMAZON_PARTNERED_CARRIER`, `USE_YOUR_OWN_CARRIER`.
     */
    constructor(modes: any[][], solution: string);
    modes: any[][];
    solution: string;
}
//# sourceMappingURL=ShippingRequirements.d.ts.map