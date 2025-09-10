/**
* Enum class DeliveryExperienceType.
* @enum {String}
* @readonly
*/
export class DeliveryExperienceType {
    /**
      * Returns a <code>DeliveryExperienceType</code> enum value from a Javascript object name.
      * @param {Object} data The plain JavaScript object containing the name of the enum value.
      * @return {DeliveryExperienceType} The enum <code>DeliveryExperienceType</code> value.
      */
    static constructFromObject(object: any): DeliveryExperienceType;
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
}
//# sourceMappingURL=DeliveryExperienceType.d.ts.map