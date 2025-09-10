/**
 * The GetOffersHttpStatusLine model module.
 * @module pricing_v0/model/GetOffersHttpStatusLine
 * @version v0
 */
export class GetOffersHttpStatusLine {
    /**
     * Constructs a <code>GetOffersHttpStatusLine</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetOffersHttpStatusLine} obj Optional instance to populate.
     * @return {GetOffersHttpStatusLine} The populated <code>GetOffersHttpStatusLine</code> instance.
     */
    static constructFromObject(data: any, obj: GetOffersHttpStatusLine): GetOffersHttpStatusLine;
    /**
     * The HTTP response Status Code.
     * @member {Number} statusCode
     * @type {Number}
     */
    statusCode: number;
    /**
     * The HTTP response Reason-Phase.
     * @member {String} reasonPhrase
     * @type {String}
     */
    reasonPhrase: string;
}
//# sourceMappingURL=GetOffersHttpStatusLine.d.ts.map