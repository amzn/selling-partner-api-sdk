export type BarcodeInstruction = "RequiresFNSKULabel" | "CanUseOriginalBarcode" | "MustProvideSellerSKU";
/**
 * @typedef {'RequiresFNSKULabel'|'CanUseOriginalBarcode'|'MustProvideSellerSKU'} BarcodeInstruction
 */
export const BarcodeInstruction: (() => void) & {
    RequiresFNSKULabel: string;
    CanUseOriginalBarcode: string;
    MustProvideSellerSKU: string;
    constructFromObject: (object: any) => any;
};
//# sourceMappingURL=BarcodeInstruction.d.ts.map