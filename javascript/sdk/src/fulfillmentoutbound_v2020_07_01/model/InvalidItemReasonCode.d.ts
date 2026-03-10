export type InvalidItemReasonCode = "InvalidValues" | "DuplicateRequest" | "NoCompletedShipItems" | "NoReturnableQuantity";
/**
 * @typedef {'InvalidValues'|'DuplicateRequest'|'NoCompletedShipItems'|'NoReturnableQuantity'} InvalidItemReasonCode
 */
export const InvalidItemReasonCode: (() => void) & {
    InvalidValues: string;
    DuplicateRequest: string;
    NoCompletedShipItems: string;
    NoReturnableQuantity: string;
    constructFromObject: (object: any) => any;
};
//# sourceMappingURL=InvalidItemReasonCode.d.ts.map