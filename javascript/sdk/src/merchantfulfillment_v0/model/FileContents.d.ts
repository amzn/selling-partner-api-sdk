/**
 * The FileContents model module.
 * @module merchantfulfillment_v0/model/FileContents
 * @version v0
 */
export class FileContents {
    /**
     * Constructs a <code>FileContents</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {FileContents} obj Optional instance to populate.
     * @return {FileContents} The populated <code>FileContents</code> instance.
     */
    static constructFromObject(data: any, obj: FileContents): FileContents;
    /**
     * Constructs a new <code>FileContents</code>.
     * The document data and checksum.
     * @alias module:merchantfulfillment_v0/model/FileContents
     * @class
     * @param contents {String} Data for printing labels encoded into a Base64, GZip-compressed string.
     * @param fileType {FileType}
     * @param checksum {String} An MD5 hash to validate the PDF document data, in the form of a Base64 string.
     */
    constructor(contents: string, fileType: FileType, checksum: string);
    contents: string;
    fileType: FileType;
    checksum: string;
}
import { FileType } from './FileType.js';
//# sourceMappingURL=FileContents.d.ts.map