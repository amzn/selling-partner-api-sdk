/**
 * The LabelData model module.
 * @module vendordfshipping_v2021_12_28/model/LabelData
 * @version 2021-12-28
 */
export class LabelData {
    /**
     * Constructs a <code>LabelData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {LabelData} obj Optional instance to populate.
     * @return {LabelData} The populated <code>LabelData</code> instance.
     */
    static constructFromObject(data: any, obj: LabelData): LabelData;
    /**
     * Constructs a new <code>LabelData</code>.
     * Details of the shipment label.
     * @alias module:vendordfshipping_v2021_12_28/model/LabelData
     * @class
     * @param content {String} This field will contain the Base64 string of the shipment label content.
     */
    constructor(content: string);
    content: string;
    /**
     * Identifier for the package. The first package will be 001, the second 002, and so on. This number is used as a reference to refer to this package from the pallet level.
     * @member {String} packageIdentifier
     * @type {String}
     */
    packageIdentifier: string;
    /**
     * Package tracking identifier from the shipping carrier.
     * @member {String} trackingNumber
     * @type {String}
     */
    trackingNumber: string;
    /**
     * Ship method to be used for shipping the order. Amazon defines Ship Method Codes indicating shipping carrier and shipment service level. Ship Method Codes are case and format sensitive. The same ship method code should returned on the shipment confirmation. Note that the Ship Method Codes are vendor specific and will be provided to each vendor during the implementation.
     * @member {String} shipMethod
     * @type {String}
     */
    shipMethod: string;
    /**
     * Shipping method name for internal reference.
     * @member {String} shipMethodName
     * @type {String}
     */
    shipMethodName: string;
}
//# sourceMappingURL=LabelData.d.ts.map