export type PackageStatus = "ReadyForPickup" | "PickedUp" | "AtOriginFC" | "AtDestinationFC" | "Delivered" | "Rejected" | "Undeliverable" | "ReturnedToSeller" | "LostInTransit" | "LabelCanceled" | "DamagedInTransit" | "OutForDelivery";
/**
 * @typedef {'ReadyForPickup'|'PickedUp'|'AtOriginFC'|'AtDestinationFC'|'Delivered'|'Rejected'|'Undeliverable'|'ReturnedToSeller'|'LostInTransit'|'LabelCanceled'|'DamagedInTransit'|'OutForDelivery'} PackageStatus
 */
export const PackageStatus: (() => void) & {
    ReadyForPickup: string;
    PickedUp: string;
    AtOriginFC: string;
    AtDestinationFC: string;
    Delivered: string;
    Rejected: string;
    Undeliverable: string;
    ReturnedToSeller: string;
    LostInTransit: string;
    LabelCanceled: string;
    DamagedInTransit: string;
    OutForDelivery: string;
    constructFromObject: (object: any) => any;
};
//# sourceMappingURL=PackageStatus.d.ts.map