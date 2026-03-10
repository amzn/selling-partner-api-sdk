export type ClaimReason = "LOST_IN_TRANSIT" | "DAMAGED_IN_TRANSIT" | "DELIVERED_NOT_RECEIVED" | "ITEM_MISSING_SWITCHEROO" | "COD_ABUSE";
/**
 * @typedef {'LOST_IN_TRANSIT'|'DAMAGED_IN_TRANSIT'|'DELIVERED_NOT_RECEIVED'|'ITEM_MISSING_SWITCHEROO'|'COD_ABUSE'} ClaimReason
 */
export const ClaimReason: (() => void) & {
    LOST_IN_TRANSIT: string;
    DAMAGED_IN_TRANSIT: string;
    DELIVERED_NOT_RECEIVED: string;
    ITEM_MISSING_SWITCHEROO: string;
    COD_ABUSE: string;
    constructFromObject: (object: any) => any;
};
//# sourceMappingURL=ClaimReason.d.ts.map