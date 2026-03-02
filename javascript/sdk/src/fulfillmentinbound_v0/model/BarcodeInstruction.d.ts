export type BarcodeInstruction = "RequiresFNSKULabel" | "CanUseOriginalBarcode" | "MustProvideSellerSKU";
/**
 * @typedef {'RequiresFNSKULabel'|'CanUseOriginalBarcode'|'MustProvideSellerSKU'} BarcodeInstruction
 */
export const BarcodeInstruction: Readonly<{
    RequiresFNSKULabel: "RequiresFNSKULabel";
    CanUseOriginalBarcode: "CanUseOriginalBarcode";
    MustProvideSellerSKU: "MustProvideSellerSKU";
    constructFromObject: (object: any) => any;
}>;
//# sourceMappingURL=BarcodeInstruction.d.ts.map