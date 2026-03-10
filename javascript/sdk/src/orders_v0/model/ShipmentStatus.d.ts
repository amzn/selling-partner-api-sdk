export type ShipmentStatus = "ReadyForPickup" | "PickedUp" | "RefusedPickup";
/**
 * @typedef {'ReadyForPickup'|'PickedUp'|'RefusedPickup'} ShipmentStatus
 */
export const ShipmentStatus: (() => void) & {
    ReadyForPickup: string;
    PickedUp: string;
    RefusedPickup: string;
    constructFromObject: (object: any) => any;
};
//# sourceMappingURL=ShipmentStatus.d.ts.map