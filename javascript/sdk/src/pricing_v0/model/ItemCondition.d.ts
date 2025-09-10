/**
* Enum class ItemCondition.
* @enum {String}
* @readonly
*/
export class ItemCondition {
    /**
      * Returns a <code>ItemCondition</code> enum value from a Javascript object name.
      * @param {Object} data The plain JavaScript object containing the name of the enum value.
      * @return {ItemCondition} The enum <code>ItemCondition</code> value.
      */
    static constructFromObject(object: any): ItemCondition;
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
//# sourceMappingURL=ItemCondition.d.ts.map