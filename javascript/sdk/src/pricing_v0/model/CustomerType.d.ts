/**
* Enum class CustomerType.
* @enum {String}
* @readonly
*/
export class CustomerType {
    /**
      * Returns a <code>CustomerType</code> enum value from a Javascript object name.
      * @param {Object} data The plain JavaScript object containing the name of the enum value.
      * @return {CustomerType} The enum <code>CustomerType</code> value.
      */
    static constructFromObject(object: any): CustomerType;
    /**
           * value: "Consumer"
           * @const
           */
    Consumer: string;
    /**
           * value: "Business"
           * @const
           */
    Business: string;
}
//# sourceMappingURL=CustomerType.d.ts.map