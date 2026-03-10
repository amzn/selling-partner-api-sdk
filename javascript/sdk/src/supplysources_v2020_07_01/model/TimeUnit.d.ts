export type TimeUnit = "Hours" | "Minutes" | "Days";
/**
 * @typedef {'Hours'|'Minutes'|'Days'} TimeUnit
 */
export const TimeUnit: (() => void) & {
    Hours: string;
    Minutes: string;
    Days: string;
    constructFromObject: (object: any) => any;
};
//# sourceMappingURL=TimeUnit.d.ts.map