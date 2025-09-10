/**
* Enum class Status.
* @enum {String}
* @readonly
*/
export class Status {
    /**
      * Returns a <code>Status</code> enum value from a Javascript object name.
      * @param {Object} data The plain JavaScript object containing the name of the enum value.
      * @return {Status} The enum <code>Status</code> value.
      */
    static constructFromObject(object: any): Status;
    /**
           * value: "PreTransit"
           * @const
           */
    PreTransit: string;
    /**
           * value: "InTransit"
           * @const
           */
    InTransit: string;
    /**
           * value: "Delivered"
           * @const
           */
    Delivered: string;
    /**
           * value: "Lost"
           * @const
           */
    Lost: string;
    /**
           * value: "OutForDelivery"
           * @const
           */
    OutForDelivery: string;
    /**
           * value: "Rejected"
           * @const
           */
    Rejected: string;
    /**
           * value: "Undeliverable"
           * @const
           */
    Undeliverable: string;
    /**
           * value: "DeliveryAttempted"
           * @const
           */
    DeliveryAttempted: string;
    /**
           * value: "PickupCancelled"
           * @const
           */
    PickupCancelled: string;
    /**
           * value: "AwaitingCustomerPickup"
           * @const
           */
    AwaitingCustomerPickup: string;
}
//# sourceMappingURL=Status.d.ts.map