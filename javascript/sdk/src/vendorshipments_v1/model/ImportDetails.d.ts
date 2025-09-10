/**
 * The ImportDetails model module.
 * @module vendorshipments_v1/model/ImportDetails
 * @version v1
 */
export class ImportDetails {
    /**
     * Constructs a <code>ImportDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ImportDetails} obj Optional instance to populate.
     * @return {ImportDetails} The populated <code>ImportDetails</code> instance.
     */
    static constructFromObject(data: any, obj: ImportDetails): ImportDetails;
    /**
     * This is used for import purchase orders only. If the recipient requests, this field will contain the shipment method of payment.
     * @member {String} methodOfPayment
     * @type {String}
     */
    methodOfPayment: string;
    /**
     * The container's seal number.
     * @member {String} sealNumber
     * @type {String}
     */
    sealNumber: string;
    /**
     * @member {Route} route
     * @type {Route}
     */
    route: Route;
    /**
     * Types and numbers of container(s) for import purchase orders. Can be a comma-separated list if shipment has multiple containers.
     * @member {String} importContainers
     * @type {String}
     */
    importContainers: string;
    /**
     * @member {Weight} billableWeight
     * @type {Weight}
     */
    billableWeight: Weight;
    /**
     * Date on which the shipment is expected to be shipped. This value should not be in the past and not more than 60 days out in the future.
     * @member {Date} estimatedShipByDate
     * @type {Date}
     */
    estimatedShipByDate: Date;
    /**
     * Identification of the instructions on how specified item/carton/pallet should be handled.
     * @member {String} handlingInstructions
     * @type {String}
     */
    handlingInstructions: string;
}
export namespace ImportDetails {
    namespace MethodOfPaymentEnum {
        let PaidByBuyer: string;
        let CollectOnDelivery: string;
        let DefinedByBuyerAndSeller: string;
        let FOBPortOfCall: string;
        let PrepaidBySeller: string;
        let PaidBySeller: string;
    }
    /**
     * *
     */
    type MethodOfPaymentEnum = string;
    namespace HandlingInstructionsEnum {
        let Oversized: string;
        let Fragile: string;
        let Food: string;
        let HandleWithCare: string;
    }
    /**
     * *
     */
    type HandlingInstructionsEnum = string;
}
import { Route } from './Route.js';
import { Weight } from './Weight.js';
//# sourceMappingURL=ImportDetails.d.ts.map