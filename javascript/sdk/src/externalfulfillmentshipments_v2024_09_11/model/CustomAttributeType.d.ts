/**
* Enum class CustomAttributeType.
* @enum {String}
* @readonly
*/
export class CustomAttributeType {
    /**
      * Returns a <code>CustomAttributeType</code> enum value from a Javascript object name.
      * @param {Object} data The plain JavaScript object containing the name of the enum value.
      * @return {CustomAttributeType} The enum <code>CustomAttributeType</code> value.
      */
    static constructFromObject(object: any): CustomAttributeType;
    /**
           * value: "STRING"
           * @const
           */
    STRING: string;
    /**
           * value: "BOOLEAN"
           * @const
           */
    BOOLEAN: string;
    /**
           * value: "INTEGER"
           * @const
           */
    INTEGER: string;
    /**
           * value: "DOUBLE"
           * @const
           */
    DOUBLE: string;
    /**
           * value: "JSON_STRING"
           * @const
           */
    JSON_STRING: string;
}
//# sourceMappingURL=CustomAttributeType.d.ts.map