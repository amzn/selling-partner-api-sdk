/**
* Enum class FeeType.
* @enum {String}
* @readonly
*/
export class FeeType {
    /**
      * Returns a <code>FeeType</code> enum value from a Javascript object name.
      * @param {Object} data The plain JavaScript object containing the name of the enum value.
      * @return {FeeType} The enum <code>FeeType</code> value.
      */
    static constructFromObject(object: any): FeeType;
    /**
           * value: "MISCELLANEOUS_FEE"
           * @const
           */
    MISCELLANEOUS_FEE: string;
    /**
           * value: "TAX"
           * @const
           */
    TAX: string;
    /**
           * value: "TRANSACTION_FEE"
           * @const
           */
    TRANSACTION_FEE: string;
}
//# sourceMappingURL=FeeType.d.ts.map