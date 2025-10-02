/**
* Enum class Priority.
* @enum {String}
* @readonly
*/
export class Priority {
    /**
      * Returns a <code>Priority</code> enum value from a Javascript object name.
      * @param {Object} data The plain JavaScript object containing the name of the enum value.
      * @return {Priority} The enum <code>Priority</code> value.
      */
    static constructFromObject(object: any): Priority;
    /**
           * value: "HIGH"
           * @const
           */
    HIGH: string;
    /**
           * value: "LOW"
           * @const
           */
    LOW: string;
}
//# sourceMappingURL=Priority.d.ts.map