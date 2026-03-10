export type DocumentType = "PACKSLIP" | "LABEL" | "RECEIPT" | "CUSTOM_FORM";
/**
 * @typedef {'PACKSLIP'|'LABEL'|'RECEIPT'|'CUSTOM_FORM'} DocumentType
 */
export const DocumentType: (() => void) & {
    PACKSLIP: string;
    LABEL: string;
    RECEIPT: string;
    CUSTOM_FORM: string;
    constructFromObject: (object: any) => any;
};
//# sourceMappingURL=DocumentType.d.ts.map