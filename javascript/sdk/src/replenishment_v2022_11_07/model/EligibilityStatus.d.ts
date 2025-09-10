/**
* Enum class EligibilityStatus.
* @enum {String}
* @readonly
*/
export class EligibilityStatus {
    /**
      * Returns a <code>EligibilityStatus</code> enum value from a Javascript object name.
      * @param {Object} data The plain JavaScript object containing the name of the enum value.
      * @return {EligibilityStatus} The enum <code>EligibilityStatus</code> value.
      */
    static constructFromObject(object: any): EligibilityStatus;
    /**
           * value: "ELIGIBLE"
           * @const
           */
    ELIGIBLE: string;
    /**
           * value: "INELIGIBLE"
           * @const
           */
    INELIGIBLE: string;
    /**
           * value: "SUSPENDED"
           * @const
           */
    SUSPENDED: string;
    /**
           * value: "REPLENISHMENT_ONLY_ORDERING"
           * @const
           */
    REPLENISHMENT_ONLY_ORDERING: string;
}
//# sourceMappingURL=EligibilityStatus.d.ts.map