/**
 * The ImportDetails model module.
 * @module vendororders_v1/model/ImportDetails
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
     * If the recipient requests, contains the shipment method of payment. This is for import PO's only.
     * @member {String} methodOfPayment
     * @type {String}
     */
    methodOfPayment: string;
    /**
     * Incoterms (International Commercial Terms) are used to divide transaction costs and responsibilities between buyer and seller and reflect state-of-the-art transportation practices. This is for import purchase orders only.
     * @member {String} internationalCommercialTerms
     * @type {String}
     */
    internationalCommercialTerms: string;
    /**
     * The port where goods on an import purchase order must be delivered by the vendor. This should only be specified when the internationalCommercialTerms is FOB.
     * @member {String} portOfDelivery
     * @type {String}
     */
    portOfDelivery: string;
    /**
     * Types and numbers of container(s) for import purchase orders. Can be a comma-separated list if the shipment has multiple containers. HC signifies a high-capacity container. Free-text field, limited to 64 characters. The format will be a comma-delimited list containing values of the type: $NUMBER_OF_CONTAINERS_OF_THIS_TYPE-$CONTAINER_TYPE. The list of values for the container type is: 40'(40-foot container), 40'HC (40-foot high-capacity container), 45', 45'HC, 30', 30'HC, 20', 20'HC.
     * @member {String} importContainers
     * @type {String}
     */
    importContainers: string;
    /**
     * Special instructions regarding the shipment. This field is for import purchase orders.
     * @member {String} shippingInstructions
     * @type {String}
     */
    shippingInstructions: string;
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
    namespace InternationalCommercialTermsEnum {
        let ExWorks: string;
        let FreeCarrier: string;
        let FreeOnBoard: string;
        let FreeAlongSideShip: string;
        let CarriagePaidTo: string;
        let CostAndFreight: string;
        let CarriageAndInsurancePaidTo: string;
        let CostInsuranceAndFreight: string;
        let DeliveredAtTerminal: string;
        let DeliveredAtPlace: string;
        let DeliverDutyPaid: string;
    }
    /**
     * *
     */
    type InternationalCommercialTermsEnum = string;
}
//# sourceMappingURL=ImportDetails.d.ts.map