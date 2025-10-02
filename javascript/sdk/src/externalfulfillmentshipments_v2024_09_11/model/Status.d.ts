/**
* Enum class Status.
* @enum {String}
* @readonly
*/
export class Status {
    /**
      * Returns a <code>Status</code> enum value from a Javascript object name.
      * @param {Object} data The plain JavaScript object containing the name of the enum value.
      * @return {Status} The enum <code>Status</code> value.
      */
    static constructFromObject(object: any): Status;
    /**
           * value: "SUCCESS"
           * @const
           */
    SUCCESS: string;
    /**
           * value: "FAILURE"
           * @const
           */
    FAILURE: string;
}
//# sourceMappingURL=Status.d.ts.map