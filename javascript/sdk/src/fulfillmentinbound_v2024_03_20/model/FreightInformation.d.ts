/**
 * The FreightInformation model module.
 * @module fulfillmentinbound_v2024_03_20/model/FreightInformation
 * @version 2024-03-20
 */
export class FreightInformation {
    /**
     * Constructs a <code>FreightInformation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {FreightInformation} obj Optional instance to populate.
     * @return {FreightInformation} The populated <code>FreightInformation</code> instance.
     */
    static constructFromObject(data: any, obj: FreightInformation): FreightInformation;
    /**
     * @member {Currency} declaredValue
     * @type {Currency}
     */
    declaredValue: Currency;
    /**
     * Freight class.  Possible values: `NONE`, `FC_50`, `FC_55`, `FC_60`, `FC_65`, `FC_70`, `FC_77_5`, `FC_85`, `FC_92_5`, `FC_100`, `FC_110`, `FC_125`, `FC_150`, `FC_175`, `FC_200`, `FC_250`, `FC_300`, `FC_400`, `FC_500`.
     * @member {String} freightClass
     * @type {String}
     */
    freightClass: string;
}
import { Currency } from './Currency.js';
//# sourceMappingURL=FreightInformation.d.ts.map