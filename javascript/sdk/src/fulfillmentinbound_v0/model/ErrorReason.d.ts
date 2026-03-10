export type ErrorReason = "DoesNotExist" | "InvalidASIN";
/**
 * @typedef {'DoesNotExist'|'InvalidASIN'} ErrorReason
 */
export const ErrorReason: (() => void) & {
    DoesNotExist: string;
    InvalidASIN: string;
    constructFromObject: (object: any) => any;
};
//# sourceMappingURL=ErrorReason.d.ts.map