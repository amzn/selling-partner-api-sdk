/**
* Enum class TransferScheduleStatus.
* @enum {String}
* @readonly
*/
export class TransferScheduleStatus {
    /**
      * Returns a <code>TransferScheduleStatus</code> enum value from a Javascript object name.
      * @param {Object} data The plain JavaScript object containing the name of the enum value.
      * @return {TransferScheduleStatus} The enum <code>TransferScheduleStatus</code> value.
      */
    static constructFromObject(object: any): TransferScheduleStatus;
    /**
           * value: "ENABLED"
           * @const
           */
    ENABLED: string;
    /**
           * value: "DISABLED"
           * @const
           */
    DISABLED: string;
    /**
           * value: "EXPIRED"
           * @const
           */
    EXPIRED: string;
    /**
           * value: "DELETED"
           * @const
           */
    DELETED: string;
}
//# sourceMappingURL=TransferScheduleStatus.d.ts.map