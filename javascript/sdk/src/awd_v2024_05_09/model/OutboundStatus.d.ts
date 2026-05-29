export type OutboundStatus = "CONFIRMED" | "DRAFT" | "ELIGIBLE" | "EXECUTING" | "FAILURE" | "INELIGIBLE" | "INVENTORY_OUTBOUND" | "SUCCESS" | "VALIDATING";
/**
 * @typedef {'CONFIRMED'|'DRAFT'|'ELIGIBLE'|'EXECUTING'|'FAILURE'|'INELIGIBLE'|'INVENTORY_OUTBOUND'|'SUCCESS'|'VALIDATING'} OutboundStatus
 */
export const OutboundStatus: (() => void) & {
    CONFIRMED: string;
    DRAFT: string;
    ELIGIBLE: string;
    EXECUTING: string;
    FAILURE: string;
    INELIGIBLE: string;
    INVENTORY_OUTBOUND: string;
    SUCCESS: string;
    VALIDATING: string;
    constructFromObject: (object: any) => any;
};
//# sourceMappingURL=OutboundStatus.d.ts.map