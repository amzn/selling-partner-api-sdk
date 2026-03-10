export type RecurringFrequency = "DAILY" | "WEEKLY" | "BIWEEKLY" | "MONTHLY";
/**
 * @typedef {'DAILY'|'WEEKLY'|'BIWEEKLY'|'MONTHLY'} RecurringFrequency
 */
export const RecurringFrequency: (() => void) & {
    DAILY: string;
    WEEKLY: string;
    BIWEEKLY: string;
    MONTHLY: string;
    constructFromObject: (object: any) => any;
};
//# sourceMappingURL=RecurringFrequency.d.ts.map