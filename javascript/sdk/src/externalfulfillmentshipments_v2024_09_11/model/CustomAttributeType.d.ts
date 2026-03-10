export type CustomAttributeType = "STRING" | "BOOLEAN" | "INTEGER" | "DOUBLE" | "JSON_STRING";
/**
 * @typedef {'STRING'|'BOOLEAN'|'INTEGER'|'DOUBLE'|'JSON_STRING'} CustomAttributeType
 */
export const CustomAttributeType: (() => void) & {
    STRING: string;
    BOOLEAN: string;
    INTEGER: string;
    DOUBLE: string;
    JSON_STRING: string;
    constructFromObject: (object: any) => any;
};
//# sourceMappingURL=CustomAttributeType.d.ts.map