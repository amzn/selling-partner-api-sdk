export type OrderChangeTypeEnum = "OrderStatusChange" | "BuyerRequestedChange";
/**
 * @typedef {'OrderStatusChange'|'BuyerRequestedChange'} OrderChangeTypeEnum
 */
export const OrderChangeTypeEnum: (() => void) & {
    OrderStatusChange: string;
    BuyerRequestedChange: string;
    constructFromObject: (object: any) => any;
};
//# sourceMappingURL=OrderChangeTypeEnum.d.ts.map