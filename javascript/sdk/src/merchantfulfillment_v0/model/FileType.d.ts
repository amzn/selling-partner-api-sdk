export type FileType = "application/pdf" | "application/zpl" | "image/png";
/**
 * @typedef {'application/pdf'|'application/zpl'|'image/png'} FileType
 */
export const FileType: (() => void) & {
    'application/pdf': string;
    'application/zpl': string;
    'image/png': string;
    constructFromObject: (object: any) => any;
};
//# sourceMappingURL=FileType.d.ts.map