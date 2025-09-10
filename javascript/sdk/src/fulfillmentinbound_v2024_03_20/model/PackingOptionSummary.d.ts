/**
 * The PackingOptionSummary model module.
 * @module fulfillmentinbound_v2024_03_20/model/PackingOptionSummary
 * @version 2024-03-20
 */
export class PackingOptionSummary {
    /**
     * Constructs a <code>PackingOptionSummary</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {PackingOptionSummary} obj Optional instance to populate.
     * @return {PackingOptionSummary} The populated <code>PackingOptionSummary</code> instance.
     */
    static constructFromObject(data: any, obj: PackingOptionSummary): PackingOptionSummary;
    /**
     * Constructs a new <code>PackingOptionSummary</code>.
     * Summary information about a packing option.
     * @alias module:fulfillmentinbound_v2024_03_20/model/PackingOptionSummary
     * @class
     * @param packingOptionId {String} Identifier of a packing option.
     * @param status {String} The status of a packing option. Possible values: 'OFFERED', 'ACCEPTED', 'EXPIRED'.
     */
    constructor(packingOptionId: string, status: string);
    packingOptionId: string;
    status: string;
}
//# sourceMappingURL=PackingOptionSummary.d.ts.map