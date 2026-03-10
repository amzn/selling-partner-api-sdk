export type PackageStatus = "CREATED" | "PICKUP_SLOT_RETRIEVED" | "INVOICE_GENERATED" | "SHIPLABEL_GENERATED" | "SHIPPED" | "DELIVERED";
/**
 * @typedef {'CREATED'|'PICKUP_SLOT_RETRIEVED'|'INVOICE_GENERATED'|'SHIPLABEL_GENERATED'|'SHIPPED'|'DELIVERED'} PackageStatus
 */
export const PackageStatus: (() => void) & {
    CREATED: string;
    PICKUP_SLOT_RETRIEVED: string;
    INVOICE_GENERATED: string;
    SHIPLABEL_GENERATED: string;
    SHIPPED: string;
    DELIVERED: string;
    constructFromObject: (object: any) => any;
};
//# sourceMappingURL=PackageStatus.d.ts.map