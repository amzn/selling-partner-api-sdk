/**
* Enum class ShipmentType.
* @enum {String}
* @readonly
*/
export class ShipmentType {
    /**
      * Returns a <code>ShipmentType</code> enum value from a Javascript object name.
      * @param {Object} data The plain JavaScript object containing the name of the enum value.
      * @return {ShipmentType} The enum <code>ShipmentType</code> value.
      */
    static constructFromObject(object: any): ShipmentType;
    /**
           * value: "FORWARD"
           * @const
           */
    FORWARD: string;
    /**
           * value: "RETURNS"
           * @const
           */
    RETURNS: string;
}
//# sourceMappingURL=ShipmentType.d.ts.map