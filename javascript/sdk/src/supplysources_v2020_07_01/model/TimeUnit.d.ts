/**
* Enum class TimeUnit.
* @enum {String}
* @readonly
*/
export class TimeUnit {
    /**
      * Returns a <code>TimeUnit</code> enum value from a Javascript object name.
      * @param {Object} data The plain JavaScript object containing the name of the enum value.
      * @return {TimeUnit} The enum <code>TimeUnit</code> value.
      */
    static constructFromObject(object: any): TimeUnit;
    /**
           * value: "Hours"
           * @const
           */
    Hours: string;
    /**
           * value: "Minutes"
           * @const
           */
    Minutes: string;
    /**
           * value: "Days"
           * @const
           */
    Days: string;
}
//# sourceMappingURL=TimeUnit.d.ts.map