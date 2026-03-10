export type FulfillmentPolicy = "FillOrKill" | "FillAll" | "FillAllAvailable";
/**
 * @typedef {'FillOrKill'|'FillAll'|'FillAllAvailable'} FulfillmentPolicy
 */
export const FulfillmentPolicy: (() => void) & {
    FillOrKill: string;
    FillAll: string;
    FillAllAvailable: string;
    constructFromObject: (object: any) => any;
};
//# sourceMappingURL=FulfillmentPolicy.d.ts.map