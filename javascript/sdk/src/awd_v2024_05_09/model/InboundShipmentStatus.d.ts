/**
* Enum class InboundShipmentStatus.
* @enum {String}
* @readonly
*/
export class InboundShipmentStatus {
    /**
      * Returns a <code>InboundShipmentStatus</code> enum value from a Javascript object name.
      * @param {Object} data The plain JavaScript object containing the name of the enum value.
      * @return {InboundShipmentStatus} The enum <code>InboundShipmentStatus</code> value.
      */
    static constructFromObject(object: any): InboundShipmentStatus;
    /**
           * value: "CREATED"
           * @const
           */
    CREATED: string;
    /**
           * value: "SHIPPED"
           * @const
           */
    SHIPPED: string;
    /**
           * value: "IN_TRANSIT"
           * @const
           */
    IN_TRANSIT: string;
    /**
           * value: "RECEIVING"
           * @const
           */
    RECEIVING: string;
    /**
           * value: "DELIVERED"
           * @const
           */
    DELIVERED: string;
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
}
//# sourceMappingURL=InboundShipmentStatus.d.ts.map