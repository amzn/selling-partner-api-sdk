/**
 * The WindowInput model module.
 * @module fulfillmentinbound_v2024_03_20/model/WindowInput
 * @version 2024-03-20
 */
export class WindowInput {
    /**
     * Constructs a <code>WindowInput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {WindowInput} obj Optional instance to populate.
     * @return {WindowInput} The populated <code>WindowInput</code> instance.
     */
    static constructFromObject(data: any, obj: WindowInput): WindowInput;
    /**
     * Constructs a new <code>WindowInput</code>.
     * Contains only a starting DateTime.
     * @alias module:fulfillmentinbound_v2024_03_20/model/WindowInput
     * @class
     * @param start {Date} The start date of the window. In [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) datetime format with minute precision. Supports patterns `yyyy-MM-ddTHH:mmZ`, `yyyy-MM-ddTHH:mm:ssZ`, or `yyyy-MM-ddTHH:mm:ss.sssZ`. Note that non-zero second and millisecond components are removed.
     */
    constructor(start: Date);
    start: Date;
}
//# sourceMappingURL=WindowInput.d.ts.map