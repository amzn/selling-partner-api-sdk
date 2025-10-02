/**
 * The HttpStatusLine model module.
 * @module externalfulfillmentinventory_v2024_09_11/model/HttpStatusLine
 * @version 2024-09-11
 */
export class HttpStatusLine {
    /**
     * Constructs a <code>HttpStatusLine</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {HttpStatusLine} obj Optional instance to populate.
     * @return {HttpStatusLine} The populated <code>HttpStatusLine</code> instance.
     */
    static constructFromObject(data: any, obj: HttpStatusLine): HttpStatusLine;
    /**
     * The HTTP response status code.
     * @member {Number} statusCode
     * @type {Number}
     */
    statusCode: number;
    /**
     * The HTTP response reason phrase.
     * @member {String} reasonPhrase
     * @type {String}
     */
    reasonPhrase: string;
}
//# sourceMappingURL=HttpStatusLine.d.ts.map