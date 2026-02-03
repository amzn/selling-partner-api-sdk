/**
 * The InboundPackages model module.
 * @module awd_v2024_05_09/model/InboundPackages
 * @version 2024-05-09
 */
export class InboundPackages {
    /**
     * Constructs a <code>InboundPackages</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {InboundPackages} obj Optional instance to populate.
     * @return {InboundPackages} The populated <code>InboundPackages</code> instance.
     */
    static constructFromObject(data: any, obj: InboundPackages): InboundPackages;
    /**
     * Constructs a new <code>InboundPackages</code>.
     * Represents the packages to inbound.
     * @alias module:awd_v2024_05_09/model/InboundPackages
     * @class
     * @param packagesToInbound {Array[]} List of packages to be inbounded.
     */
    constructor(packagesToInbound: any[][]);
    packagesToInbound: any[][];
}
//# sourceMappingURL=InboundPackages.d.ts.map