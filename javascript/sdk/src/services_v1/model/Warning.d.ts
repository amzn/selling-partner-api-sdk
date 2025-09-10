/**
 * The Warning model module.
 * @module services_v1/model/Warning
 * @version v1
 */
export class Warning {
    /**
     * Constructs a <code>Warning</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Warning} obj Optional instance to populate.
     * @return {Warning} The populated <code>Warning</code> instance.
     */
    static constructFromObject(data: any, obj: Warning): Warning;
    /**
     * Constructs a new <code>Warning</code>.
     * Warning returned when the request is successful, but there are important callouts based on which API clients should take defined actions.
     * @alias module:services_v1/model/Warning
     * @class
     * @param code {String} An warning code that identifies the type of warning that occurred.
     * @param message {String} A message that describes the warning condition in a human-readable form.
     */
    constructor(code: string, message: string);
    code: string;
    message: string;
    /**
     * Additional details that can help the caller understand or address the warning.
     * @member {String} details
     * @type {String}
     */
    details: string;
}
//# sourceMappingURL=Warning.d.ts.map