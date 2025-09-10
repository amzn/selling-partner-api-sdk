/**
* Enum class RateItemType.
* @enum {String}
* @readonly
*/
export class RateItemType {
    /**
      * Returns a <code>RateItemType</code> enum value from a Javascript object name.
      * @param {Object} data The plain JavaScript object containing the name of the enum value.
      * @return {RateItemType} The enum <code>RateItemType</code> value.
      */
    static constructFromObject(object: any): RateItemType;
    /**
           * value: "MANDATORY"
           * @const
           */
    MANDATORY: string;
    /**
           * value: "OPTIONAL"
           * @const
           */
    OPTIONAL: string;
    /**
           * value: "INCLUDED"
           * @const
           */
    INCLUDED: string;
}
//# sourceMappingURL=RateItemType.d.ts.map