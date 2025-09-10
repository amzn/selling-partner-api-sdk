/**
* Enum class OwnerConstraint.
* @enum {String}
* @readonly
*/
export class OwnerConstraint {
    /**
      * Returns a <code>OwnerConstraint</code> enum value from a Javascript object name.
      * @param {Object} data The plain JavaScript object containing the name of the enum value.
      * @return {OwnerConstraint} The enum <code>OwnerConstraint</code> value.
      */
    static constructFromObject(object: any): OwnerConstraint;
    /**
           * value: "AMAZON_ONLY"
           * @const
           */
    AMAZON_ONLY: string;
    /**
           * value: "NONE_ONLY"
           * @const
           */
    NONE_ONLY: string;
    /**
           * value: "SELLER_ONLY"
           * @const
           */
    SELLER_ONLY: string;
}
//# sourceMappingURL=OwnerConstraint.d.ts.map