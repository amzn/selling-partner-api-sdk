/**
 * The GetAccessPointsResult model module.
 * @module shipping_v2/model/GetAccessPointsResult
 * @version v2
 */
export class GetAccessPointsResult {
    /**
     * Constructs a <code>GetAccessPointsResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetAccessPointsResult} obj Optional instance to populate.
     * @return {GetAccessPointsResult} The populated <code>GetAccessPointsResult</code> instance.
     */
    static constructFromObject(data: any, obj: GetAccessPointsResult): GetAccessPointsResult;
    /**
     * Constructs a new <code>GetAccessPointsResult</code>.
     * The payload for the GetAccessPoints API.
     * @alias module:shipping_v2/model/GetAccessPointsResult
     * @class
     * @param accessPointsMap {{String: Array}} Map of type of access point to list of access points
     */
    constructor(accessPointsMap: {
        String: any[];
    });
    accessPointsMap: {
        String: any[];
    };
}
//# sourceMappingURL=GetAccessPointsResult.d.ts.map