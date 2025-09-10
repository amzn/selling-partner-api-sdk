/**
* Enum class EasyShipShipmentStatus.
* @enum {String}
* @readonly
*/
export class EasyShipShipmentStatus {
    /**
      * Returns a <code>EasyShipShipmentStatus</code> enum value from a Javascript object name.
      * @param {Object} data The plain JavaScript object containing the name of the enum value.
      * @return {EasyShipShipmentStatus} The enum <code>EasyShipShipmentStatus</code> value.
      */
    static constructFromObject(object: any): EasyShipShipmentStatus;
    /**
           * value: "PendingSchedule"
           * @const
           */
    PendingSchedule: string;
    /**
           * value: "PendingPickUp"
           * @const
           */
    PendingPickUp: string;
    /**
           * value: "PendingDropOff"
           * @const
           */
    PendingDropOff: string;
    /**
           * value: "LabelCanceled"
           * @const
           */
    LabelCanceled: string;
    /**
           * value: "PickedUp"
           * @const
           */
    PickedUp: string;
    /**
           * value: "DroppedOff"
           * @const
           */
    DroppedOff: string;
    /**
           * value: "AtOriginFC"
           * @const
           */
    AtOriginFC: string;
    /**
           * value: "AtDestinationFC"
           * @const
           */
    AtDestinationFC: string;
    /**
           * value: "Delivered"
           * @const
           */
    Delivered: string;
    /**
           * value: "RejectedByBuyer"
           * @const
           */
    RejectedByBuyer: string;
    /**
           * value: "Undeliverable"
           * @const
           */
    Undeliverable: string;
    /**
           * value: "ReturningToSeller"
           * @const
           */
    ReturningToSeller: string;
    /**
           * value: "ReturnedToSeller"
           * @const
           */
    ReturnedToSeller: string;
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
           * value: "Damaged"
           * @const
           */
    Damaged: string;
}
//# sourceMappingURL=EasyShipShipmentStatus.d.ts.map