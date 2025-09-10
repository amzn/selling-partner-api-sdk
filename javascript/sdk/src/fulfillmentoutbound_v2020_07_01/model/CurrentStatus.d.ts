/**
* Enum class CurrentStatus.
* @enum {String}
* @readonly
*/
export class CurrentStatus {
    /**
      * Returns a <code>CurrentStatus</code> enum value from a Javascript object name.
      * @param {Object} data The plain JavaScript object containing the name of the enum value.
      * @return {CurrentStatus} The enum <code>CurrentStatus</code> value.
      */
    static constructFromObject(object: any): CurrentStatus;
    /**
           * value: "IN_TRANSIT"
           * @const
           */
    IN_TRANSIT: string;
    /**
           * value: "DELIVERED"
           * @const
           */
    DELIVERED: string;
    /**
           * value: "RETURNING"
           * @const
           */
    RETURNING: string;
    /**
           * value: "RETURNED"
           * @const
           */
    RETURNED: string;
    /**
           * value: "UNDELIVERABLE"
           * @const
           */
    UNDELIVERABLE: string;
    /**
           * value: "DELAYED"
           * @const
           */
    DELAYED: string;
    /**
           * value: "AVAILABLE_FOR_PICKUP"
           * @const
           */
    AVAILABLE_FOR_PICKUP: string;
    /**
           * value: "CUSTOMER_ACTION"
           * @const
           */
    CUSTOMER_ACTION: string;
    /**
           * value: "UNKNOWN"
           * @const
           */
    UNKNOWN: string;
    /**
           * value: "OUT_FOR_DELIVERY"
           * @const
           */
    OUT_FOR_DELIVERY: string;
    /**
           * value: "DELIVERY_ATTEMPTED"
           * @const
           */
    DELIVERY_ATTEMPTED: string;
    /**
           * value: "PICKUP_SUCCESSFUL"
           * @const
           */
    PICKUP_SUCCESSFUL: string;
    /**
           * value: "PICKUP_CANCELLED"
           * @const
           */
    PICKUP_CANCELLED: string;
    /**
           * value: "PICKUP_ATTEMPTED"
           * @const
           */
    PICKUP_ATTEMPTED: string;
    /**
           * value: "PICKUP_SCHEDULED"
           * @const
           */
    PICKUP_SCHEDULED: string;
    /**
           * value: "RETURN_REQUEST_ACCEPTED"
           * @const
           */
    RETURN_REQUEST_ACCEPTED: string;
    /**
           * value: "REFUND_ISSUED"
           * @const
           */
    REFUND_ISSUED: string;
    /**
           * value: "RETURN_RECEIVED_IN_FC"
           * @const
           */
    RETURN_RECEIVED_IN_FC: string;
}
//# sourceMappingURL=CurrentStatus.d.ts.map