export type FulfillmentOrderStatus = "New" | "Received" | "Planning" | "Processing" | "Cancelled" | "Complete" | "CompletePartialled" | "Unfulfillable" | "Invalid";
/**
 * @typedef {'New'|'Received'|'Planning'|'Processing'|'Cancelled'|'Complete'|'CompletePartialled'|'Unfulfillable'|'Invalid'} FulfillmentOrderStatus
 */
export const FulfillmentOrderStatus: (() => void) & {
    New: string;
    Received: string;
    Planning: string;
    Processing: string;
    Cancelled: string;
    Complete: string;
    CompletePartialled: string;
    Unfulfillable: string;
    Invalid: string;
    constructFromObject: (object: any) => any;
};
//# sourceMappingURL=FulfillmentOrderStatus.d.ts.map