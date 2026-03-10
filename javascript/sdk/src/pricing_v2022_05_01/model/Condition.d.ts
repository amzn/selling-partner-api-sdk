export type Condition = "New" | "Used" | "Collectible" | "Refurbished" | "Club";
/**
 * @typedef {'New'|'Used'|'Collectible'|'Refurbished'|'Club'} Condition
 */
export const Condition: (() => void) & {
    New: string;
    Used: string;
    Collectible: string;
    Refurbished: string;
    Club: string;
    constructFromObject: (object: any) => any;
};
//# sourceMappingURL=Condition.d.ts.map