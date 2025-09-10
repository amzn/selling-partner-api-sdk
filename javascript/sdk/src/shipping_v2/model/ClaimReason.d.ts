/**
* Enum class ClaimReason.
* @enum {String}
* @readonly
*/
export class ClaimReason {
    /**
      * Returns a <code>ClaimReason</code> enum value from a Javascript object name.
      * @param {Object} data The plain JavaScript object containing the name of the enum value.
      * @return {ClaimReason} The enum <code>ClaimReason</code> value.
      */
    static constructFromObject(object: any): ClaimReason;
    /**
           * value: "LOST_IN_TRANSIT"
           * @const
           */
    LOST_IN_TRANSIT: string;
    /**
           * value: "DAMAGED_IN_TRANSIT"
           * @const
           */
    DAMAGED_IN_TRANSIT: string;
    /**
           * value: "DELIVERED_NOT_RECEIVED"
           * @const
           */
    DELIVERED_NOT_RECEIVED: string;
    /**
           * value: "ITEM_MISSING_SWITCHEROO"
           * @const
           */
    ITEM_MISSING_SWITCHEROO: string;
    /**
           * value: "COD_ABUSE"
           * @const
           */
    COD_ABUSE: string;
}
//# sourceMappingURL=ClaimReason.d.ts.map