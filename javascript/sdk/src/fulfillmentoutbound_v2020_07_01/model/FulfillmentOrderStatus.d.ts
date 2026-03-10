/**
 * @typedef {'New'|'Received'|'Planning'|'Processing'|'Cancelled'|'Complete'|'CompletePartialled'|'Unfulfillable'|'Invalid'} FulfillmentOrderStatus
 */
export class FulfillmentOrderStatus {
    static constructFromObject(object: any): any;
    New: string;
    Received: string;
    Planning: string;
    Processing: string;
    Cancelled: string;
    Complete: string;
    CompletePartialled: string;
    Unfulfillable: string;
    Invalid: string;
}
//# sourceMappingURL=FulfillmentOrderStatus.d.ts.map