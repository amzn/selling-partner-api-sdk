/**
 * @typedef {'IN_TRANSIT'|'DELIVERED'|'RETURNING'|'RETURNED'|'UNDELIVERABLE'|'DELAYED'|'AVAILABLE_FOR_PICKUP'|'CUSTOMER_ACTION'|'UNKNOWN'|'OUT_FOR_DELIVERY'|'DELIVERY_ATTEMPTED'|'PICKUP_SUCCESSFUL'|'PICKUP_CANCELLED'|'PICKUP_ATTEMPTED'|'PICKUP_SCHEDULED'|'RETURN_REQUEST_ACCEPTED'|'REFUND_ISSUED'|'RETURN_RECEIVED_IN_FC'} CurrentStatus
 */
export class CurrentStatus {
    static constructFromObject(object: any): any;
    IN_TRANSIT: string;
    DELIVERED: string;
    RETURNING: string;
    RETURNED: string;
    UNDELIVERABLE: string;
    DELAYED: string;
    AVAILABLE_FOR_PICKUP: string;
    CUSTOMER_ACTION: string;
    UNKNOWN: string;
    OUT_FOR_DELIVERY: string;
    DELIVERY_ATTEMPTED: string;
    PICKUP_SUCCESSFUL: string;
    PICKUP_CANCELLED: string;
    PICKUP_ATTEMPTED: string;
    PICKUP_SCHEDULED: string;
    RETURN_REQUEST_ACCEPTED: string;
    REFUND_ISSUED: string;
    RETURN_RECEIVED_IN_FC: string;
}
//# sourceMappingURL=CurrentStatus.d.ts.map