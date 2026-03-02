export type ExportStatus = "REQUESTED" | "PROCESSING" | "DONE" | "ERROR";
/**
 * @typedef {'REQUESTED'|'PROCESSING'|'DONE'|'ERROR'} ExportStatus
 */
export const ExportStatus: Readonly<{
    REQUESTED: "REQUESTED";
    PROCESSING: "PROCESSING";
    DONE: "DONE";
    ERROR: "ERROR";
    constructFromObject: (object: any) => any;
}>;
//# sourceMappingURL=ExportStatus.d.ts.map