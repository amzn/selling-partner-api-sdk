export type ShipmentStatus = "Purchased" | "RefundPending" | "RefundRejected" | "RefundApplied";
/**
 * @typedef {'Purchased'|'RefundPending'|'RefundRejected'|'RefundApplied'} ShipmentStatus
 */
export const ShipmentStatus: (() => void) & {
    Purchased: string;
    RefundPending: string;
    RefundRejected: string;
    RefundApplied: string;
    constructFromObject: (object: any) => any;
};
//# sourceMappingURL=ShipmentStatus.d.ts.map