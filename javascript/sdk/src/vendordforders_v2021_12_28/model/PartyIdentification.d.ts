/**
 * The PartyIdentification model module.
 * @module vendordforders_v2021_12_28/model/PartyIdentification
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
     * Name, address and tax details of a party.
     * @alias module:vendordforders_v2021_12_28/model/PartyIdentification
     * @class
     * @param partyId {String} Assigned identification for the party. For example, warehouse code or vendor code. Please refer to specific party for more details.
     */
    constructor(partyId: string);
    partyId: string;
    /**
     * @member {Address} address
     * @type {Address}
     */
    address: Address;
    /**
     * @member {TaxRegistrationDetails} taxInfo
     * @type {TaxRegistrationDetails}
     */
    taxInfo: TaxRegistrationDetails;
}
import { Address } from './Address.js';
import { TaxRegistrationDetails } from './TaxRegistrationDetails.js';
//# sourceMappingURL=PartyIdentification.d.ts.map