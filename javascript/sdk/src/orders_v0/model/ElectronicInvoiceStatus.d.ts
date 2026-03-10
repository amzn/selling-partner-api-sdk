export type ElectronicInvoiceStatus = "NotRequired" | "NotFound" | "Processing" | "Errored" | "Accepted";
/**
 * @typedef {'NotRequired'|'NotFound'|'Processing'|'Errored'|'Accepted'} ElectronicInvoiceStatus
 */
export const ElectronicInvoiceStatus: (() => void) & {
    NotRequired: string;
    NotFound: string;
    Processing: string;
    Errored: string;
    Accepted: string;
    constructFromObject: (object: any) => any;
};
//# sourceMappingURL=ElectronicInvoiceStatus.d.ts.map