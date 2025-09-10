/**
* Enum class LabelStatus.
* @enum {String}
* @readonly
*/
export class LabelStatus {
    /**
      * Returns a <code>LabelStatus</code> enum value from a Javascript object name.
      * @param {Object} data The plain JavaScript object containing the name of the enum value.
      * @return {LabelStatus} The enum <code>LabelStatus</code> value.
      */
    static constructFromObject(object: any): LabelStatus;
    /**
           * value: "GENERATING"
           * @const
           */
    GENERATING: string;
    /**
           * value: "GENERATED"
           * @const
           */
    GENERATED: string;
    /**
           * value: "GENERATION_FAILED"
           * @const
           */
    GENERATION_FAILED: string;
    /**
           * value: "NOT_READY"
           * @const
           */
    NOT_READY: string;
}
//# sourceMappingURL=LabelStatus.d.ts.map