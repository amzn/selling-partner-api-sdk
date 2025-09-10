/**
* Enum class DeliveryExperienceOption.
* @enum {String}
* @readonly
*/
export class DeliveryExperienceOption {
    /**
      * Returns a <code>DeliveryExperienceOption</code> enum value from a Javascript object name.
      * @param {Object} data The plain JavaScript object containing the name of the enum value.
      * @return {DeliveryExperienceOption} The enum <code>DeliveryExperienceOption</code> value.
      */
    static constructFromObject(object: any): DeliveryExperienceOption;
    /**
           * value: "DeliveryConfirmationWithAdultSignature"
           * @const
           */
    DeliveryConfirmationWithAdultSignature: string;
    /**
           * value: "DeliveryConfirmationWithSignature"
           * @const
           */
    DeliveryConfirmationWithSignature: string;
    /**
           * value: "DeliveryConfirmationWithoutSignature"
           * @const
           */
    DeliveryConfirmationWithoutSignature: string;
    /**
           * value: "NoTracking"
           * @const
           */
    NoTracking: string;
    /**
           * value: "NoPreference"
           * @const
           */
    NoPreference: string;
}
//# sourceMappingURL=DeliveryExperienceOption.d.ts.map