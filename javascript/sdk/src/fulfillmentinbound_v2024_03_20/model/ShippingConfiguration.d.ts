/**
 * The ShippingConfiguration model module.
 * @module fulfillmentinbound_v2024_03_20/model/ShippingConfiguration
 * @version 2024-03-20
 */
export class ShippingConfiguration {
    /**
     * Constructs a <code>ShippingConfiguration</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ShippingConfiguration} obj Optional instance to populate.
     * @return {ShippingConfiguration} The populated <code>ShippingConfiguration</code> instance.
     */
    static constructFromObject(data: any, obj: ShippingConfiguration): ShippingConfiguration;
    /**
     * Mode of shipment transportation that this option will provide.  Possible values: `GROUND_SMALL_PARCEL`, `FREIGHT_LTL`, `FREIGHT_FTL_PALLET`, `FREIGHT_FTL_NONPALLET`, `OCEAN_LCL`, `OCEAN_FCL`, `AIR_SMALL_PARCEL`, `AIR_SMALL_PARCEL_EXPRESS`.
     * @member {String} shippingMode
     * @type {String}
     */
    shippingMode: string;
    /**
     * Shipping program for the option. Possible values: `AMAZON_PARTNERED_CARRIER`, `USE_YOUR_OWN_CARRIER`.
     * @member {String} shippingSolution
     * @type {String}
     */
    shippingSolution: string;
}
//# sourceMappingURL=ShippingConfiguration.d.ts.map