/**
 * The LabelDownloadURL model module.
 * @module fulfillmentinbound_v0/model/LabelDownloadURL
 * @version v0
 */
export class LabelDownloadURL {
    /**
     * Constructs a <code>LabelDownloadURL</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {LabelDownloadURL} obj Optional instance to populate.
     * @return {LabelDownloadURL} The populated <code>LabelDownloadURL</code> instance.
     */
    static constructFromObject(data: any, obj: LabelDownloadURL): LabelDownloadURL;
    /**
     * URL to download the label for the package. Note: The URL will only be valid for 15 seconds
     * @member {String} downloadURL
     * @type {String}
     */
    downloadURL: string;
}
//# sourceMappingURL=LabelDownloadURL.d.ts.map