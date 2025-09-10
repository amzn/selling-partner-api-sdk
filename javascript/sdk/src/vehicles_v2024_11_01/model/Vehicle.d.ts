/**
 * The Vehicle model module.
 * @module vehicles_v2024_11_01/model/Vehicle
 * @version 2024-11-01
 */
export class Vehicle {
    /**
     * Constructs a <code>Vehicle</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Vehicle} obj Optional instance to populate.
     * @return {Vehicle} The populated <code>Vehicle</code> instance.
     */
    static constructFromObject(data: any, obj: Vehicle): Vehicle;
    /**
     * Constructs a new <code>Vehicle</code>.
     * Combinations of attributes and unique identifier that represents a vehicle in vehicle list.
     * @alias module:vehicles_v2024_11_01/model/Vehicle
     * @class
     * @param make {String} Vehicle Brand.
     * @param model {String} Specific model of a vehicle.
     * @param identifiers {[VehicleIdentifiers]} Identifiers that can be used to identify the vehicle uniquely
     */
    constructor(make: string, model: string, identifiers: [VehicleIdentifiers]);
    make: string;
    model: string;
    identifiers: [VehicleIdentifiers];
    /**
     * Name of the vehicle variant.
     * @member {String} variantName
     * @type {String}
     */
    variantName: string;
    /**
     * Body style of vehicle (example: Hatchback, Cabriolet).
     * @member {String} bodyStyle
     * @type {String}
     */
    bodyStyle: string;
    /**
     * Drive type of vehicle(example: Rear wheel drive).
     * @member {String} driveType
     * @type {String}
     */
    driveType: string;
    /**
     * Energy Source for the vehicle(example: Petrol)
     * @member {String} energy
     * @type {String}
     */
    energy: string;
    /**
     * Engine output of vehicle.
     * @member {[EngineOutput]} engineOutput
     * @type {[EngineOutput]}
     */
    engineOutput: [EngineOutput];
    /**
     * @member {MonthAndYear} manufacturingStartDate
     * @type {MonthAndYear}
     */
    manufacturingStartDate: MonthAndYear;
    /**
     * @member {MonthAndYear} manufacturingStopDate
     * @type {MonthAndYear}
     */
    manufacturingStopDate: MonthAndYear;
    /**
     * The date on which the vehicle was last updated, in ISO-8601 date/time format.
     * @member {String} lastProcessedDate
     * @type {String}
     */
    lastProcessedDate: string;
    /**
     * @member {VehicleStatusInCatalog} status
     * @type {VehicleStatusInCatalog}
     */
    status: VehicleStatusInCatalog;
}
import { VehicleIdentifiers } from './VehicleIdentifiers.js';
import { EngineOutput } from './EngineOutput.js';
import { MonthAndYear } from './MonthAndYear.js';
import { VehicleStatusInCatalog } from './VehicleStatusInCatalog.js';
//# sourceMappingURL=Vehicle.d.ts.map