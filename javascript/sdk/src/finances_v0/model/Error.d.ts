/**
 * The Error model module.
 * @module finances_v0/model/Error
 * @version v0
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
     * @alias module:finances_v0/model/Error
     * @class
     * @param code {String} An error code that identifies the type of error that occurred.
     * @param message {String} A message that describes the error condition in a human-readable form.
     */
    constructor(code: string, message: string);
    code: string;
    message: string;
    /**
     * Additional details that can help the caller understand or fix the issue.
     * @member {String} details
     * @type {String}
     */
    details: string;
}
//# sourceMappingURL=Error.d.ts.map