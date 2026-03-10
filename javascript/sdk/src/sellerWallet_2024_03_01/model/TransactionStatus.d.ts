/**
 * @typedef {'EXPIRED'|'FAILED'|'FAILED_CREDITS_APPLIED'|'IN_PROGRESS'|'PENDING_USER_APPROVAL'|'SUCCESSFUL'} TransactionStatus
 */
export class TransactionStatus {
    static constructFromObject(object: any): any;
    EXPIRED: string;
    FAILED: string;
    FAILED_CREDITS_APPLIED: string;
    IN_PROGRESS: string;
    PENDING_USER_APPROVAL: string;
    SUCCESSFUL: string;
}
//# sourceMappingURL=TransactionStatus.d.ts.map