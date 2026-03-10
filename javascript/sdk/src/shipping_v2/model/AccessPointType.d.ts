export type AccessPointType = "HELIX" | "CAMPUS_LOCKER" | "OMNI_LOCKER" | "ODIN_LOCKER" | "DOBBY_LOCKER" | "CORE_LOCKER" | "3P" | "CAMPUS_ROOM";
/**
 * @typedef {'HELIX'|'CAMPUS_LOCKER'|'OMNI_LOCKER'|'ODIN_LOCKER'|'DOBBY_LOCKER'|'CORE_LOCKER'|'3P'|'CAMPUS_ROOM'} AccessPointType
 */
export const AccessPointType: (() => void) & {
    HELIX: string;
    CAMPUS_LOCKER: string;
    OMNI_LOCKER: string;
    ODIN_LOCKER: string;
    DOBBY_LOCKER: string;
    CORE_LOCKER: string;
    '3P': string;
    CAMPUS_ROOM: string;
    constructFromObject: (object: any) => any;
};
//# sourceMappingURL=AccessPointType.d.ts.map