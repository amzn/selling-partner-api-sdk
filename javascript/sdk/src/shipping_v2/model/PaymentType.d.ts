export type PaymentType = "PAY_THROUGH_AMAZON" | "PAY_DIRECT_TO_CARRIER";
/**
 * @typedef {'PAY_THROUGH_AMAZON'|'PAY_DIRECT_TO_CARRIER'} PaymentType
 */
export const PaymentType: (() => void) & {
    PAY_THROUGH_AMAZON: string;
    PAY_DIRECT_TO_CARRIER: string;
    constructFromObject: (object: any) => any;
};
//# sourceMappingURL=PaymentType.d.ts.map