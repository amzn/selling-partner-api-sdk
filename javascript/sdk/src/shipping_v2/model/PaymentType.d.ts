/**
* Enum class PaymentType.
* @enum {String}
* @readonly
*/
export class PaymentType {
    /**
      * Returns a <code>PaymentType</code> enum value from a Javascript object name.
      * @param {Object} data The plain JavaScript object containing the name of the enum value.
      * @return {PaymentType} The enum <code>PaymentType</code> value.
      */
    static constructFromObject(object: any): PaymentType;
    /**
           * value: "PAY_THROUGH_AMAZON"
           * @const
           */
    PAY_THROUGH_AMAZON: string;
    /**
           * value: "PAY_DIRECT_TO_CARRIER"
           * @const
           */
    PAY_DIRECT_TO_CARRIER: string;
}
//# sourceMappingURL=PaymentType.d.ts.map