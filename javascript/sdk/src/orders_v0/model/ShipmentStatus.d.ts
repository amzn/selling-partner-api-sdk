/**
* Enum class ShipmentStatus.
* @enum {String}
* @readonly
*/
export class ShipmentStatus {
    /**
      * Returns a <code>ShipmentStatus</code> enum value from a Javascript object name.
      * @param {Object} data The plain JavaScript object containing the name of the enum value.
      * @return {ShipmentStatus} The enum <code>ShipmentStatus</code> value.
      */
    static constructFromObject(object: any): ShipmentStatus;
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
           * value: "RefusedPickup"
           * @const
           */
    RefusedPickup: string;
}
//# sourceMappingURL=ShipmentStatus.d.ts.map