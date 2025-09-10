/**
* Enum class PackageStatus.
* @enum {String}
* @readonly
*/
export class PackageStatus {
    /**
      * Returns a <code>PackageStatus</code> enum value from a Javascript object name.
      * @param {Object} data The plain JavaScript object containing the name of the enum value.
      * @return {PackageStatus} The enum <code>PackageStatus</code> value.
      */
    static constructFromObject(object: any): PackageStatus;
    /**
           * value: "ReadyForPickup"
           * @const
           */
    ReadyForPickup: string;
    /**
           * value: "PickedUp"
           * @const
           */
    PickedUp: string;
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
           * value: "ReturnedToSeller"
           * @const
           */
    ReturnedToSeller: string;
    /**
           * value: "LostInTransit"
           * @const
           */
    LostInTransit: string;
    /**
           * value: "LabelCanceled"
           * @const
           */
    LabelCanceled: string;
    /**
           * value: "DamagedInTransit"
           * @const
           */
    DamagedInTransit: string;
    /**
           * value: "OutForDelivery"
           * @const
           */
    OutForDelivery: string;
}
//# sourceMappingURL=PackageStatus.d.ts.map