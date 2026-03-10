export type DocumentFormat = "PDF" | "PNG" | "ZPL";
/**
 * @typedef {'PDF'|'PNG'|'ZPL'} DocumentFormat
 */
export const DocumentFormat: (() => void) & {
    PDF: string;
    PNG: string;
    ZPL: string;
    constructFromObject: (object: any) => any;
};
//# sourceMappingURL=DocumentFormat.d.ts.map