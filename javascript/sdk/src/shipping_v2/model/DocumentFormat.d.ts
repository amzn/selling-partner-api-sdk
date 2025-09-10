/**
* Enum class DocumentFormat.
* @enum {String}
* @readonly
*/
export class DocumentFormat {
    /**
      * Returns a <code>DocumentFormat</code> enum value from a Javascript object name.
      * @param {Object} data The plain JavaScript object containing the name of the enum value.
      * @return {DocumentFormat} The enum <code>DocumentFormat</code> value.
      */
    static constructFromObject(object: any): DocumentFormat;
    /**
           * value: "PDF"
           * @const
           */
    PDF: string;
    /**
           * value: "PNG"
           * @const
           */
    PNG: string;
    /**
           * value: "ZPL"
           * @const
           */
    ZPL: string;
}
//# sourceMappingURL=DocumentFormat.d.ts.map