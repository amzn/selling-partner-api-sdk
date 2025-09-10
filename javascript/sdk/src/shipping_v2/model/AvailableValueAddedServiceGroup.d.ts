/**
 * The AvailableValueAddedServiceGroup model module.
 * @module shipping_v2/model/AvailableValueAddedServiceGroup
 * @version v2
 */
export class AvailableValueAddedServiceGroup {
    /**
     * Constructs a <code>AvailableValueAddedServiceGroup</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {AvailableValueAddedServiceGroup} obj Optional instance to populate.
     * @return {AvailableValueAddedServiceGroup} The populated <code>AvailableValueAddedServiceGroup</code> instance.
     */
    static constructFromObject(data: any, obj: AvailableValueAddedServiceGroup): AvailableValueAddedServiceGroup;
    /**
     * Constructs a new <code>AvailableValueAddedServiceGroup</code>.
     * The value-added services available for purchase with a shipping service offering.
     * @alias module:shipping_v2/model/AvailableValueAddedServiceGroup
     * @class
     * @param groupId {String} The type of the value-added service group.
     * @param groupDescription {String} The name of the value-added service group.
     * @param isRequired {Boolean} When true, one or more of the value-added services listed must be specified.
     */
    constructor(groupId: string, groupDescription: string, isRequired: boolean);
    groupId: string;
    groupDescription: string;
    isRequired: boolean;
    /**
     * A list of optional value-added services available for purchase with a shipping service offering.
     * @member {[ValueAddedService]} valueAddedServices
     * @type {[ValueAddedService]}
     */
    valueAddedServices: [ValueAddedService];
}
import { ValueAddedService } from './ValueAddedService.js';
//# sourceMappingURL=AvailableValueAddedServiceGroup.d.ts.map