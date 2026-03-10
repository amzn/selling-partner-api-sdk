export type ConditionType = "New" | "Used" | "Collectible" | "Refurbished" | "Club";
/**
 * @typedef {'New'|'Used'|'Collectible'|'Refurbished'|'Club'} ConditionType
 */
export const ConditionType: (() => void) & {
    New: string;
    Used: string;
    Collectible: string;
    Refurbished: string;
    Club: string;
    constructFromObject: (object: any) => any;
};
//# sourceMappingURL=ConditionType.d.ts.map