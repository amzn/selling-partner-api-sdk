/**
* Enum class PresenceStatus.
* @enum {String}
* @readonly
*/
export class PresenceStatus {
    /**
      * Returns a <code>PresenceStatus</code> enum value from a Javascript object name.
      * @param {Object} data The plain JavaScript object containing the name of the enum value.
      * @return {PresenceStatus} The enum <code>PresenceStatus</code> value.
      */
    static constructFromObject(object: any): PresenceStatus;
    /**
           * value: "ABSENT"
           * @const
           */
    ABSENT: string;
    /**
           * value: "PRESENT"
           * @const
           */
    PRESENT: string;
}
//# sourceMappingURL=PresenceStatus.d.ts.map