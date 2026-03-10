export type AccountStatus = "ACTIVE" | "INACTIVE" | "PENDING" | "SUSPENDED";
/**
 * @typedef {'ACTIVE'|'INACTIVE'|'PENDING'|'SUSPENDED'} AccountStatus
 */
export const AccountStatus: (() => void) & {
    ACTIVE: string;
    INACTIVE: string;
    PENDING: string;
    SUSPENDED: string;
    constructFromObject: (object: any) => any;
};
//# sourceMappingURL=AccountStatus.d.ts.map