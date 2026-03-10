/**
 * @typedef {'CREATED'|'PICKUP_SLOT_RETRIEVED'|'INVOICE_GENERATED'|'SHIPLABEL_GENERATED'|'SHIPPED'|'DELIVERED'} PackageStatus
 */
export class PackageStatus {
    static constructFromObject(object: any): any;
    CREATED: string;
    PICKUP_SLOT_RETRIEVED: string;
    INVOICE_GENERATED: string;
    SHIPLABEL_GENERATED: string;
    SHIPPED: string;
    DELIVERED: string;
}
//# sourceMappingURL=PackageStatus.d.ts.map