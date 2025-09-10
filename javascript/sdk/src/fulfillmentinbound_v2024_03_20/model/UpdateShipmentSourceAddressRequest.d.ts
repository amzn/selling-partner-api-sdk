/**
 * The UpdateShipmentSourceAddressRequest model module.
 * @module fulfillmentinbound_v2024_03_20/model/UpdateShipmentSourceAddressRequest
 * @version 2024-03-20
 */
export class UpdateShipmentSourceAddressRequest {
    /**
     * Constructs a <code>UpdateShipmentSourceAddressRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {UpdateShipmentSourceAddressRequest} obj Optional instance to populate.
     * @return {UpdateShipmentSourceAddressRequest} The populated <code>UpdateShipmentSourceAddressRequest</code> instance.
     */
    static constructFromObject(data: any, obj: UpdateShipmentSourceAddressRequest): UpdateShipmentSourceAddressRequest;
    /**
     * Constructs a new <code>UpdateShipmentSourceAddressRequest</code>.
     * The &#x60;UpdateShipmentSourceAddress&#x60; request.
     * @alias module:fulfillmentinbound_v2024_03_20/model/UpdateShipmentSourceAddressRequest
     * @class
     * @param address {AddressInput}
     */
    constructor(address: AddressInput);
    address: AddressInput;
}
import { AddressInput } from './AddressInput.js';
//# sourceMappingURL=UpdateShipmentSourceAddressRequest.d.ts.map