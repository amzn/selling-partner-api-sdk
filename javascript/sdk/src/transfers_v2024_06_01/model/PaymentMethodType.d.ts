/**
* Enum class PaymentMethodType.
* @enum {String}
* @readonly
*/
export class PaymentMethodType {
    /**
      * Returns a <code>PaymentMethodType</code> enum value from a Javascript object name.
      * @param {Object} data The plain JavaScript object containing the name of the enum value.
      * @return {PaymentMethodType} The enum <code>PaymentMethodType</code> value.
      */
    static constructFromObject(object: any): PaymentMethodType;
    /**
           * value: "BANK_ACCOUNT"
           * @const
           */
    BANK_ACCOUNT: string;
    /**
           * value: "CARD"
           * @const
           */
    CARD: string;
    /**
           * value: "SELLER_WALLET"
           * @const
           */
    SELLER_WALLET: string;
}
//# sourceMappingURL=PaymentMethodType.d.ts.map