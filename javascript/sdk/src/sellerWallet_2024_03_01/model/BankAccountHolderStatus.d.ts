/**
* Enum class BankAccountHolderStatus.
* @enum {String}
* @readonly
*/
export class BankAccountHolderStatus {
    /**
      * Returns a <code>BankAccountHolderStatus</code> enum value from a Javascript object name.
      * @param {Object} data The plain JavaScript object containing the name of the enum value.
      * @return {BankAccountHolderStatus} The enum <code>BankAccountHolderStatus</code> value.
      */
    static constructFromObject(object: any): BankAccountHolderStatus;
    /**
           * value: "ACTIVE"
           * @const
           */
    ACTIVE: string;
    /**
           * value: "INACTIVE"
           * @const
           */
    INACTIVE: string;
    /**
           * value: "UNDER_REVIEW"
           * @const
           */
    UNDER_REVIEW: string;
    /**
           * value: "VERIFICATION_FAILED"
           * @const
           */
    VERIFICATION_FAILED: string;
}
//# sourceMappingURL=BankAccountHolderStatus.d.ts.map