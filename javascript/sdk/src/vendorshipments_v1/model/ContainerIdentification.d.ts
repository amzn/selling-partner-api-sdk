/**
 * The ContainerIdentification model module.
 * @module vendorshipments_v1/model/ContainerIdentification
 * @version v1
 */
export class ContainerIdentification {
    /**
     * Constructs a <code>ContainerIdentification</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ContainerIdentification} obj Optional instance to populate.
     * @return {ContainerIdentification} The populated <code>ContainerIdentification</code> instance.
     */
    static constructFromObject(data: any, obj: ContainerIdentification): ContainerIdentification;
    /**
     * Constructs a new <code>ContainerIdentification</code>.
     * A list of carton identifiers.
     * @alias module:vendorshipments_v1/model/ContainerIdentification
     * @class
     * @param containerIdentificationType {String} The container identification type.
     * @param containerIdentificationNumber {String} Container identification number that adheres to the definition of the container identification type.
     */
    constructor(containerIdentificationType: string, containerIdentificationNumber: string);
    containerIdentificationType: string;
    containerIdentificationNumber: string;
}
export namespace ContainerIdentification {
    namespace ContainerIdentificationTypeEnum {
        let SSCC: string;
        let AMZNCC: string;
        let GTIN: string;
        let BPS: string;
        let CID: string;
    }
    /**
     * *
     */
    type ContainerIdentificationTypeEnum = string;
}
//# sourceMappingURL=ContainerIdentification.d.ts.map