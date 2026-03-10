export type PaymentMethodType = "BANK_ACCOUNT" | "CARD" | "SELLER_WALLET";
/**
 * @typedef {'BANK_ACCOUNT'|'CARD'|'SELLER_WALLET'} PaymentMethodType
 */
export const PaymentMethodType: (() => void) & {
    BANK_ACCOUNT: string;
    CARD: string;
    SELLER_WALLET: string;
    constructFromObject: (object: any) => any;
};
//# sourceMappingURL=PaymentMethodType.d.ts.map