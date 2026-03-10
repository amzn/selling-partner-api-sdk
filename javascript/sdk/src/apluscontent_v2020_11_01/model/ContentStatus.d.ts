export type ContentStatus = "APPROVED" | "DRAFT" | "REJECTED" | "SUBMITTED";
/**
 * @typedef {'APPROVED'|'DRAFT'|'REJECTED'|'SUBMITTED'} ContentStatus
 */
export const ContentStatus: (() => void) & {
    APPROVED: string;
    DRAFT: string;
    REJECTED: string;
    SUBMITTED: string;
    constructFromObject: (object: any) => any;
};
//# sourceMappingURL=ContentStatus.d.ts.map