/**
 * @typedef {'PreTransit'|'InTransit'|'Delivered'|'Lost'|'OutForDelivery'|'Rejected'|'Undeliverable'|'DeliveryAttempted'|'PickupCancelled'|'AwaitingCustomerPickup'} Status
 */
export class Status {
    static constructFromObject(object: any): any;
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
}
//# sourceMappingURL=Status.d.ts.map