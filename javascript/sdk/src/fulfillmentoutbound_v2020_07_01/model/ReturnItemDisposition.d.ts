export type ReturnItemDisposition = "Sellable" | "Defective" | "CustomerDamaged" | "CarrierDamaged" | "FulfillerDamaged";
/**
 * @typedef {'Sellable'|'Defective'|'CustomerDamaged'|'CarrierDamaged'|'FulfillerDamaged'} ReturnItemDisposition
 */
export const ReturnItemDisposition: (() => void) & {
    Sellable: string;
    Defective: string;
    CustomerDamaged: string;
    CarrierDamaged: string;
    FulfillerDamaged: string;
    constructFromObject: (object: any) => any;
};
//# sourceMappingURL=ReturnItemDisposition.d.ts.map