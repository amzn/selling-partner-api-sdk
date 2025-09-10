/**
* Enum class IneligibilityReasonCode.
* @enum {String}
* @readonly
*/
export class IneligibilityReasonCode {
    /**
      * Returns a <code>IneligibilityReasonCode</code> enum value from a Javascript object name.
      * @param {Object} data The plain JavaScript object containing the name of the enum value.
      * @return {IneligibilityReasonCode} The enum <code>IneligibilityReasonCode</code> value.
      */
    static constructFromObject(object: any): IneligibilityReasonCode;
    /**
           * value: "NO_COVERAGE"
           * @const
           */
    NO_COVERAGE: string;
    /**
           * value: "PICKUP_SLOT_RESTRICTION"
           * @const
           */
    PICKUP_SLOT_RESTRICTION: string;
    /**
           * value: "UNSUPPORTED_VAS"
           * @const
           */
    UNSUPPORTED_VAS: string;
    /**
           * value: "VAS_COMBINATION_RESTRICTION"
           * @const
           */
    VAS_COMBINATION_RESTRICTION: string;
    /**
           * value: "SIZE_RESTRICTIONS"
           * @const
           */
    SIZE_RESTRICTIONS: string;
    /**
           * value: "WEIGHT_RESTRICTIONS"
           * @const
           */
    WEIGHT_RESTRICTIONS: string;
    /**
           * value: "LATE_DELIVERY"
           * @const
           */
    LATE_DELIVERY: string;
    /**
           * value: "PROGRAM_CONSTRAINTS"
           * @const
           */
    PROGRAM_CONSTRAINTS: string;
    /**
           * value: "TERMS_AND_CONDITIONS_NOT_ACCEPTED"
           * @const
           */
    TERMS_AND_CONDITIONS_NOT_ACCEPTED: string;
    /**
           * value: "UNKNOWN"
           * @const
           */
    UNKNOWN: string;
}
//# sourceMappingURL=IneligibilityReasonCode.d.ts.map