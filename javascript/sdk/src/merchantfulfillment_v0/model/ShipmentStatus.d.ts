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
           * value: "Purchased"
           * @const
           */
    Purchased: string;
    /**
           * value: "RefundPending"
           * @const
           */
    RefundPending: string;
    /**
           * value: "RefundRejected"
           * @const
           */
    RefundRejected: string;
    /**
           * value: "RefundApplied"
           * @const
           */
    RefundApplied: string;
}
//# sourceMappingURL=ShipmentStatus.d.ts.map