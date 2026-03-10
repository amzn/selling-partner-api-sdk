export type EligibilityStatus = "ELIGIBLE" | "INELIGIBLE" | "SUSPENDED" | "REPLENISHMENT_ONLY_ORDERING";
/**
 * @typedef {'ELIGIBLE'|'INELIGIBLE'|'SUSPENDED'|'REPLENISHMENT_ONLY_ORDERING'} EligibilityStatus
 */
export const EligibilityStatus: (() => void) & {
    ELIGIBLE: string;
    INELIGIBLE: string;
    SUSPENDED: string;
    REPLENISHMENT_ONLY_ORDERING: string;
    constructFromObject: (object: any) => any;
};
//# sourceMappingURL=EligibilityStatus.d.ts.map