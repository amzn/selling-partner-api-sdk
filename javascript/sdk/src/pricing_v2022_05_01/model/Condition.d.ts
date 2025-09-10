/**
* Enum class Condition.
* @enum {String}
* @readonly
*/
export class Condition {
    /**
      * Returns a <code>Condition</code> enum value from a Javascript object name.
      * @param {Object} data The plain JavaScript object containing the name of the enum value.
      * @return {Condition} The enum <code>Condition</code> value.
      */
    static constructFromObject(object: any): Condition;
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
//# sourceMappingURL=Condition.d.ts.map