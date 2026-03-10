export type FeeType = "MISCELLANEOUS_FEE" | "TAX" | "TRANSACTION_FEE";
/**
 * @typedef {'MISCELLANEOUS_FEE'|'TAX'|'TRANSACTION_FEE'} FeeType
 */
export const FeeType: (() => void) & {
    MISCELLANEOUS_FEE: string;
    TAX: string;
    TRANSACTION_FEE: string;
    constructFromObject: (object: any) => any;
};
//# sourceMappingURL=FeeType.d.ts.map