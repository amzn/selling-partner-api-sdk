/**
 * The Link model module.
 * @module listingsrestrictions_v2021_08_01/model/Link
 * @version 2021-08-01
 */
export class Link {
    /**
     * Constructs a <code>Link</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Link} obj Optional instance to populate.
     * @return {Link} The populated <code>Link</code> instance.
     */
    static constructFromObject(data: any, obj: Link): Link;
    /**
     * Constructs a new <code>Link</code>.
     * A link to resources related to a listing restriction.
     * @alias module:listingsrestrictions_v2021_08_01/model/Link
     * @class
     * @param resource {String} The URI of the related resource.
     * @param verb {String} The HTTP verb used to interact with the related resource.
     */
    constructor(resource: string, verb: string);
    resource: string;
    verb: string;
    /**
     * The title of the related resource.
     * @member {String} title
     * @type {String}
     */
    title: string;
    /**
     * The media type of the related resource.
     * @member {String} type
     * @type {String}
     */
    type: string;
}
export namespace Link {
    namespace VerbEnum {
        let GET: string;
    }
    /**
     * *
     */
    type VerbEnum = string;
}
//# sourceMappingURL=Link.d.ts.map