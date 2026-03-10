export type AccountType = "SHIPPER_ACCOUNT" | "SHIPPER_ACCOUNT_WITH_INVOICE" | "AMAZON_ACCOUNT";
/**
 * @typedef {'SHIPPER_ACCOUNT'|'SHIPPER_ACCOUNT_WITH_INVOICE'|'AMAZON_ACCOUNT'} AccountType
 */
export const AccountType: (() => void) & {
    SHIPPER_ACCOUNT: string;
    SHIPPER_ACCOUNT_WITH_INVOICE: string;
    AMAZON_ACCOUNT: string;
    constructFromObject: (object: any) => any;
};
//# sourceMappingURL=AccountType.d.ts.map