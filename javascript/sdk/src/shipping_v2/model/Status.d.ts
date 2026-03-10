export type Status = "PreTransit" | "InTransit" | "Delivered" | "Lost" | "OutForDelivery" | "Rejected" | "Undeliverable" | "DeliveryAttempted" | "PickupCancelled" | "AwaitingCustomerPickup";
/**
 * @typedef {'PreTransit'|'InTransit'|'Delivered'|'Lost'|'OutForDelivery'|'Rejected'|'Undeliverable'|'DeliveryAttempted'|'PickupCancelled'|'AwaitingCustomerPickup'} Status
 */
export const Status: (() => void) & {
    PreTransit: string;
    InTransit: string;
    Delivered: string;
    Lost: string;
    OutForDelivery: string;
    Rejected: string;
    Undeliverable: string;
    DeliveryAttempted: string;
    PickupCancelled: string;
    AwaitingCustomerPickup: string;
    constructFromObject: (object: any) => any;
};
//# sourceMappingURL=Status.d.ts.map