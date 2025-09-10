/**
 * The SchemaLinkLink model module.
 * @module producttypedefinitions_v2020_09_01/model/SchemaLinkLink
 * @version 2020-09-01
 */
export class SchemaLinkLink {
    /**
     * Constructs a <code>SchemaLinkLink</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {SchemaLinkLink} obj Optional instance to populate.
     * @return {SchemaLinkLink} The populated <code>SchemaLinkLink</code> instance.
     */
    static constructFromObject(data: any, obj: SchemaLinkLink): SchemaLinkLink;
    /**
     * Constructs a new <code>SchemaLinkLink</code>.
     * Link to retrieve the schema.
     * @alias module:producttypedefinitions_v2020_09_01/model/SchemaLinkLink
     * @class
     * @param resource {String} URI resource for the link.
     * @param verb {String} HTTP method for the link operation.
     */
    constructor(resource: string, verb: string);
    resource: string;
    verb: string;
}
export namespace SchemaLinkLink {
    namespace VerbEnum {
        let GET: string;
    }
    /**
     * *
     */
    type VerbEnum = string;
}
//# sourceMappingURL=SchemaLinkLink.d.ts.map