/**
 * The ShipperInstruction model module.
 * @module shipping_v2/model/ShipperInstruction
 * @version v2
 */
export class ShipperInstruction {
    /**
     * Constructs a <code>ShipperInstruction</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ShipperInstruction} obj Optional instance to populate.
     * @return {ShipperInstruction} The populated <code>ShipperInstruction</code> instance.
     */
    static constructFromObject(data: any, obj: ShipperInstruction): ShipperInstruction;
    /**
     * The delivery notes for the shipment
     * @member {String} deliveryNotes
     * @type {String}
     */
    deliveryNotes: string;
}
//# sourceMappingURL=ShipperInstruction.d.ts.map