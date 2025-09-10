/**
* Enum class ColorType.
* @enum {String}
* @readonly
*/
export class ColorType {
    /**
      * Returns a <code>ColorType</code> enum value from a Javascript object name.
      * @param {Object} data The plain JavaScript object containing the name of the enum value.
      * @return {ColorType} The enum <code>ColorType</code> value.
      */
    static constructFromObject(object: any): ColorType;
    /**
           * value: "DARK"
           * @const
           */
    DARK: string;
    /**
           * value: "LIGHT"
           * @const
           */
    LIGHT: string;
}
//# sourceMappingURL=ColorType.d.ts.map