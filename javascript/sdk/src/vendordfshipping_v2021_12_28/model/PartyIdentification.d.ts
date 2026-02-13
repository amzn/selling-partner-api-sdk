/**
 * The PartyIdentification model module.
 * @module vendordfshipping_v2021_12_28/model/PartyIdentification
 * @version 2021-12-28
 */
export class PartyIdentification {
    /**
     * Constructs a <code>PartyIdentification</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {PartyIdentification} obj Optional instance to populate.
     * @return {PartyIdentification} The populated <code>PartyIdentification</code> instance.
     */
    static constructFromObject(data: any, obj: PartyIdentification): PartyIdentification;
    /**
     * Constructs a new <code>PartyIdentification</code>.
     * The name, address, and tax details of a party.
     * @alias module:vendordfshipping_v2021_12_28/model/PartyIdentification
     * @class
     * @param partyId {String} The identifier of the party.
     */
    constructor(partyId: string);
    partyId: string;
    /**
     * @member {Address} address
     * @type {Address}
     */
    address: Address;
    /**
     * The tax registration details of the party.
     * @member {TaxRegistrationDetails[]} taxRegistrationDetails
     * @type {TaxRegistrationDetails[]}
     */
    taxRegistrationDetails: TaxRegistrationDetails[];
}
import { Address } from './Address.js';
import { TaxRegistrationDetails } from './TaxRegistrationDetails.js';
//# sourceMappingURL=PartyIdentification.d.ts.map