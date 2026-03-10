export type OperationStatus = "SUCCESS" | "FAILED" | "IN_PROGRESS";
/**
 * @typedef {'SUCCESS'|'FAILED'|'IN_PROGRESS'} OperationStatus
 */
export const OperationStatus: (() => void) & {
    SUCCESS: string;
    FAILED: string;
    IN_PROGRESS: string;
    constructFromObject: (object: any) => any;
};
//# sourceMappingURL=OperationStatus.d.ts.map