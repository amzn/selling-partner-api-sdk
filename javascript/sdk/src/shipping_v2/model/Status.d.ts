export type Status = "PreTransit" | "InTransit" | "Delivered" | "Lost" | "OutForDelivery" | "Rejected" | "Undeliverable" | "DeliveryAttempted" | "PickupCancelled" | "AwaitingCustomerPickup";
/**
 * @typedef {'PreTransit'|'InTransit'|'Delivered'|'Lost'|'OutForDelivery'|'Rejected'|'Undeliverable'|'DeliveryAttempted'|'PickupCancelled'|'AwaitingCustomerPickup'} Status
 */
export const Status: Readonly<{
    PreTransit: "PreTransit";
    InTransit: "InTransit";
    Delivered: "Delivered";
    Lost: "Lost";
    OutForDelivery: "OutForDelivery";
    Rejected: "Rejected";
    Undeliverable: "Undeliverable";
    DeliveryAttempted: "DeliveryAttempted";
    PickupCancelled: "PickupCancelled";
    AwaitingCustomerPickup: "AwaitingCustomerPickup";
    constructFromObject: (object: any) => any;
}>;
//# sourceMappingURL=Status.d.ts.map