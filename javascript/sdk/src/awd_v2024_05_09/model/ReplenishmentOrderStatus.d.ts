export type ReplenishmentOrderStatus = "CONFIRMED" | "CREATED" | "ELIGIBLE" | "EXECUTING" | "FAILURE" | "INELIGIBLE" | "INVENTORY_OUTBOUND" | "SUCCESS" | "VALIDATING";
/**
 * @typedef {'CONFIRMED'|'CREATED'|'ELIGIBLE'|'EXECUTING'|'FAILURE'|'INELIGIBLE'|'INVENTORY_OUTBOUND'|'SUCCESS'|'VALIDATING'} ReplenishmentOrderStatus
 */
export const ReplenishmentOrderStatus: (() => void) & {
    CONFIRMED: string;
    CREATED: string;
    ELIGIBLE: string;
    EXECUTING: string;
    FAILURE: string;
    INELIGIBLE: string;
    INVENTORY_OUTBOUND: string;
    SUCCESS: string;
    VALIDATING: string;
    constructFromObject: (object: any) => any;
};
//# sourceMappingURL=ReplenishmentOrderStatus.d.ts.map