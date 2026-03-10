export type HttpMethod = "GET" | "PUT" | "PATCH" | "DELETE" | "POST";
/**
 * @typedef {'GET'|'PUT'|'PATCH'|'DELETE'|'POST'} HttpMethod
 */
export const HttpMethod: (() => void) & {
    GET: string;
    PUT: string;
    PATCH: string;
    DELETE: string;
    POST: string;
    constructFromObject: (object: any) => any;
};
//# sourceMappingURL=HttpMethod.d.ts.map