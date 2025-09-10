/**
* Enum class SettlementType.
* @enum {String}
* @readonly
*/
export class SettlementType {
    /**
      * Returns a <code>SettlementType</code> enum value from a Javascript object name.
      * @param {Object} data The plain JavaScript object containing the name of the enum value.
      * @return {SettlementType} The enum <code>SettlementType</code> value.
      */
    static constructFromObject(object: any): SettlementType;
    /**
           * value: "REFUND"
           * @const
           */
    REFUND: string;
    /**
           * value: "CERTIFICATE_OF_FACT"
           * @const
           */
    CERTIFICATE_OF_FACT: string;
}
//# sourceMappingURL=SettlementType.d.ts.map