/**
* Enum class ContentStatus.
* @enum {String}
* @readonly
*/
export class ContentStatus {
    /**
      * Returns a <code>ContentStatus</code> enum value from a Javascript object name.
      * @param {Object} data The plain JavaScript object containing the name of the enum value.
      * @return {ContentStatus} The enum <code>ContentStatus</code> value.
      */
    static constructFromObject(object: any): ContentStatus;
    /**
           * value: "APPROVED"
           * @const
           */
    APPROVED: string;
    /**
           * value: "DRAFT"
           * @const
           */
    DRAFT: string;
    /**
           * value: "REJECTED"
           * @const
           */
    REJECTED: string;
    /**
           * value: "SUBMITTED"
           * @const
           */
    SUBMITTED: string;
}
//# sourceMappingURL=ContentStatus.d.ts.map