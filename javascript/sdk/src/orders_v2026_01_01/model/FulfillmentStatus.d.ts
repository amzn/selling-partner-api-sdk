/**
* Enum class FulfillmentStatus.
* @enum {String}
* @readonly
*/
export class FulfillmentStatus {
    /**
      * Returns a <code>FulfillmentStatus</code> enum value from a Javascript object name.
      * @param {Object} data The plain JavaScript object containing the name of the enum value.
      * @return {FulfillmentStatus} The enum <code>FulfillmentStatus</code> value.
      */
    static constructFromObject(object: any): FulfillmentStatus;
    /**
           * value: "PENDING_AVAILABILITY"
           * @const
           */
    PENDING_AVAILABILITY: string;
    /**
           * value: "PENDING"
           * @const
           */
    PENDING: string;
    /**
           * value: "UNSHIPPED"
           * @const
           */
    UNSHIPPED: string;
    /**
           * value: "PARTIALLY_SHIPPED"
           * @const
           */
    PARTIALLY_SHIPPED: string;
    /**
           * value: "SHIPPED"
           * @const
           */
    SHIPPED: string;
    /**
           * value: "CANCELLED"
           * @const
           */
    CANCELLED: string;
    /**
           * value: "UNFULFILLABLE"
           * @const
           */
    UNFULFILLABLE: string;
}
//# sourceMappingURL=FulfillmentStatus.d.ts.map