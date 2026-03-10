export type BalanceType = "AVAILABLE" | "LOCKED_IN" | "LOCKED_OUT" | "TOTAL";
/**
 * @typedef {'AVAILABLE'|'LOCKED_IN'|'LOCKED_OUT'|'TOTAL'} BalanceType
 */
export const BalanceType: (() => void) & {
    AVAILABLE: string;
    LOCKED_IN: string;
    LOCKED_OUT: string;
    TOTAL: string;
    constructFromObject: (object: any) => any;
};
//# sourceMappingURL=BalanceType.d.ts.map