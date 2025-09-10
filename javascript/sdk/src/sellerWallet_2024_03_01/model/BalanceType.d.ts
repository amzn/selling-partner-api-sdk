/**
* Enum class BalanceType.
* @enum {String}
* @readonly
*/
export class BalanceType {
    /**
      * Returns a <code>BalanceType</code> enum value from a Javascript object name.
      * @param {Object} data The plain JavaScript object containing the name of the enum value.
      * @return {BalanceType} The enum <code>BalanceType</code> value.
      */
    static constructFromObject(object: any): BalanceType;
    /**
           * value: "AVAILABLE"
           * @const
           */
    AVAILABLE: string;
    /**
           * value: "LOCKED_IN"
           * @const
           */
    LOCKED_IN: string;
    /**
           * value: "LOCKED_OUT"
           * @const
           */
    LOCKED_OUT: string;
    /**
           * value: "TOTAL"
           * @const
           */
    TOTAL: string;
}
//# sourceMappingURL=BalanceType.d.ts.map