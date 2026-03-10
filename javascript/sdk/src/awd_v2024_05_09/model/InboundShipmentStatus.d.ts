export type InboundShipmentStatus = "CREATED" | "SHIPPED" | "IN_TRANSIT" | "RECEIVING" | "DELIVERED" | "CLOSED" | "CANCELLED";
/**
 * @typedef {'CREATED'|'SHIPPED'|'IN_TRANSIT'|'RECEIVING'|'DELIVERED'|'CLOSED'|'CANCELLED'} InboundShipmentStatus
 */
export const InboundShipmentStatus: (() => void) & {
    CREATED: string;
    SHIPPED: string;
    IN_TRANSIT: string;
    RECEIVING: string;
    DELIVERED: string;
    CLOSED: string;
    CANCELLED: string;
    constructFromObject: (object: any) => any;
};
//# sourceMappingURL=InboundShipmentStatus.d.ts.map