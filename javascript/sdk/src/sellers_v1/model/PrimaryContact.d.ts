/**
 * The PrimaryContact model module.
 * @module sellers_v1/model/PrimaryContact
 * @version v1
 */
export class PrimaryContact {
    /**
     * Constructs a <code>PrimaryContact</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {PrimaryContact} obj Optional instance to populate.
     * @return {PrimaryContact} The populated <code>PrimaryContact</code> instance.
     */
    static constructFromObject(data: any, obj: PrimaryContact): PrimaryContact;
    /**
     * Constructs a new <code>PrimaryContact</code>.
     * Information about the seller&#39;s primary contact.
     * @alias module:sellers_v1/model/PrimaryContact
     * @class
     * @param name {String} The full name of the seller's primary contact.
     * @param address {Address}
     */
    constructor(name: string, address: Address);
    name: string;
    address: Address;
    /**
     * The non-Latin script version of the primary contact's name, if applicable.
     * @member {String} nonLatinName
     * @type {String}
     */
    nonLatinName: string;
}
import { Address } from './Address.js';
//# sourceMappingURL=PrimaryContact.d.ts.map