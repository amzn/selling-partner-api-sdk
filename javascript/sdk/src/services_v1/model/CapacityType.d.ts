export type CapacityType = "SCHEDULED_CAPACITY" | "AVAILABLE_CAPACITY" | "ENCUMBERED_CAPACITY" | "RESERVED_CAPACITY";
/**
 * @typedef {'SCHEDULED_CAPACITY'|'AVAILABLE_CAPACITY'|'ENCUMBERED_CAPACITY'|'RESERVED_CAPACITY'} CapacityType
 */
export const CapacityType: (() => void) & {
    SCHEDULED_CAPACITY: string;
    AVAILABLE_CAPACITY: string;
    ENCUMBERED_CAPACITY: string;
    RESERVED_CAPACITY: string;
    constructFromObject: (object: any) => any;
};
//# sourceMappingURL=CapacityType.d.ts.map