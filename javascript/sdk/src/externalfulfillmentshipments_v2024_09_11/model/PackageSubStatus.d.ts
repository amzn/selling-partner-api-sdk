export type PackageSubStatus = "OUT_FOR_DELIVERY" | "DELIVERED" | "NOT_DELIVERED" | "UNDELIVERABLE";
/**
 * @typedef {'OUT_FOR_DELIVERY'|'DELIVERED'|'NOT_DELIVERED'|'UNDELIVERABLE'} PackageSubStatus
 */
export const PackageSubStatus: (() => void) & {
    OUT_FOR_DELIVERY: string;
    DELIVERED: string;
    NOT_DELIVERED: string;
    UNDELIVERABLE: string;
    constructFromObject: (object: any) => any;
};
//# sourceMappingURL=PackageSubStatus.d.ts.map