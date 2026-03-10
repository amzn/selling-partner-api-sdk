export type OwnerConstraint = "AMAZON_ONLY" | "NONE_ONLY" | "SELLER_ONLY";
/**
 * @typedef {'AMAZON_ONLY'|'NONE_ONLY'|'SELLER_ONLY'} OwnerConstraint
 */
export const OwnerConstraint: (() => void) & {
    AMAZON_ONLY: string;
    NONE_ONLY: string;
    SELLER_ONLY: string;
    constructFromObject: (object: any) => any;
};
//# sourceMappingURL=OwnerConstraint.d.ts.map