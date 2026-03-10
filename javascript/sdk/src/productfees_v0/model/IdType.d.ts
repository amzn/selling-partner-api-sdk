export type IdType = "ASIN" | "SellerSKU";
/**
 * @typedef {'ASIN'|'SellerSKU'} IdType
 */
export const IdType: (() => void) & {
    ASIN: string;
    SellerSKU: string;
    constructFromObject: (object: any) => any;
};
//# sourceMappingURL=IdType.d.ts.map