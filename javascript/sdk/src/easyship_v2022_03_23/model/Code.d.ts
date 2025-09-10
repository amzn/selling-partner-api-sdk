/**
* Enum class Code.
* @enum {String}
* @readonly
*/
export class Code {
    /**
      * Returns a <code>Code</code> enum value from a Javascript object name.
      * @param {Object} data The plain JavaScript object containing the name of the enum value.
      * @return {Code} The enum <code>Code</code> value.
      */
    static constructFromObject(object: any): Code;
    /**
           * value: "InvalidInput"
           * @const
           */
    InvalidInput: string;
    /**
           * value: "InvalidTimeSlotId"
           * @const
           */
    InvalidTimeSlotId: string;
    /**
           * value: "ScheduledPackageAlreadyExists"
           * @const
           */
    ScheduledPackageAlreadyExists: string;
    /**
           * value: "ScheduleWindowExpired"
           * @const
           */
    ScheduleWindowExpired: string;
    /**
           * value: "RetryableAfterGettingNewSlots"
           * @const
           */
    RetryableAfterGettingNewSlots: string;
    /**
           * value: "TimeSlotNotAvailable"
           * @const
           */
    TimeSlotNotAvailable: string;
    /**
           * value: "ResourceNotFound"
           * @const
           */
    ResourceNotFound: string;
    /**
           * value: "InvalidOrderState"
           * @const
           */
    InvalidOrderState: string;
    /**
           * value: "RegionNotSupported"
           * @const
           */
    RegionNotSupported: string;
    /**
           * value: "OrderNotEligibleForRescheduling"
           * @const
           */
    OrderNotEligibleForRescheduling: string;
    /**
           * value: "InternalServerError"
           * @const
           */
    InternalServerError: string;
}
//# sourceMappingURL=Code.d.ts.map