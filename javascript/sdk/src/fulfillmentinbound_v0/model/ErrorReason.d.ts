/**
* Enum class ErrorReason.
* @enum {String}
* @readonly
*/
export class ErrorReason {
    /**
      * Returns a <code>ErrorReason</code> enum value from a Javascript object name.
      * @param {Object} data The plain JavaScript object containing the name of the enum value.
      * @return {ErrorReason} The enum <code>ErrorReason</code> value.
      */
    static constructFromObject(object: any): ErrorReason;
    /**
           * value: "DoesNotExist"
           * @const
           */
    DoesNotExist: string;
    /**
           * value: "InvalidASIN"
           * @const
           */
    InvalidASIN: string;
}
//# sourceMappingURL=ErrorReason.d.ts.map