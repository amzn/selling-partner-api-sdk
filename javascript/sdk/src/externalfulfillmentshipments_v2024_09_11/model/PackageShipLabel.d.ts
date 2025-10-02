/**
 * The PackageShipLabel model module.
 * @module externalfulfillmentshipments_v2024_09_11/model/PackageShipLabel
 * @version 2024-09-11
 */
export class PackageShipLabel {
    /**
     * Constructs a <code>PackageShipLabel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {PackageShipLabel} obj Optional instance to populate.
     * @return {PackageShipLabel} The populated <code>PackageShipLabel</code> instance.
     */
    static constructFromObject(data: any, obj: PackageShipLabel): PackageShipLabel;
    /**
     * The package ID of the package.
     * @member {String} packageId
     * @type {String}
     */
    packageId: string;
    /**
     * @member {ShipLabelMetadata} shipLabelMetadata
     * @type {ShipLabelMetadata}
     */
    shipLabelMetadata: ShipLabelMetadata;
    /**
     * @member {DocumentV2} fileData
     * @type {DocumentV2}
     */
    fileData: DocumentV2;
    /**
     * @member {Status} status
     * @type {Status}
     */
    status: Status;
    /**
     * @member {Error} errorDetails
     * @type {Error}
     */
    errorDetails: Error;
}
import { ShipLabelMetadata } from './ShipLabelMetadata.js';
import { DocumentV2 } from './DocumentV2.js';
import { Status } from './Status.js';
import { Error } from './Error.js';
//# sourceMappingURL=PackageShipLabel.d.ts.map