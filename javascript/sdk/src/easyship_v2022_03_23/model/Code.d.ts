export type Code = "InvalidInput" | "InvalidTimeSlotId" | "ScheduledPackageAlreadyExists" | "ScheduleWindowExpired" | "RetryableAfterGettingNewSlots" | "TimeSlotNotAvailable" | "ResourceNotFound" | "InvalidOrderState" | "RegionNotSupported" | "OrderNotEligibleForRescheduling" | "InternalServerError";
/**
 * @typedef {'InvalidInput'|'InvalidTimeSlotId'|'ScheduledPackageAlreadyExists'|'ScheduleWindowExpired'|'RetryableAfterGettingNewSlots'|'TimeSlotNotAvailable'|'ResourceNotFound'|'InvalidOrderState'|'RegionNotSupported'|'OrderNotEligibleForRescheduling'|'InternalServerError'} Code
 */
export const Code: (() => void) & {
    InvalidInput: string;
    InvalidTimeSlotId: string;
    ScheduledPackageAlreadyExists: string;
    ScheduleWindowExpired: string;
    RetryableAfterGettingNewSlots: string;
    TimeSlotNotAvailable: string;
    ResourceNotFound: string;
    InvalidOrderState: string;
    RegionNotSupported: string;
    OrderNotEligibleForRescheduling: string;
    InternalServerError: string;
    constructFromObject: (object: any) => any;
};
//# sourceMappingURL=Code.d.ts.map