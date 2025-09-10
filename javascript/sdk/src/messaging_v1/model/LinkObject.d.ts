/**
 * The LinkObject model module.
 * @module messaging_v1/model/LinkObject
 * @version v1
 */
export class LinkObject {
    /**
     * Constructs a <code>LinkObject</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {LinkObject} obj Optional instance to populate.
     * @return {LinkObject} The populated <code>LinkObject</code> instance.
     */
    static constructFromObject(data: any, obj: LinkObject): LinkObject;
    /**
     * Constructs a new <code>LinkObject</code>.
     * A Link object.
     * @alias module:messaging_v1/model/LinkObject
     * @class
     * @param href {String} A URI for this object.
     */
    constructor(href: string);
    href: string;
    /**
     * An identifier for this object.
     * @member {String} name
     * @type {String}
     */
    name: string;
}
//# sourceMappingURL=LinkObject.d.ts.map