/**
* Enum class RequirementLevel.
* @enum {String}
* @readonly
*/
export class RequirementLevel {
    /**
      * Returns a <code>RequirementLevel</code> enum value from a Javascript object name.
      * @param {Object} data The plain JavaScript object containing the name of the enum value.
      * @return {RequirementLevel} The enum <code>RequirementLevel</code> value.
      */
    static constructFromObject(object: any): RequirementLevel;
    /**
           * value: "REQUIRED"
           * @const
           */
    REQUIRED: string;
    /**
           * value: "DISALLOWED"
           * @const
           */
    DISALLOWED: string;
}
//# sourceMappingURL=RequirementLevel.d.ts.map