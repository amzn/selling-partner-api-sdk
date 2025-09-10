/**
 * The ReasonCodeDetails model module.
 * @module fulfillmentoutbound_v2020_07_01/model/ReasonCodeDetails
 * @version 2020-07-01
 */
export class ReasonCodeDetails {
    /**
     * Constructs a <code>ReasonCodeDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ReasonCodeDetails} obj Optional instance to populate.
     * @return {ReasonCodeDetails} The populated <code>ReasonCodeDetails</code> instance.
     */
    static constructFromObject(data: any, obj: ReasonCodeDetails): ReasonCodeDetails;
    /**
     * Constructs a new <code>ReasonCodeDetails</code>.
     * A return reason code, a description, and an optional description translation.
     * @alias module:fulfillmentoutbound_v2020_07_01/model/ReasonCodeDetails
     * @class
     * @param returnReasonCode {String} A code that indicates a valid return reason.
     * @param description {String} A human readable description of the return reason code.
     */
    constructor(returnReasonCode: string, description: string);
    returnReasonCode: string;
    description: string;
    /**
     * A translation of the description. The translation is in the language specified in the `language` request parameter.
     * @member {String} translatedDescription
     * @type {String}
     */
    translatedDescription: string;
}
//# sourceMappingURL=ReasonCodeDetails.d.ts.map