/**
 * The OrderTaxRegistration model module.
 * @module orders_v2026_01_01/model/OrderTaxRegistration
 * @version 2026-01-01
 */
export class OrderTaxRegistration {
    /**
     * Constructs a <code>OrderTaxRegistration</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {OrderTaxRegistration} obj Optional instance to populate.
     * @return {OrderTaxRegistration} The populated <code>OrderTaxRegistration</code> instance.
     */
    static constructFromObject(data: Object, obj: OrderTaxRegistration): OrderTaxRegistration;
    /**
     * The type of entity that the tax registration belongs to.  **Possible values**: - `BUYER` (Indicates that this is the buyer's tax registration information) - `MERCHANT` (Indicates that this is the merchant's tax registration information) - `MARKETPLACE` (Indicates that this is the marketplace's tax registration information)
     * @member {String} entityType
     * @type {String}
     */
    entityType: string;
    /**
     * The legal name associated with the tax registration.
     * @member {String} legalName
     * @type {String}
     */
    legalName: string;
    /**
     * The type of the tax registration number.  **Possible values**: `BUSINESS`, `VAT`, `CST`, `CPF`, `CNPJ`
     * @member {String} taxRegistrationType
     * @type {String}
     */
    taxRegistrationType: string;
    /**
     * The tax registration number that identifies the entity for tax purposes.
     * @member {String} taxRegistrationNumber
     * @type {String}
     */
    taxRegistrationNumber: string;
    /**
     * @member {CustomerAddress} taxRegistrationAddress
     * @type {CustomerAddress}
     */
    taxRegistrationAddress: CustomerAddress;
    /**
     * Additional attributes related to the tax registration.
     * @member {TaxRegistrationAttribute[]} taxRegistrationAttributes
     * @type {TaxRegistrationAttribute[]}
     */
    taxRegistrationAttributes: TaxRegistrationAttribute[];
}
import { CustomerAddress } from './CustomerAddress.js';
import { TaxRegistrationAttribute } from './TaxRegistrationAttribute.js';
//# sourceMappingURL=OrderTaxRegistration.d.ts.map