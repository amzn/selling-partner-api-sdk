/**
 * @typedef {'ReadyForPickup'|'PickedUp'|'AtOriginFC'|'AtDestinationFC'|'Delivered'|'Rejected'|'Undeliverable'|'ReturnedToSeller'|'LostInTransit'|'LabelCanceled'|'DamagedInTransit'|'OutForDelivery'} PackageStatus
 */
export class PackageStatus {
    static constructFromObject(object: any): any;
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
}
//# sourceMappingURL=PackageStatus.d.ts.map