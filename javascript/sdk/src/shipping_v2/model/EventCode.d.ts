export type EventCode = "ReadyForReceive" | "PickupDone" | "Delivered" | "Departed" | "DeliveryAttempted" | "Lost" | "OutForDelivery" | "ArrivedAtCarrierFacility" | "Rejected" | "Undeliverable" | "PickupCancelled" | "ReturnInitiated" | "AvailableForPickup" | "RecipientRequestedAlternateDeliveryTiming";
/**
 * @typedef {'ReadyForReceive'|'PickupDone'|'Delivered'|'Departed'|'DeliveryAttempted'|'Lost'|'OutForDelivery'|'ArrivedAtCarrierFacility'|'Rejected'|'Undeliverable'|'PickupCancelled'|'ReturnInitiated'|'AvailableForPickup'|'RecipientRequestedAlternateDeliveryTiming'} EventCode
 */
export const EventCode: (() => void) & {
    ReadyForReceive: string;
    PickupDone: string;
    Delivered: string;
    Departed: string;
    DeliveryAttempted: string;
    Lost: string;
    OutForDelivery: string;
    ArrivedAtCarrierFacility: string;
    Rejected: string;
    Undeliverable: string;
    PickupCancelled: string;
    ReturnInitiated: string;
    AvailableForPickup: string;
    RecipientRequestedAlternateDeliveryTiming: string;
    constructFromObject: (object: any) => any;
};
//# sourceMappingURL=EventCode.d.ts.map