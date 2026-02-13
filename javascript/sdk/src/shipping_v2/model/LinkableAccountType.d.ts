/**
 * The LinkableAccountType model module.
 * @module shipping_v2/model/LinkableAccountType
 * @version v2
 */
export class LinkableAccountType {
    /**
     * Constructs a <code>LinkableAccountType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {LinkableAccountType} obj Optional instance to populate.
     * @return {LinkableAccountType} The populated <code>LinkableAccountType</code> instance.
     */
    static constructFromObject(data: any, obj: LinkableAccountType): LinkableAccountType;
    /**
     * @member {AccountType} accountType
     * @type {AccountType}
     */
    accountType: AccountType;
    /**
     * A list of CarrierAccountInput
     * @member {CarrierAccountInput[]} carrierAccountInputs
     * @type {CarrierAccountInput[]}
     */
    carrierAccountInputs: CarrierAccountInput[];
}
import { AccountType } from './AccountType.js';
import { CarrierAccountInput } from './CarrierAccountInput.js';
//# sourceMappingURL=LinkableAccountType.d.ts.map