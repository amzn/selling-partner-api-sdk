export type HttpMethod = "GET" | "POST";
/**
 * @typedef {'GET'|'POST'} HttpMethod
 */
export const HttpMethod: (() => void) & {
    GET: string;
    POST: string;
    constructFromObject: (object: any) => any;
};
//# sourceMappingURL=HttpMethod.d.ts.map