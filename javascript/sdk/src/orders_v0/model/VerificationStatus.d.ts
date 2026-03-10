export type VerificationStatus = "Pending" | "Approved" | "Rejected" | "Expired" | "Cancelled";
/**
 * @typedef {'Pending'|'Approved'|'Rejected'|'Expired'|'Cancelled'} VerificationStatus
 */
export const VerificationStatus: (() => void) & {
    Pending: string;
    Approved: string;
    Rejected: string;
    Expired: string;
    Cancelled: string;
    constructFromObject: (object: any) => any;
};
//# sourceMappingURL=VerificationStatus.d.ts.map