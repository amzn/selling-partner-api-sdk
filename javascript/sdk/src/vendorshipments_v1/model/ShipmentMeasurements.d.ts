/**
 * The ShipmentMeasurements model module.
 * @module vendorshipments_v1/model/ShipmentMeasurements
 * @version v1
 */
export class ShipmentMeasurements {
    /**
     * Constructs a <code>ShipmentMeasurements</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ShipmentMeasurements} obj Optional instance to populate.
     * @return {ShipmentMeasurements} The populated <code>ShipmentMeasurements</code> instance.
     */
    static constructFromObject(data: any, obj: ShipmentMeasurements): ShipmentMeasurements;
    /**
     * @member {Weight} grossShipmentWeight
     * @type {Weight}
     */
    grossShipmentWeight: Weight;
    /**
     * @member {Volume} shipmentVolume
     * @type {Volume}
     */
    shipmentVolume: Volume;
    /**
     * Number of cartons present in the shipment. Provide the cartonCount only for non-palletized shipments.
     * @member {Number} cartonCount
     * @type {Number}
     */
    cartonCount: number;
    /**
     * Number of pallets present in the shipment. Provide the palletCount only for palletized shipments.
     * @member {Number} palletCount
     * @type {Number}
     */
    palletCount: number;
}
import { Weight } from './Weight.js';
import { Volume } from './Volume.js';
//# sourceMappingURL=ShipmentMeasurements.d.ts.map