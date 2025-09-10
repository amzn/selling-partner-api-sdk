/**
 * The AdditionalSellerInput model module.
 * @module merchantfulfillment_v0/model/AdditionalSellerInput
 * @version v0
 */
export class AdditionalSellerInput {
    /**
     * Constructs a <code>AdditionalSellerInput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {AdditionalSellerInput} obj Optional instance to populate.
     * @return {AdditionalSellerInput} The populated <code>AdditionalSellerInput</code> instance.
     */
    static constructFromObject(data: any, obj: AdditionalSellerInput): AdditionalSellerInput;
    /**
     * The data type of the additional information.
     * @member {String} dataType
     * @type {String}
     */
    dataType: string;
    /**
     * The value when the data type is string.
     * @member {String} valueAsString
     * @type {String}
     */
    valueAsString: string;
    /**
     * The value when the data type is boolean.
     * @member {Boolean} valueAsBoolean
     * @type {Boolean}
     */
    valueAsBoolean: boolean;
    /**
     * The value when the data type is integer.
     * @member {Number} valueAsInteger
     * @type {Number}
     */
    valueAsInteger: number;
    /**
     * Date-time formatted timestamp.
     * @member {Date} valueAsTimestamp
     * @type {Date}
     */
    valueAsTimestamp: Date;
    /**
     * @member {Address} valueAsAddress
     * @type {Address}
     */
    valueAsAddress: Address;
    /**
     * @member {Weight} valueAsWeight
     * @type {Weight}
     */
    valueAsWeight: Weight;
    /**
     * @member {Length} valueAsDimension
     * @type {Length}
     */
    valueAsDimension: Length;
    /**
     * @member {CurrencyAmount} valueAsCurrency
     * @type {CurrencyAmount}
     */
    valueAsCurrency: CurrencyAmount;
}
import { Address } from './Address.js';
import { Weight } from './Weight.js';
import { Length } from './Length.js';
import { CurrencyAmount } from './CurrencyAmount.js';
//# sourceMappingURL=AdditionalSellerInput.d.ts.map