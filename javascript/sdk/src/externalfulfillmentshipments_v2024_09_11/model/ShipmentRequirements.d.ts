/**
 * The ShipmentRequirements model module.
 * @module externalfulfillmentshipments_v2024_09_11/model/ShipmentRequirements
 * @version 2024-09-11
 */
export class ShipmentRequirements {
    /**
     * Constructs a <code>ShipmentRequirements</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ShipmentRequirements} obj Optional instance to populate.
     * @return {ShipmentRequirements} The populated <code>ShipmentRequirements</code> instance.
     */
    static constructFromObject(data: any, obj: ShipmentRequirements): ShipmentRequirements;
    /**
     * Constructs a new <code>ShipmentRequirements</code>.
     * Whether specific capabilities are enabled or required for the shipment.
     * @alias module:externalfulfillmentshipments_v2024_09_11/model/ShipmentRequirements
     * @class
     * @param pSlip {PackingSlipRequirement}
     * @param invoice {InvoiceRequirement}
     */
    constructor(pSlip: PackingSlipRequirement, invoice: InvoiceRequirement);
    pSlip: PackingSlipRequirement;
    invoice: InvoiceRequirement;
}
import { PackingSlipRequirement } from './PackingSlipRequirement.js';
import { InvoiceRequirement } from './InvoiceRequirement.js';
//# sourceMappingURL=ShipmentRequirements.d.ts.map