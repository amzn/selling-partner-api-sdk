/**
* Enum class InboundEligibilityStatus.
* @enum {String}
* @readonly
*/
export class InboundEligibilityStatus {
    /**
      * Returns a <code>InboundEligibilityStatus</code> enum value from a Javascript object name.
      * @param {Object} data The plain JavaScript object containing the name of the enum value.
      * @return {InboundEligibilityStatus} The enum <code>InboundEligibilityStatus</code> value.
      */
    static constructFromObject(object: any): InboundEligibilityStatus;
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
}
//# sourceMappingURL=InboundEligibilityStatus.d.ts.map