export type FulfillmentStatus = "PENDING_AVAILABILITY" | "PENDING" | "UNSHIPPED" | "PARTIALLY_SHIPPED" | "SHIPPED" | "CANCELLED" | "UNFULFILLABLE";
/**
 * @typedef {'PENDING_AVAILABILITY'|'PENDING'|'UNSHIPPED'|'PARTIALLY_SHIPPED'|'SHIPPED'|'CANCELLED'|'UNFULFILLABLE'} FulfillmentStatus
 */
export const FulfillmentStatus: (() => void) & {
    PENDING_AVAILABILITY: string;
    PENDING: string;
    UNSHIPPED: string;
    PARTIALLY_SHIPPED: string;
    SHIPPED: string;
    CANCELLED: string;
    UNFULFILLABLE: string;
    constructFromObject: (object: any) => any;
};
//# sourceMappingURL=FulfillmentStatus.d.ts.map