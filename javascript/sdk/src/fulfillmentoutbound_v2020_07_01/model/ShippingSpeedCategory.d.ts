/**
* Enum class ShippingSpeedCategory.
* @enum {String}
* @readonly
*/
export class ShippingSpeedCategory {
    /**
      * Returns a <code>ShippingSpeedCategory</code> enum value from a Javascript object name.
      * @param {Object} data The plain JavaScript object containing the name of the enum value.
      * @return {ShippingSpeedCategory} The enum <code>ShippingSpeedCategory</code> value.
      */
    static constructFromObject(object: any): ShippingSpeedCategory;
    /**
           * value: "Standard"
           * @const
           */
    Standard: string;
    /**
           * value: "Expedited"
           * @const
           */
    Expedited: string;
    /**
           * value: "Priority"
           * @const
           */
    Priority: string;
    /**
           * value: "ScheduledDelivery"
           * @const
           */
    ScheduledDelivery: string;
}
//# sourceMappingURL=ShippingSpeedCategory.d.ts.map