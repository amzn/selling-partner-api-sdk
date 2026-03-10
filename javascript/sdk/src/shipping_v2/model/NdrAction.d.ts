export type NdrAction = "RESCHEDULE" | "REATTEMPT" | "RTO";
/**
 * @typedef {'RESCHEDULE'|'REATTEMPT'|'RTO'} NdrAction
 */
export const NdrAction: (() => void) & {
    RESCHEDULE: string;
    REATTEMPT: string;
    RTO: string;
    constructFromObject: (object: any) => any;
};
//# sourceMappingURL=NdrAction.d.ts.map