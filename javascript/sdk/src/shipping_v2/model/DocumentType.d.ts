/**
* Enum class DocumentType.
* @enum {String}
* @readonly
*/
export class DocumentType {
    /**
      * Returns a <code>DocumentType</code> enum value from a Javascript object name.
      * @param {Object} data The plain JavaScript object containing the name of the enum value.
      * @return {DocumentType} The enum <code>DocumentType</code> value.
      */
    static constructFromObject(object: any): DocumentType;
    /**
           * value: "PACKSLIP"
           * @const
           */
    PACKSLIP: string;
    /**
           * value: "LABEL"
           * @const
           */
    LABEL: string;
    /**
           * value: "RECEIPT"
           * @const
           */
    RECEIPT: string;
    /**
           * value: "CUSTOM_FORM"
           * @const
           */
    CUSTOM_FORM: string;
}
//# sourceMappingURL=DocumentType.d.ts.map