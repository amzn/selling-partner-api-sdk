/**
* Enum class LabelFormat.
* @enum {String}
* @readonly
*/
export class LabelFormat {
    /**
      * Returns a <code>LabelFormat</code> enum value from a Javascript object name.
      * @param {Object} data The plain JavaScript object containing the name of the enum value.
      * @return {LabelFormat} The enum <code>LabelFormat</code> value.
      */
    static constructFromObject(object: any): LabelFormat;
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
           * value: "ZPL203"
           * @const
           */
    ZPL203: string;
    /**
           * value: "ZPL300"
           * @const
           */
    ZPL300: string;
    /**
           * value: "ShippingServiceDefault"
           * @const
           */
    ShippingServiceDefault: string;
}
//# sourceMappingURL=LabelFormat.d.ts.map