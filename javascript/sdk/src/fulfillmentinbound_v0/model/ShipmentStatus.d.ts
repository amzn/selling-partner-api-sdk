/**
 * @typedef {'WORKING'|'SHIPPED'|'RECEIVING'|'CANCELLED'|'DELETED'|'CLOSED'|'ERROR'|'IN_TRANSIT'|'DELIVERED'|'CHECKED_IN'} ShipmentStatus
 */
export class ShipmentStatus {
    static constructFromObject(object: any): any;
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
}
//# sourceMappingURL=ShipmentStatus.d.ts.map