/**
* Enum class PieceType.
* @enum {String}
* @readonly
*/
export class PieceType {
    /**
      * Returns a <code>PieceType</code> enum value from a Javascript object name.
      * @param {Object} data The plain JavaScript object containing the name of the enum value.
      * @return {PieceType} The enum <code>PieceType</code> value.
      */
    static constructFromObject(object: any): PieceType;
    /**
           * value: "SINGLE"
           * @const
           */
    SINGLE: string;
    /**
           * value: "MULTIPLE"
           * @const
           */
    MULTIPLE: string;
}
//# sourceMappingURL=PieceType.d.ts.map