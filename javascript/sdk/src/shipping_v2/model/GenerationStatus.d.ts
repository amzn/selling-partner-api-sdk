/**
* Enum class GenerationStatus.
* @enum {String}
* @readonly
*/
export class GenerationStatus {
    /**
      * Returns a <code>GenerationStatus</code> enum value from a Javascript object name.
      * @param {Object} data The plain JavaScript object containing the name of the enum value.
      * @return {GenerationStatus} The enum <code>GenerationStatus</code> value.
      */
    static constructFromObject(object: any): GenerationStatus;
    /**
           * value: "Completed"
           * @const
           */
    Completed: string;
    /**
           * value: "InProgress"
           * @const
           */
    InProgress: string;
}
//# sourceMappingURL=GenerationStatus.d.ts.map