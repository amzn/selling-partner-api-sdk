export type LabelStatus = "GENERATING" | "GENERATED" | "GENERATION_FAILED" | "NOT_READY";
/**
 * @typedef {'GENERATING'|'GENERATED'|'GENERATION_FAILED'|'NOT_READY'} LabelStatus
 */
export const LabelStatus: (() => void) & {
    GENERATING: string;
    GENERATED: string;
    GENERATION_FAILED: string;
    NOT_READY: string;
    constructFromObject: (object: any) => any;
};
//# sourceMappingURL=LabelStatus.d.ts.map