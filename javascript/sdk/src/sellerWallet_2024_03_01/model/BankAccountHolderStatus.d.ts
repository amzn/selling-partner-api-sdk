export type BankAccountHolderStatus = "ACTIVE" | "INACTIVE" | "UNDER_REVIEW" | "VERIFICATION_FAILED";
/**
 * @typedef {'ACTIVE'|'INACTIVE'|'UNDER_REVIEW'|'VERIFICATION_FAILED'} BankAccountHolderStatus
 */
export const BankAccountHolderStatus: (() => void) & {
    ACTIVE: string;
    INACTIVE: string;
    UNDER_REVIEW: string;
    VERIFICATION_FAILED: string;
    constructFromObject: (object: any) => any;
};
//# sourceMappingURL=BankAccountHolderStatus.d.ts.map