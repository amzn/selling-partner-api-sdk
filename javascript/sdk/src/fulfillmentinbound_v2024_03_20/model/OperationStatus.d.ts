/**
* Enum class OperationStatus.
* @enum {String}
* @readonly
*/
export class OperationStatus {
    /**
      * Returns a <code>OperationStatus</code> enum value from a Javascript object name.
      * @param {Object} data The plain JavaScript object containing the name of the enum value.
      * @return {OperationStatus} The enum <code>OperationStatus</code> value.
      */
    static constructFromObject(object: any): OperationStatus;
    /**
           * value: "SUCCESS"
           * @const
           */
    SUCCESS: string;
    /**
           * value: "FAILED"
           * @const
           */
    FAILED: string;
    /**
           * value: "IN_PROGRESS"
           * @const
           */
    IN_PROGRESS: string;
}
//# sourceMappingURL=OperationStatus.d.ts.map