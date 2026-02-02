/**
* Enum class ReplenishmentOrderStatus.
* @enum {String}
* @readonly
*/
export class ReplenishmentOrderStatus {
    /**
      * Returns a <code>ReplenishmentOrderStatus</code> enum value from a Javascript object name.
      * @param {Object} data The plain JavaScript object containing the name of the enum value.
      * @return {ReplenishmentOrderStatus} The enum <code>ReplenishmentOrderStatus</code> value.
      */
    static constructFromObject(object: any): ReplenishmentOrderStatus;
    /**
           * value: "CONFIRMED"
           * @const
           */
    CONFIRMED: string;
    /**
           * value: "CREATED"
           * @const
           */
    CREATED: string;
    /**
           * value: "ELIGIBLE"
           * @const
           */
    ELIGIBLE: string;
    /**
           * value: "EXECUTING"
           * @const
           */
    EXECUTING: string;
    /**
           * value: "FAILURE"
           * @const
           */
    FAILURE: string;
    /**
           * value: "INELIGIBLE"
           * @const
           */
    INELIGIBLE: string;
    /**
           * value: "INVENTORY_OUTBOUND"
           * @const
           */
    INVENTORY_OUTBOUND: string;
    /**
           * value: "SUCCESS"
           * @const
           */
    SUCCESS: string;
    /**
           * value: "VALIDATING"
           * @const
           */
    VALIDATING: string;
}
//# sourceMappingURL=ReplenishmentOrderStatus.d.ts.map