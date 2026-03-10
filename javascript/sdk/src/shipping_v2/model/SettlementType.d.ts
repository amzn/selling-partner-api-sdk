export type SettlementType = "REFUND" | "CERTIFICATE_OF_FACT";
/**
 * @typedef {'REFUND'|'CERTIFICATE_OF_FACT'} SettlementType
 */
export const SettlementType: (() => void) & {
    REFUND: string;
    CERTIFICATE_OF_FACT: string;
    constructFromObject: (object: any) => any;
};
//# sourceMappingURL=SettlementType.d.ts.map