/**
 * The ContainerLabel model module.
 * @module vendordfshipping_v2021_12_28/model/ContainerLabel
 * @version 2021-12-28
 */
export class ContainerLabel {
    /**
     * Constructs a <code>ContainerLabel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ContainerLabel} obj Optional instance to populate.
     * @return {ContainerLabel} The populated <code>ContainerLabel</code> instance.
     */
    static constructFromObject(data: any, obj: ContainerLabel): ContainerLabel;
    /**
     * Constructs a new <code>ContainerLabel</code>.
     * The details of the container label.
     * @alias module:vendordfshipping_v2021_12_28/model/ContainerLabel
     * @class
     * @param content {String} The container label content encoded into a Base64 string.
     * @param format {ContainerLabelFormat}
     */
    constructor(content: string, format: ContainerLabelFormat);
    content: string;
    format: ContainerLabelFormat;
    /**
     * The container (pallet) tracking identifier from the shipping carrier.
     * @member {String} containerTrackingNumber
     * @type {String}
     */
    containerTrackingNumber: string;
}
import { ContainerLabelFormat } from './ContainerLabelFormat.js';
//# sourceMappingURL=ContainerLabel.d.ts.map