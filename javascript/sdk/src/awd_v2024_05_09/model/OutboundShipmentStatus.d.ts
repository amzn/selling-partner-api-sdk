/**
* Enum class OutboundShipmentStatus.
* @enum {String}
* @readonly
*/
export class OutboundShipmentStatus {
    /**
      * Returns a <code>OutboundShipmentStatus</code> enum value from a Javascript object name.
      * @param {Object} data The plain JavaScript object containing the name of the enum value.
      * @return {OutboundShipmentStatus} The enum <code>OutboundShipmentStatus</code> value.
      */
    static constructFromObject(object: any): OutboundShipmentStatus;
    /**
           * value: "CREATED"
           * @const
           */
    CREATED: string;
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
           * value: "RECEIVING"
           * @const
           */
    RECEIVING: string;
    /**
           * value: "RECEIVED"
           * @const
           */
    RECEIVED: string;
    /**
           * value: "CLOSED"
           * @const
           */
    CLOSED: string;
    /**
           * value: "CANCELLED"
           * @const
           */
    CANCELLED: string;
    /**
           * value: "FAILED"
           * @const
           */
    FAILED: string;
}
//# sourceMappingURL=OutboundShipmentStatus.d.ts.map