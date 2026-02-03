/**
 * The PatchOperation model module.
 * @module listingsitems_v2021_08_01/model/PatchOperation
 * @version 2021-08-01
 */
export class PatchOperation {
    /**
     * Constructs a <code>PatchOperation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {PatchOperation} obj Optional instance to populate.
     * @return {PatchOperation} The populated <code>PatchOperation</code> instance.
     */
    static constructFromObject(data: any, obj: PatchOperation): PatchOperation;
    /**
     * Constructs a new <code>PatchOperation</code>.
     * Individual JSON Patch operation for an HTTP PATCH request.
     * @alias module:listingsitems_v2021_08_01/model/PatchOperation
     * @class
     * @param op {String} Type of JSON Patch operation. Supported JSON Patch operations include `add`, `replace`, `merge` and `delete`. Refer to <https://tools.ietf.org/html/rfc6902>.
     * @param path {String} JSON Pointer path of the element to patch. Refer to [JavaScript Object Notation (JSON) Patch](https://tools.ietf.org/html/rfc6902) for more information.
     */
    constructor(op: string, path: string);
    op: string;
    path: string;
    /**
     * JSON value to `add`, `replace`, `merge` or `delete`.
     * @member {Array[]} value
     * @type {Array[]}
     */
    value: any[][];
}
export namespace PatchOperation {
    namespace OpEnum {
        export let add: string;
        export let replace: string;
        export let merge: string;
        let _delete: string;
        export { _delete as delete };
    }
    /**
     * *
     */
    type OpEnum = string;
}
//# sourceMappingURL=PatchOperation.d.ts.map