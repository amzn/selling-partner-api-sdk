/**
 * @typedef {'LOST_IN_TRANSIT'|'DAMAGED_IN_TRANSIT'|'DELIVERED_NOT_RECEIVED'|'ITEM_MISSING_SWITCHEROO'|'COD_ABUSE'} ClaimReason
 */
export class ClaimReason {
    static constructFromObject(object: any): any;
    LOST_IN_TRANSIT: string;
    DAMAGED_IN_TRANSIT: string;
    DELIVERED_NOT_RECEIVED: string;
    ITEM_MISSING_SWITCHEROO: string;
    COD_ABUSE: string;
}
//# sourceMappingURL=ClaimReason.d.ts.map