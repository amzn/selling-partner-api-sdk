/**
* Enum class FulfillmentAction.
* @enum {String}
* @readonly
*/
export class FulfillmentAction {
    /**
      * Returns a <code>FulfillmentAction</code> enum value from a Javascript object name.
      * @param {Object} data The plain JavaScript object containing the name of the enum value.
      * @return {FulfillmentAction} The enum <code>FulfillmentAction</code> value.
      */
    static constructFromObject(object: any): FulfillmentAction;
    /**
           * value: "Ship"
           * @const
           */
    Ship: string;
    /**
           * value: "Hold"
           * @const
           */
    Hold: string;
}
//# sourceMappingURL=FulfillmentAction.d.ts.map