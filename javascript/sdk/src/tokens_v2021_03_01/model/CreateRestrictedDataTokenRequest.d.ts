/**
 * The CreateRestrictedDataTokenRequest model module.
 * @module tokens_v2021_03_01/model/CreateRestrictedDataTokenRequest
 * @version 2021-03-01
 */
export class CreateRestrictedDataTokenRequest {
    /**
     * Constructs a <code>CreateRestrictedDataTokenRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {CreateRestrictedDataTokenRequest} obj Optional instance to populate.
     * @return {CreateRestrictedDataTokenRequest} The populated <code>CreateRestrictedDataTokenRequest</code> instance.
     */
    static constructFromObject(data: any, obj: CreateRestrictedDataTokenRequest): CreateRestrictedDataTokenRequest;
    /**
     * Constructs a new <code>CreateRestrictedDataTokenRequest</code>.
     * The request schema for the createRestrictedDataToken operation.
     * @alias module:tokens_v2021_03_01/model/CreateRestrictedDataTokenRequest
     * @class
     * @param restrictedResources {RestrictedResource[]} A list of restricted resources. Maximum: 50
     */
    constructor(restrictedResources: RestrictedResource[]);
    restrictedResources: RestrictedResource[];
    /**
     * The application ID for the target application to which access is being delegated.
     * @member {String} targetApplication
     * @type {String}
     */
    targetApplication: string;
}
import { RestrictedResource } from './RestrictedResource.js';
//# sourceMappingURL=CreateRestrictedDataTokenRequest.d.ts.map