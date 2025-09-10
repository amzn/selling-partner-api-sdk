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
           * value: "WORKING"
           * @const
           */
    WORKING: string;
    /**
           * value: "SHIPPED"
           * @const
           */
    SHIPPED: string;
    /**
           * value: "RECEIVING"
           * @const
           */
    RECEIVING: string;
    /**
           * value: "CANCELLED"
           * @const
           */
    CANCELLED: string;
    /**
           * value: "DELETED"
           * @const
           */
    DELETED: string;
    /**
           * value: "CLOSED"
           * @const
           */
    CLOSED: string;
    /**
           * value: "ERROR"
           * @const
           */
    ERROR: string;
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
           * value: "CHECKED_IN"
           * @const
           */
    CHECKED_IN: string;
}
//# sourceMappingURL=ShipmentStatus.d.ts.map