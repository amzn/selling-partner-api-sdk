export type Status = "SUCCESS" | "FAILURE";
/**
 * @typedef {'SUCCESS'|'FAILURE'} Status
 */
export const Status: (() => void) & {
    SUCCESS: string;
    FAILURE: string;
    constructFromObject: (object: any) => any;
};
//# sourceMappingURL=Status.d.ts.map