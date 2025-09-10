/**
* Enum class BarcodeInstruction.
* @enum {String}
* @readonly
*/
export class BarcodeInstruction {
    /**
      * Returns a <code>BarcodeInstruction</code> enum value from a Javascript object name.
      * @param {Object} data The plain JavaScript object containing the name of the enum value.
      * @return {BarcodeInstruction} The enum <code>BarcodeInstruction</code> value.
      */
    static constructFromObject(object: any): BarcodeInstruction;
    /**
           * value: "RequiresFNSKULabel"
           * @const
           */
    RequiresFNSKULabel: string;
    /**
           * value: "CanUseOriginalBarcode"
           * @const
           */
    CanUseOriginalBarcode: string;
    /**
           * value: "MustProvideSellerSKU"
           * @const
           */
    MustProvideSellerSKU: string;
}
//# sourceMappingURL=BarcodeInstruction.d.ts.map