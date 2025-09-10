/**
 * The LinkableCarrier model module.
 * @module shipping_v2/model/LinkableCarrier
 * @version v2
 */
export class LinkableCarrier {
    /**
     * Constructs a <code>LinkableCarrier</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {LinkableCarrier} obj Optional instance to populate.
     * @return {LinkableCarrier} The populated <code>LinkableCarrier</code> instance.
     */
    static constructFromObject(data: any, obj: LinkableCarrier): LinkableCarrier;
    /**
     * The carrier identifier for the offering, provided by the carrier.
     * @member {String} carrierId
     * @type {String}
     */
    carrierId: string;
    /**
     * A list of LinkableAccountType
     * @member {[LinkableAccountType]} linkableAccountTypes
     * @type {[LinkableAccountType]}
     */
    linkableAccountTypes: [LinkableAccountType];
}
import { LinkableAccountType } from './LinkableAccountType.js';
//# sourceMappingURL=LinkableCarrier.d.ts.map