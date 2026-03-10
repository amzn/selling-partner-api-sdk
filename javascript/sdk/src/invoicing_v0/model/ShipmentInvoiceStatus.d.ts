export type ShipmentInvoiceStatus = "Processing" | "Accepted" | "Errored" | "NotFound";
/**
 * @typedef {'Processing'|'Accepted'|'Errored'|'NotFound'} ShipmentInvoiceStatus
 */
export const ShipmentInvoiceStatus: (() => void) & {
    Processing: string;
    Accepted: string;
    Errored: string;
    NotFound: string;
    constructFromObject: (object: any) => any;
};
//# sourceMappingURL=ShipmentInvoiceStatus.d.ts.map