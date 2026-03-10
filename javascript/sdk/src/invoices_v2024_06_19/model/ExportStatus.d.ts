export type ExportStatus = "REQUESTED" | "PROCESSING" | "DONE" | "ERROR";
/**
 * @typedef {'REQUESTED'|'PROCESSING'|'DONE'|'ERROR'} ExportStatus
 */
export const ExportStatus: (() => void) & {
    REQUESTED: string;
    PROCESSING: string;
    DONE: string;
    ERROR: string;
    constructFromObject: (object: any) => any;
};
//# sourceMappingURL=ExportStatus.d.ts.map