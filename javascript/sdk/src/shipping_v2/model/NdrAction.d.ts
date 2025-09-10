/**
* Enum class NdrAction.
* @enum {String}
* @readonly
*/
export class NdrAction {
    /**
      * Returns a <code>NdrAction</code> enum value from a Javascript object name.
      * @param {Object} data The plain JavaScript object containing the name of the enum value.
      * @return {NdrAction} The enum <code>NdrAction</code> value.
      */
    static constructFromObject(object: any): NdrAction;
    /**
           * value: "RESCHEDULE"
           * @const
           */
    RESCHEDULE: string;
    /**
           * value: "REATTEMPT"
           * @const
           */
    REATTEMPT: string;
    /**
           * value: "RTO"
           * @const
           */
    RTO: string;
}
//# sourceMappingURL=NdrAction.d.ts.map