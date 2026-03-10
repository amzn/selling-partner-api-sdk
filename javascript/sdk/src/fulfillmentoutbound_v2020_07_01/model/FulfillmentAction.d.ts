export type FulfillmentAction = "Ship" | "Hold";
/**
 * @typedef {'Ship'|'Hold'} FulfillmentAction
 */
export const FulfillmentAction: (() => void) & {
    Ship: string;
    Hold: string;
    constructFromObject: (object: any) => any;
};
//# sourceMappingURL=FulfillmentAction.d.ts.map