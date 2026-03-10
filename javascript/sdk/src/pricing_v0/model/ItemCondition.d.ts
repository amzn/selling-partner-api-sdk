export type ItemCondition = "New" | "Used" | "Collectible" | "Refurbished" | "Club";
/**
 * @typedef {'New'|'Used'|'Collectible'|'Refurbished'|'Club'} ItemCondition
 */
export const ItemCondition: (() => void) & {
    New: string;
    Used: string;
    Collectible: string;
    Refurbished: string;
    Club: string;
    constructFromObject: (object: any) => any;
};
//# sourceMappingURL=ItemCondition.d.ts.map