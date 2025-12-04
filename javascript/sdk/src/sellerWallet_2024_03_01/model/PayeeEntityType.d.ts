/**
* Enum class PayeeEntityType.
* @enum {String}
* @readonly
*/
export class PayeeEntityType {
    /**
      * Returns a <code>PayeeEntityType</code> enum value from a Javascript object name.
      * @param {Object} data The plain JavaScript object containing the name of the enum value.
      * @return {PayeeEntityType} The enum <code>PayeeEntityType</code> value.
      */
    static constructFromObject(object: any): PayeeEntityType;
    /**
           * value: "INDIVIDUAL"
           * @const
           */
    INDIVIDUAL: string;
    /**
           * value: "BUSINESS"
           * @const
           */
    BUSINESS: string;
    /**
           * value: "TAX_AUTHORITY"
           * @const
           */
    TAX_AUTHORITY: string;
}
//# sourceMappingURL=PayeeEntityType.d.ts.map