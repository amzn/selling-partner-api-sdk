export type TransactionType = "CREDIT" | "DEBIT";
/**
 * @typedef {'CREDIT'|'DEBIT'} TransactionType
 */
export const TransactionType: (() => void) & {
    CREDIT: string;
    DEBIT: string;
    constructFromObject: (object: any) => any;
};
//# sourceMappingURL=TransactionType.d.ts.map