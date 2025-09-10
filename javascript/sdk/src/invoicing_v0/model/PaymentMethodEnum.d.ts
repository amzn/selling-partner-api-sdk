/**
* Enum class PaymentMethodEnum.
* @enum {String}
* @readonly
*/
export class PaymentMethodEnum {
    /**
      * Returns a <code>PaymentMethodEnum</code> enum value from a Javascript object name.
      * @param {Object} data The plain JavaScript object containing the name of the enum value.
      * @return {PaymentMethodEnum} The enum <code>PaymentMethodEnum</code> value.
      */
    static constructFromObject(object: any): PaymentMethodEnum;
    /**
           * value: "CreditCard"
           * @const
           */
    CreditCard: string;
    /**
           * value: "DebitCard"
           * @const
           */
    DebitCard: string;
    /**
           * value: "Pix"
           * @const
           */
    Pix: string;
    /**
           * value: "BankSlip"
           * @const
           */
    BankSlip: string;
    /**
           * value: "GiftCard"
           * @const
           */
    GiftCard: string;
    /**
           * value: "Other"
           * @const
           */
    Other: string;
}
//# sourceMappingURL=PaymentMethodEnum.d.ts.map