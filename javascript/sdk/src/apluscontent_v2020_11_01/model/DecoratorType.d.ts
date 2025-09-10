/**
* Enum class DecoratorType.
* @enum {String}
* @readonly
*/
export class DecoratorType {
    /**
      * Returns a <code>DecoratorType</code> enum value from a Javascript object name.
      * @param {Object} data The plain JavaScript object containing the name of the enum value.
      * @return {DecoratorType} The enum <code>DecoratorType</code> value.
      */
    static constructFromObject(object: any): DecoratorType;
    /**
           * value: "LIST_ITEM"
           * @const
           */
    LIST_ITEM: string;
    /**
           * value: "LIST_ORDERED"
           * @const
           */
    LIST_ORDERED: string;
    /**
           * value: "LIST_UNORDERED"
           * @const
           */
    LIST_UNORDERED: string;
    /**
           * value: "STYLE_BOLD"
           * @const
           */
    STYLE_BOLD: string;
    /**
           * value: "STYLE_ITALIC"
           * @const
           */
    STYLE_ITALIC: string;
    /**
           * value: "STYLE_LINEBREAK"
           * @const
           */
    STYLE_LINEBREAK: string;
    /**
           * value: "STYLE_PARAGRAPH"
           * @const
           */
    STYLE_PARAGRAPH: string;
    /**
           * value: "STYLE_UNDERLINE"
           * @const
           */
    STYLE_UNDERLINE: string;
}
//# sourceMappingURL=DecoratorType.d.ts.map