/**
 * The JobListing model module.
 * @module services_v1/model/JobListing
 * @version v1
 */
export class JobListing {
    /**
     * Constructs a <code>JobListing</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {JobListing} obj Optional instance to populate.
     * @return {JobListing} The populated <code>JobListing</code> instance.
     */
    static constructFromObject(data: any, obj: JobListing): JobListing;
    /**
     * Total result size of the query result.
     * @member {Number} totalResultSize
     * @type {Number}
     */
    totalResultSize: number;
    /**
     * A generated string used to pass information to your next request. If `nextPageToken` is returned, pass the value of `nextPageToken` to the `pageToken` to get next results.
     * @member {String} nextPageToken
     * @type {String}
     */
    nextPageToken: string;
    /**
     * A generated string used to pass information to your next request. If `previousPageToken` is returned, pass the value of `previousPageToken` to the `pageToken` to get previous page results.
     * @member {String} previousPageToken
     * @type {String}
     */
    previousPageToken: string;
    /**
     * List of job details for the given input.
     * @member {Array[]} jobs
     * @type {Array[]}
     */
    jobs: any[][];
}
//# sourceMappingURL=JobListing.d.ts.map