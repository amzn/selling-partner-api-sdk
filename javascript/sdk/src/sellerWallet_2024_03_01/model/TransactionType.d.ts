/**
* Enum class TransactionType.
* @enum {String}
* @readonly
*/
export class TransactionType {
    /**
      * Returns a <code>TransactionType</code> enum value from a Javascript object name.
      * @param {Object} data The plain JavaScript object containing the name of the enum value.
      * @return {TransactionType} The enum <code>TransactionType</code> value.
      */
    static constructFromObject(object: any): TransactionType;
    /**
           * value: "CREDIT"
           * @const
           */
    CREDIT: string;
    /**
           * value: "DEBIT"
           * @const
           */
    DEBIT: string;
}
//# sourceMappingURL=TransactionType.d.ts.map