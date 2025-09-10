/**
 * The Error model module.
 * @module fbaeligibility_v1/model/Error
 * @version v1
 */
export class Error {
    /**
     * Constructs a <code>Error</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Error} obj Optional instance to populate.
     * @return {Error} The populated <code>Error</code> instance.
     */
    static constructFromObject(data: any, obj: Error): Error;
    /**
     * Constructs a new <code>Error</code>.
     * Error response returned when the request is unsuccessful.
     * @alias module:fbaeligibility_v1/model/Error
     * @class
     * @param code {String} An error code that identifies the type of error that occurred.
     */
    constructor(code: string);
    code: string;
    /**
     * A message that describes the error condition in a human-readable form.
     * @member {String} message
     * @type {String}
     */
    message: string;
    /**
     * Additional information that can help the caller understand or fix the issue.
     * @member {String} details
     * @type {String}
     */
    details: string;
}
//# sourceMappingURL=Error.d.ts.map