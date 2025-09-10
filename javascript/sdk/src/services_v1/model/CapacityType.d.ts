/**
* Enum class CapacityType.
* @enum {String}
* @readonly
*/
export class CapacityType {
    /**
      * Returns a <code>CapacityType</code> enum value from a Javascript object name.
      * @param {Object} data The plain JavaScript object containing the name of the enum value.
      * @return {CapacityType} The enum <code>CapacityType</code> value.
      */
    static constructFromObject(object: any): CapacityType;
    /**
           * value: "SCHEDULED_CAPACITY"
           * @const
           */
    SCHEDULED_CAPACITY: string;
    /**
           * value: "AVAILABLE_CAPACITY"
           * @const
           */
    AVAILABLE_CAPACITY: string;
    /**
           * value: "ENCUMBERED_CAPACITY"
           * @const
           */
    ENCUMBERED_CAPACITY: string;
    /**
           * value: "RESERVED_CAPACITY"
           * @const
           */
    RESERVED_CAPACITY: string;
}
//# sourceMappingURL=CapacityType.d.ts.map