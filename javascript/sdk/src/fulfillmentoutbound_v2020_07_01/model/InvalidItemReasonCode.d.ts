/**
* Enum class InvalidItemReasonCode.
* @enum {String}
* @readonly
*/
export class InvalidItemReasonCode {
    /**
      * Returns a <code>InvalidItemReasonCode</code> enum value from a Javascript object name.
      * @param {Object} data The plain JavaScript object containing the name of the enum value.
      * @return {InvalidItemReasonCode} The enum <code>InvalidItemReasonCode</code> value.
      */
    static constructFromObject(object: any): InvalidItemReasonCode;
    /**
           * value: "InvalidValues"
           * @const
           */
    InvalidValues: string;
    /**
           * value: "DuplicateRequest"
           * @const
           */
    DuplicateRequest: string;
    /**
           * value: "NoCompletedShipItems"
           * @const
           */
    NoCompletedShipItems: string;
    /**
           * value: "NoReturnableQuantity"
           * @const
           */
    NoReturnableQuantity: string;
}
//# sourceMappingURL=InvalidItemReasonCode.d.ts.map