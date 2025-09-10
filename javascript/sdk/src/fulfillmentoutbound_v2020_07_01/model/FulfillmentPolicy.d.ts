/**
* Enum class FulfillmentPolicy.
* @enum {String}
* @readonly
*/
export class FulfillmentPolicy {
    /**
      * Returns a <code>FulfillmentPolicy</code> enum value from a Javascript object name.
      * @param {Object} data The plain JavaScript object containing the name of the enum value.
      * @return {FulfillmentPolicy} The enum <code>FulfillmentPolicy</code> value.
      */
    static constructFromObject(object: any): FulfillmentPolicy;
    /**
           * value: "FillOrKill"
           * @const
           */
    FillOrKill: string;
    /**
           * value: "FillAll"
           * @const
           */
    FillAll: string;
    /**
           * value: "FillAllAvailable"
           * @const
           */
    FillAllAvailable: string;
}
//# sourceMappingURL=FulfillmentPolicy.d.ts.map