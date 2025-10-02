/**
 * The PartyIdentificationInfo model module.
 * @module externalfulfillmentshipments_v2024_09_11/model/PartyIdentificationInfo
 * @version 2024-09-11
 */
export class PartyIdentificationInfo {
    /**
     * Constructs a <code>PartyIdentificationInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {PartyIdentificationInfo} obj Optional instance to populate.
     * @return {PartyIdentificationInfo} The populated <code>PartyIdentificationInfo</code> instance.
     */
    static constructFromObject(data: any, obj: PartyIdentificationInfo): PartyIdentificationInfo;
    /**
     * Constructs a new <code>PartyIdentificationInfo</code>.
     * Party identification details for the shipment, applicable to direct fulfillment shipments.
     * @alias module:externalfulfillmentshipments_v2024_09_11/model/PartyIdentificationInfo
     * @class
     * @param partyId {String} Assigned identification for the party. For example, a warehouse code or vendor code.
     * @param partyType {String} Assigned identification for the party. For example, a warehouse code or vendor code.
     */
    constructor(partyId: string, partyType: string);
    partyId: string;
    partyType: string;
    /**
     * @member {Address} address
     * @type {Address}
     */
    address: Address;
    /**
     * @member {TaxRegistrationInfo} taxInfo
     * @type {TaxRegistrationInfo}
     */
    taxInfo: TaxRegistrationInfo;
}
export namespace PartyIdentificationInfo {
    namespace PartyTypeEnum {
        let BILL_TO_PARTY: string;
        let SHIP_TO_PARTY: string;
        let SHIP_FROM_PARTY: string;
        let SELLING_PARTY: string;
    }
    /**
     * *
     */
    type PartyTypeEnum = string;
}
import { Address } from './Address.js';
import { TaxRegistrationInfo } from './TaxRegistrationInfo.js';
//# sourceMappingURL=PartyIdentificationInfo.d.ts.map