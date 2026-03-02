export type VerificationStatus = "Pending" | "Approved" | "Rejected" | "Expired" | "Cancelled";
/**
 * @typedef {'Pending'|'Approved'|'Rejected'|'Expired'|'Cancelled'} VerificationStatus
 */
export const VerificationStatus: Readonly<{
    Pending: "Pending";
    Approved: "Approved";
    Rejected: "Rejected";
    Expired: "Expired";
    Cancelled: "Cancelled";
    constructFromObject: (object: any) => any;
}>;
//# sourceMappingURL=VerificationStatus.d.ts.map