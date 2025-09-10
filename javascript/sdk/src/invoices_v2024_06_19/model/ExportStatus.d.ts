/**
* Enum class ExportStatus.
* @enum {String}
* @readonly
*/
export class ExportStatus {
    /**
      * Returns a <code>ExportStatus</code> enum value from a Javascript object name.
      * @param {Object} data The plain JavaScript object containing the name of the enum value.
      * @return {ExportStatus} The enum <code>ExportStatus</code> value.
      */
    static constructFromObject(object: any): ExportStatus;
    /**
           * value: "REQUESTED"
           * @const
           */
    REQUESTED: string;
    /**
           * value: "PROCESSING"
           * @const
           */
    PROCESSING: string;
    /**
           * value: "DONE"
           * @const
           */
    DONE: string;
    /**
           * value: "ERROR"
           * @const
           */
    ERROR: string;
}
//# sourceMappingURL=ExportStatus.d.ts.map