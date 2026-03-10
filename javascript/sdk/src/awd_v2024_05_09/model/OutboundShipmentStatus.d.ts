export type OutboundShipmentStatus = "CREATED" | "IN_TRANSIT" | "DELIVERED" | "RECEIVING" | "RECEIVED" | "CLOSED" | "CANCELLED" | "FAILED";
/**
 * @typedef {'CREATED'|'IN_TRANSIT'|'DELIVERED'|'RECEIVING'|'RECEIVED'|'CLOSED'|'CANCELLED'|'FAILED'} OutboundShipmentStatus
 */
export const OutboundShipmentStatus: (() => void) & {
    CREATED: string;
    IN_TRANSIT: string;
    DELIVERED: string;
    RECEIVING: string;
    RECEIVED: string;
    CLOSED: string;
    CANCELLED: string;
    FAILED: string;
    constructFromObject: (object: any) => any;
};
//# sourceMappingURL=OutboundShipmentStatus.d.ts.map