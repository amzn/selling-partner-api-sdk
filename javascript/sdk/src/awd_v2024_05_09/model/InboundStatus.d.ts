/**
* Enum class InboundStatus.
* @enum {String}
* @readonly
*/
export class InboundStatus {
    /**
      * Returns a <code>InboundStatus</code> enum value from a Javascript object name.
      * @param {Object} data The plain JavaScript object containing the name of the enum value.
      * @return {InboundStatus} The enum <code>InboundStatus</code> value.
      */
    static constructFromObject(object: any): InboundStatus;
    /**
           * value: "DRAFT"
           * @const
           */
    DRAFT: string;
    /**
           * value: "VALIDATING"
           * @const
           */
    VALIDATING: string;
    /**
           * value: "CONFIRMED"
           * @const
           */
    CONFIRMED: string;
    /**
           * value: "CLOSED"
           * @const
           */
    CLOSED: string;
    /**
           * value: "EXPIRED"
           * @const
           */
    EXPIRED: string;
    /**
           * value: "CANCELLED"
           * @const
           */
    CANCELLED: string;
}
//# sourceMappingURL=InboundStatus.d.ts.map