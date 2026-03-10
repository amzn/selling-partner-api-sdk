export type ShipmentStatus = "WORKING" | "SHIPPED" | "RECEIVING" | "CANCELLED" | "DELETED" | "CLOSED" | "ERROR" | "IN_TRANSIT" | "DELIVERED" | "CHECKED_IN";
/**
 * @typedef {'WORKING'|'SHIPPED'|'RECEIVING'|'CANCELLED'|'DELETED'|'CLOSED'|'ERROR'|'IN_TRANSIT'|'DELIVERED'|'CHECKED_IN'} ShipmentStatus
 */
export const ShipmentStatus: (() => void) & {
    WORKING: string;
    SHIPPED: string;
    RECEIVING: string;
    CANCELLED: string;
    DELETED: string;
    CLOSED: string;
    ERROR: string;
    IN_TRANSIT: string;
    DELIVERED: string;
    CHECKED_IN: string;
    constructFromObject: (object: any) => any;
};
//# sourceMappingURL=ShipmentStatus.d.ts.map