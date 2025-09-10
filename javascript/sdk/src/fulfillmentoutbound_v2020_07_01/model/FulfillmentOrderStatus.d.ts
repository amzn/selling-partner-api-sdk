/**
* Enum class FulfillmentOrderStatus.
* @enum {String}
* @readonly
*/
export class FulfillmentOrderStatus {
    /**
      * Returns a <code>FulfillmentOrderStatus</code> enum value from a Javascript object name.
      * @param {Object} data The plain JavaScript object containing the name of the enum value.
      * @return {FulfillmentOrderStatus} The enum <code>FulfillmentOrderStatus</code> value.
      */
    static constructFromObject(object: any): FulfillmentOrderStatus;
    /**
           * value: "New"
           * @const
           */
    New: string;
    /**
           * value: "Received"
           * @const
           */
    Received: string;
    /**
           * value: "Planning"
           * @const
           */
    Planning: string;
    /**
           * value: "Processing"
           * @const
           */
    Processing: string;
    /**
           * value: "Cancelled"
           * @const
           */
    Cancelled: string;
    /**
           * value: "Complete"
           * @const
           */
    Complete: string;
    /**
           * value: "CompletePartialled"
           * @const
           */
    CompletePartialled: string;
    /**
           * value: "Unfulfillable"
           * @const
           */
    Unfulfillable: string;
    /**
           * value: "Invalid"
           * @const
           */
    Invalid: string;
}
//# sourceMappingURL=FulfillmentOrderStatus.d.ts.map