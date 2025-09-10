/**
 * The SchemaLink model module.
 * @module producttypedefinitions_v2020_09_01/model/SchemaLink
 * @version 2020-09-01
 */
export class SchemaLink {
    /**
     * Constructs a <code>SchemaLink</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {SchemaLink} obj Optional instance to populate.
     * @return {SchemaLink} The populated <code>SchemaLink</code> instance.
     */
    static constructFromObject(data: any, obj: SchemaLink): SchemaLink;
    /**
     * Constructs a new <code>SchemaLink</code>.
     * @alias module:producttypedefinitions_v2020_09_01/model/SchemaLink
     * @class
     * @param link {SchemaLinkLink}
     * @param checksum {String} Checksum hash of the schema (Base64 MD5). Can be used to verify schema contents, identify changes between schema versions, and for caching.
     */
    constructor(link: SchemaLinkLink, checksum: string);
    link: SchemaLinkLink;
    checksum: string;
}
import { SchemaLinkLink } from './SchemaLinkLink.js';
//# sourceMappingURL=SchemaLink.d.ts.map