export type InboundStatus = "DRAFT" | "VALIDATING" | "CONFIRMED" | "CLOSED" | "EXPIRED" | "CANCELLED";
/**
 * @typedef {'DRAFT'|'VALIDATING'|'CONFIRMED'|'CLOSED'|'EXPIRED'|'CANCELLED'} InboundStatus
 */
export const InboundStatus: (() => void) & {
    DRAFT: string;
    VALIDATING: string;
    CONFIRMED: string;
    CLOSED: string;
    EXPIRED: string;
    CANCELLED: string;
    constructFromObject: (object: any) => any;
};
//# sourceMappingURL=InboundStatus.d.ts.map