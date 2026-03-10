/**
 * @typedef {'PendingSchedule'|'PendingPickUp'|'PendingDropOff'|'LabelCanceled'|'PickedUp'|'DroppedOff'|'AtOriginFC'|'AtDestinationFC'|'Delivered'|'RejectedByBuyer'|'Undeliverable'|'ReturningToSeller'|'ReturnedToSeller'|'Lost'|'OutForDelivery'|'Damaged'} EasyShipShipmentStatus
 */
export class EasyShipShipmentStatus {
    static constructFromObject(object: any): any;
    PendingSchedule: string;
    PendingPickUp: string;
    PendingDropOff: string;
    LabelCanceled: string;
    PickedUp: string;
    DroppedOff: string;
    AtOriginFC: string;
    AtDestinationFC: string;
    Delivered: string;
    RejectedByBuyer: string;
    Undeliverable: string;
    ReturningToSeller: string;
    ReturnedToSeller: string;
    Lost: string;
    OutForDelivery: string;
    Damaged: string;
}
//# sourceMappingURL=EasyShipShipmentStatus.d.ts.map