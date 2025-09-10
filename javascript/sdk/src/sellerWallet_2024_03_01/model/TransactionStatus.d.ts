/**
* Enum class TransactionStatus.
* @enum {String}
* @readonly
*/
export class TransactionStatus {
    /**
      * Returns a <code>TransactionStatus</code> enum value from a Javascript object name.
      * @param {Object} data The plain JavaScript object containing the name of the enum value.
      * @return {TransactionStatus} The enum <code>TransactionStatus</code> value.
      */
    static constructFromObject(object: any): TransactionStatus;
    /**
           * value: "EXPIRED"
           * @const
           */
    EXPIRED: string;
    /**
           * value: "FAILED"
           * @const
           */
    FAILED: string;
    /**
           * value: "FAILED_CREDITS_APPLIED"
           * @const
           */
    FAILED_CREDITS_APPLIED: string;
    /**
           * value: "IN_PROGRESS"
           * @const
           */
    IN_PROGRESS: string;
    /**
           * value: "PENDING_USER_APPROVAL"
           * @const
           */
    PENDING_USER_APPROVAL: string;
    /**
           * value: "SUCCESSFUL"
           * @const
           */
    SUCCESSFUL: string;
}
//# sourceMappingURL=TransactionStatus.d.ts.map