/**
 * The CarrierDetailsContext model module.
 * @module invoices_v2024_06_19/model/CarrierDetailsContext
 * @version 2024-06-19
 */
export class CarrierDetailsContext {
    /**
     * Constructs a <code>CarrierDetailsContext</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {CarrierDetailsContext} obj Optional instance to populate.
     * @return {CarrierDetailsContext} The populated <code>CarrierDetailsContext</code> instance.
     */
    static constructFromObject(data: any, obj: CarrierDetailsContext): CarrierDetailsContext;
    /**
     * The name of the carrier, as registered in state and federal tax authorities.
     * @member {String} name
     * @type {String}
     */
    name: string;
    /**
     * The address of the carrier, as registered in state and federal tax authorities.
     * @member {String} address
     * @type {String}
     */
    address: string;
    /**
     * Type of additional information.
     * @member {String} contextType
     * @type {String}
     */
    contextType: string;
    /**
     * Tax Identification number of the carrier.
     * @member {String} federalTaxId
     * @type {String}
     */
    federalTaxId: string;
    /**
     * The code of the federal subdivision in which the carrier is registered.
     * @member {String} regionCode
     * @type {String}
     */
    regionCode: string;
    /**
     * The regional tax registration number of the carrier.
     * @member {String} regionTaxId
     * @type {String}
     */
    regionTaxId: string;
    /**
     * The identifier for the carrier vehicle as printed in its registration plate.
     * @member {String} vehicleLicensePlate
     * @type {String}
     */
    vehicleLicensePlate: string;
    /**
     * The code of the federal subdivision in which the carrier vehicle is registered.
     * @member {String} vehicleRegistrationRegionCode
     * @type {String}
     */
    vehicleRegistrationRegionCode: string;
}
//# sourceMappingURL=CarrierDetailsContext.d.ts.map