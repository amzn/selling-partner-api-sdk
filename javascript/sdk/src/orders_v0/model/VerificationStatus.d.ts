/**
* Enum class VerificationStatus.
* @enum {String}
* @readonly
*/
export class VerificationStatus {
    /**
      * Returns a <code>VerificationStatus</code> enum value from a Javascript object name.
      * @param {Object} data The plain JavaScript object containing the name of the enum value.
      * @return {VerificationStatus} The enum <code>VerificationStatus</code> value.
      */
    static constructFromObject(object: any): VerificationStatus;
    /**
           * value: "Pending"
           * @const
           */
    Pending: string;
    /**
           * value: "Approved"
           * @const
           */
    Approved: string;
    /**
           * value: "Rejected"
           * @const
           */
    Rejected: string;
    /**
           * value: "Expired"
           * @const
           */
    Expired: string;
    /**
           * value: "Cancelled"
           * @const
           */
    Cancelled: string;
}
//# sourceMappingURL=VerificationStatus.d.ts.map