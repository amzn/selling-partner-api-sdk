export type InboundStatus = "DRAFT" | "VALIDATING" | "CONFIRMED" | "CLOSED" | "EXPIRED" | "CANCELLED";
/**
 * @typedef {'DRAFT'|'VALIDATING'|'CONFIRMED'|'CLOSED'|'EXPIRED'|'CANCELLED'} InboundStatus
 */
export const InboundStatus: Readonly<{
    DRAFT: "DRAFT";
    VALIDATING: "VALIDATING";
    CONFIRMED: "CONFIRMED";
    CLOSED: "CLOSED";
    EXPIRED: "EXPIRED";
    CANCELLED: "CANCELLED";
    constructFromObject: (object: any) => any;
}>;
//# sourceMappingURL=InboundStatus.d.ts.map