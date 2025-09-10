/**
 * The TransportShipmentMeasurements model module.
 * @module vendorshipments_v1/model/TransportShipmentMeasurements
 * @version v1
 */
export class TransportShipmentMeasurements {
    /**
     * Constructs a <code>TransportShipmentMeasurements</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {TransportShipmentMeasurements} obj Optional instance to populate.
     * @return {TransportShipmentMeasurements} The populated <code>TransportShipmentMeasurements</code> instance.
     */
    static constructFromObject(data: any, obj: TransportShipmentMeasurements): TransportShipmentMeasurements;
    /**
     * Total number of cartons present in the shipment. Provide the cartonCount only for non-palletized shipments.
     * @member {Number} totalCartonCount
     * @type {Number}
     */
    totalCartonCount: number;
    /**
     * Total number of Stackable Pallets present in the shipment.
     * @member {Number} totalPalletStackable
     * @type {Number}
     */
    totalPalletStackable: number;
    /**
     * Total number of Non Stackable Pallets present in the shipment.
     * @member {Number} totalPalletNonStackable
     * @type {Number}
     */
    totalPalletNonStackable: number;
    /**
     * @member {Weight} shipmentWeight
     * @type {Weight}
     */
    shipmentWeight: Weight;
    /**
     * @member {Volume} shipmentVolume
     * @type {Volume}
     */
    shipmentVolume: Volume;
}
import { Weight } from './Weight.js';
import { Volume } from './Volume.js';
//# sourceMappingURL=TransportShipmentMeasurements.d.ts.map