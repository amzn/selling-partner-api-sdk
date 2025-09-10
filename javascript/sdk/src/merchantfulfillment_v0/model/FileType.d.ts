/**
* Enum class FileType.
* @enum {String}
* @readonly
*/
export class FileType {
    /**
      * Returns a <code>FileType</code> enum value from a Javascript object name.
      * @param {Object} data The plain JavaScript object containing the name of the enum value.
      * @return {FileType} The enum <code>FileType</code> value.
      */
    static constructFromObject(object: any): FileType;
    /**
           * value: "application/pdf"
           * @const
           */
    'application/pdf': string;
    /**
           * value: "application/zpl"
           * @const
           */
    'application/zpl': string;
    /**
           * value: "image/png"
           * @const
           */
    'image/png': string;
}
//# sourceMappingURL=FileType.d.ts.map