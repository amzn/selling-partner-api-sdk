/**
* Enum class AccountType.
* @enum {String}
* @readonly
*/
export class AccountType {
    /**
      * Returns a <code>AccountType</code> enum value from a Javascript object name.
      * @param {Object} data The plain JavaScript object containing the name of the enum value.
      * @return {AccountType} The enum <code>AccountType</code> value.
      */
    static constructFromObject(object: any): AccountType;
    /**
           * value: "SHIPPER_ACCOUNT"
           * @const
           */
    SHIPPER_ACCOUNT: string;
    /**
           * value: "SHIPPER_ACCOUNT_WITH_INVOICE"
           * @const
           */
    SHIPPER_ACCOUNT_WITH_INVOICE: string;
    /**
           * value: "AMAZON_ACCOUNT"
           * @const
           */
    AMAZON_ACCOUNT: string;
}
//# sourceMappingURL=AccountType.d.ts.map