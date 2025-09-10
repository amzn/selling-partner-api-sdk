/**
* Enum class ReasonComment.
* @enum {String}
* @readonly
*/
export class ReasonComment {
    /**
      * Returns a <code>ReasonComment</code> enum value from a Javascript object name.
      * @param {Object} data The plain JavaScript object containing the name of the enum value.
      * @return {ReasonComment} The enum <code>ReasonComment</code> value.
      */
    static constructFromObject(object: any): ReasonComment;
    /**
           * value: "APPOINTMENT_REQUESTED_BY_MISTAKE"
           * @const
           */
    APPOINTMENT_REQUESTED_BY_MISTAKE: string;
    /**
           * value: "VEHICLE_DELAY"
           * @const
           */
    VEHICLE_DELAY: string;
    /**
           * value: "SLOT_NOT_SUITABLE"
           * @const
           */
    SLOT_NOT_SUITABLE: string;
    /**
           * value: "OUTSIDE_CARRIER_BUSINESS_HOURS"
           * @const
           */
    OUTSIDE_CARRIER_BUSINESS_HOURS: string;
    /**
           * value: "UNFAVOURABLE_EXTERNAL_CONDITIONS"
           * @const
           */
    UNFAVOURABLE_EXTERNAL_CONDITIONS: string;
    /**
           * value: "PROCUREMENT_DELAY"
           * @const
           */
    PROCUREMENT_DELAY: string;
    /**
           * value: "SHIPPING_PLAN_CHANGED"
           * @const
           */
    SHIPPING_PLAN_CHANGED: string;
    /**
           * value: "INCREASED_QUANTITY"
           * @const
           */
    INCREASED_QUANTITY: string;
    /**
           * value: "OTHER"
           * @const
           */
    OTHER: string;
}
//# sourceMappingURL=ReasonComment.d.ts.map