export type TransactionStatus = "EXPIRED" | "FAILED" | "FAILED_CREDITS_APPLIED" | "IN_PROGRESS" | "PENDING_USER_APPROVAL" | "SUCCESSFUL";
/**
 * @typedef {'EXPIRED'|'FAILED'|'FAILED_CREDITS_APPLIED'|'IN_PROGRESS'|'PENDING_USER_APPROVAL'|'SUCCESSFUL'} TransactionStatus
 */
export const TransactionStatus: (() => void) & {
    EXPIRED: string;
    FAILED: string;
    FAILED_CREDITS_APPLIED: string;
    IN_PROGRESS: string;
    PENDING_USER_APPROVAL: string;
    SUCCESSFUL: string;
    constructFromObject: (object: any) => any;
};
//# sourceMappingURL=TransactionStatus.d.ts.map