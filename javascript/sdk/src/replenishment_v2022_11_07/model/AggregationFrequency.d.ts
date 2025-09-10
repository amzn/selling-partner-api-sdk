/**
* Enum class AggregationFrequency.
* @enum {String}
* @readonly
*/
export class AggregationFrequency {
    /**
      * Returns a <code>AggregationFrequency</code> enum value from a Javascript object name.
      * @param {Object} data The plain JavaScript object containing the name of the enum value.
      * @return {AggregationFrequency} The enum <code>AggregationFrequency</code> value.
      */
    static constructFromObject(object: any): AggregationFrequency;
    /**
           * value: "WEEK"
           * @const
           */
    WEEK: string;
    /**
           * value: "MONTH"
           * @const
           */
    MONTH: string;
    /**
           * value: "QUARTER"
           * @const
           */
    QUARTER: string;
    /**
           * value: "YEAR"
           * @const
           */
    YEAR: string;
}
//# sourceMappingURL=AggregationFrequency.d.ts.map