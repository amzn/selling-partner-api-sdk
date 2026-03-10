export type CustomerType = "Consumer" | "Business";
/**
 * @typedef {'Consumer'|'Business'} CustomerType
 */
export const CustomerType: (() => void) & {
    Consumer: string;
    Business: string;
    constructFromObject: (object: any) => any;
};
//# sourceMappingURL=CustomerType.d.ts.map