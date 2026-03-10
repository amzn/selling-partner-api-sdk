export type CarrierWillPickUpOption = "CarrierWillPickUp" | "ShipperWillDropOff" | "NoPreference";
/**
 * @typedef {'CarrierWillPickUp'|'ShipperWillDropOff'|'NoPreference'} CarrierWillPickUpOption
 */
export const CarrierWillPickUpOption: (() => void) & {
    CarrierWillPickUp: string;
    ShipperWillDropOff: string;
    NoPreference: string;
    constructFromObject: (object: any) => any;
};
//# sourceMappingURL=CarrierWillPickUpOption.d.ts.map