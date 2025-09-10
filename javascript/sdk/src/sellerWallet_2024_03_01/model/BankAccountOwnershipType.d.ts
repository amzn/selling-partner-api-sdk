/**
* Enum class BankAccountOwnershipType.
* @enum {String}
* @readonly
*/
export class BankAccountOwnershipType {
    /**
      * Returns a <code>BankAccountOwnershipType</code> enum value from a Javascript object name.
      * @param {Object} data The plain JavaScript object containing the name of the enum value.
      * @return {BankAccountOwnershipType} The enum <code>BankAccountOwnershipType</code> value.
      */
    static constructFromObject(object: any): BankAccountOwnershipType;
    /**
           * value: "THIRD_PARTY"
           * @const
           */
    THIRD_PARTY: string;
    /**
           * value: "SELF"
           * @const
           */
    SELF: string;
    /**
           * value: "GOVERNMENT"
           * @const
           */
    GOVERNMENT: string;
}
//# sourceMappingURL=BankAccountOwnershipType.d.ts.map