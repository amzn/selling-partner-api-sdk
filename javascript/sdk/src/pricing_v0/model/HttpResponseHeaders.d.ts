/**
 * The HttpResponseHeaders model module.
 * @module pricing_v0/model/HttpResponseHeaders
 * @version v0
 */
export class HttpResponseHeaders {
    /**
     * Constructs a <code>HttpResponseHeaders</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {HttpResponseHeaders} obj Optional instance to populate.
     * @return {HttpResponseHeaders} The populated <code>HttpResponseHeaders</code> instance.
     */
    static constructFromObject(data: any, obj: HttpResponseHeaders): HttpResponseHeaders;
    /**
     * The timestamp that the API request was received.  For more information, consult [RFC 2616 Section 14](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html).
     * @member {String} date
     * @type {String}
     */
    date: string;
    /**
     * Unique request reference identifier.
     * @member {String} xAmznRequestId
     * @type {String}
     */
    xAmznRequestId: string;
}
//# sourceMappingURL=HttpResponseHeaders.d.ts.map