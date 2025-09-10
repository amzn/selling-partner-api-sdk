/**
* Enum class RecurringFrequency.
* @enum {String}
* @readonly
*/
export class RecurringFrequency {
    /**
      * Returns a <code>RecurringFrequency</code> enum value from a Javascript object name.
      * @param {Object} data The plain JavaScript object containing the name of the enum value.
      * @return {RecurringFrequency} The enum <code>RecurringFrequency</code> value.
      */
    static constructFromObject(object: any): RecurringFrequency;
    /**
           * value: "DAILY"
           * @const
           */
    DAILY: string;
    /**
           * value: "WEEKLY"
           * @const
           */
    WEEKLY: string;
    /**
           * value: "BIWEEKLY"
           * @const
           */
    BIWEEKLY: string;
    /**
           * value: "MONTHLY"
           * @const
           */
    MONTHLY: string;
}
//# sourceMappingURL=RecurringFrequency.d.ts.map