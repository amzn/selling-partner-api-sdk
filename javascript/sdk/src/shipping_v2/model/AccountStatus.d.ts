/**
* Enum class AccountStatus.
* @enum {String}
* @readonly
*/
export class AccountStatus {
    /**
      * Returns a <code>AccountStatus</code> enum value from a Javascript object name.
      * @param {Object} data The plain JavaScript object containing the name of the enum value.
      * @return {AccountStatus} The enum <code>AccountStatus</code> value.
      */
    static constructFromObject(object: any): AccountStatus;
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
           * value: "PENDING"
           * @const
           */
    PENDING: string;
    /**
           * value: "SUSPENDED"
           * @const
           */
    SUSPENDED: string;
}
//# sourceMappingURL=AccountStatus.d.ts.map