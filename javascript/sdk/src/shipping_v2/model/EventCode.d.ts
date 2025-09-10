/**
* Enum class EventCode.
* @enum {String}
* @readonly
*/
export class EventCode {
    /**
      * Returns a <code>EventCode</code> enum value from a Javascript object name.
      * @param {Object} data The plain JavaScript object containing the name of the enum value.
      * @return {EventCode} The enum <code>EventCode</code> value.
      */
    static constructFromObject(object: any): EventCode;
    /**
           * value: "ReadyForReceive"
           * @const
           */
    ReadyForReceive: string;
    /**
           * value: "PickupDone"
           * @const
           */
    PickupDone: string;
    /**
           * value: "Delivered"
           * @const
           */
    Delivered: string;
    /**
           * value: "Departed"
           * @const
           */
    Departed: string;
    /**
           * value: "DeliveryAttempted"
           * @const
           */
    DeliveryAttempted: string;
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
           * value: "ArrivedAtCarrierFacility"
           * @const
           */
    ArrivedAtCarrierFacility: string;
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
           * value: "PickupCancelled"
           * @const
           */
    PickupCancelled: string;
    /**
           * value: "ReturnInitiated"
           * @const
           */
    ReturnInitiated: string;
    /**
           * value: "AvailableForPickup"
           * @const
           */
    AvailableForPickup: string;
    /**
           * value: "RecipientRequestedAlternateDeliveryTiming"
           * @const
           */
    RecipientRequestedAlternateDeliveryTiming: string;
}
//# sourceMappingURL=EventCode.d.ts.map