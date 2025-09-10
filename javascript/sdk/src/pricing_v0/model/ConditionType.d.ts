/**
* Enum class ConditionType.
* @enum {String}
* @readonly
*/
export class ConditionType {
    /**
      * Returns a <code>ConditionType</code> enum value from a Javascript object name.
      * @param {Object} data The plain JavaScript object containing the name of the enum value.
      * @return {ConditionType} The enum <code>ConditionType</code> value.
      */
    static constructFromObject(object: any): ConditionType;
    /**
           * value: "New"
           * @const
           */
    New: string;
    /**
           * value: "Used"
           * @const
           */
    Used: string;
    /**
           * value: "Collectible"
           * @const
           */
    Collectible: string;
    /**
           * value: "Refurbished"
           * @const
           */
    Refurbished: string;
    /**
           * value: "Club"
           * @const
           */
    Club: string;
}
//# sourceMappingURL=ConditionType.d.ts.map