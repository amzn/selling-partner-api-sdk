/**
 * The BillOfLadingDownloadURL model module.
 * @module fulfillmentinbound_v0/model/BillOfLadingDownloadURL
 * @version v0
 */
export class BillOfLadingDownloadURL {
    /**
     * Constructs a <code>BillOfLadingDownloadURL</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {BillOfLadingDownloadURL} obj Optional instance to populate.
     * @return {BillOfLadingDownloadURL} The populated <code>BillOfLadingDownloadURL</code> instance.
     */
    static constructFromObject(data: any, obj: BillOfLadingDownloadURL): BillOfLadingDownloadURL;
    /**
     * URL to download the bill of lading for the package. Note: The URL will only be valid for 15 seconds
     * @member {String} downloadURL
     * @type {String}
     */
    downloadURL: string;
}
//# sourceMappingURL=BillOfLadingDownloadURL.d.ts.map