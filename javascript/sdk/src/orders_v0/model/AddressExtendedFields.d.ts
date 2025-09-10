/**
 * The AddressExtendedFields model module.
 * @module orders_v0/model/AddressExtendedFields
 * @version v0
 */
export class AddressExtendedFields {
    /**
     * Constructs a <code>AddressExtendedFields</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {AddressExtendedFields} obj Optional instance to populate.
     * @return {AddressExtendedFields} The populated <code>AddressExtendedFields</code> instance.
     */
    static constructFromObject(data: any, obj: AddressExtendedFields): AddressExtendedFields;
    /**
     * The street name.
     * @member {String} streetName
     * @type {String}
     */
    streetName: string;
    /**
     * The house, building, or property number associated with the location's street address.
     * @member {String} streetNumber
     * @type {String}
     */
    streetNumber: string;
    /**
     * The floor number/unit number in the building/private house number.
     * @member {String} complement
     * @type {String}
     */
    complement: string;
    /**
     * The neighborhood. This value is only used in some countries (such as Brazil).
     * @member {String} neighborhood
     * @type {String}
     */
    neighborhood: string;
}
//# sourceMappingURL=AddressExtendedFields.d.ts.map