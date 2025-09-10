/**
 * The CreateContainerLabelResponse model module.
 * @module vendordfshipping_v2021_12_28/model/CreateContainerLabelResponse
 * @version 2021-12-28
 */
export class CreateContainerLabelResponse {
    /**
     * Constructs a <code>CreateContainerLabelResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {CreateContainerLabelResponse} obj Optional instance to populate.
     * @return {CreateContainerLabelResponse} The populated <code>CreateContainerLabelResponse</code> instance.
     */
    static constructFromObject(data: any, obj: CreateContainerLabelResponse): CreateContainerLabelResponse;
    /**
     * Constructs a new <code>CreateContainerLabelResponse</code>.
     * The response schema for the &#x60;createContainerLabel&#x60; operation.
     * @alias module:vendordfshipping_v2021_12_28/model/CreateContainerLabelResponse
     * @class
     * @param containerLabel {ContainerLabel}
     */
    constructor(containerLabel: ContainerLabel);
    containerLabel: ContainerLabel;
}
import { ContainerLabel } from './ContainerLabel.js';
//# sourceMappingURL=CreateContainerLabelResponse.d.ts.map