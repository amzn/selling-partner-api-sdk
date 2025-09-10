/**
 * The EngineOutput model module.
 * @module vehicles_v2024_11_01/model/EngineOutput
 * @version 2024-11-01
 */
export class EngineOutput {
    /**
     * Constructs a <code>EngineOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {EngineOutput} obj Optional instance to populate.
     * @return {EngineOutput} The populated <code>EngineOutput</code> instance.
     */
    static constructFromObject(data: any, obj: EngineOutput): EngineOutput;
    /**
     * Constructs a new <code>EngineOutput</code>.
     * Engine power output of vehicle.
     * @alias module:vehicles_v2024_11_01/model/EngineOutput
     * @class
     * @param value {Number} Engine power value in specified unit.
     * @param unit {EngineOutputUnit}
     */
    constructor(value: number, unit: EngineOutputUnit);
    value: number;
    unit: EngineOutputUnit;
}
import { EngineOutputUnit } from './EngineOutputUnit.js';
//# sourceMappingURL=EngineOutput.d.ts.map