/**
 * @typedef {'PENDING_AVAILABILITY'|'PENDING'|'UNSHIPPED'|'PARTIALLY_SHIPPED'|'SHIPPED'|'CANCELLED'|'UNFULFILLABLE'} FulfillmentStatus
 */
export class FulfillmentStatus {
    static constructFromObject(object: any): any;
    PENDING_AVAILABILITY: string;
    PENDING: string;
    UNSHIPPED: string;
    PARTIALLY_SHIPPED: string;
    SHIPPED: string;
    CANCELLED: string;
    UNFULFILLABLE: string;
}
//# sourceMappingURL=FulfillmentStatus.d.ts.map