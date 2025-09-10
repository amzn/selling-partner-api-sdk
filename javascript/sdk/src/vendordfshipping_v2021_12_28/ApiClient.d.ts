/**
* Manages low level client-server communications, parameter marshalling, etc. There should not be any need for an
* application to use this class directly - the *Api and model classes provide the public API for the service. The
* contents of this file should be regarded as internal but are documented for completeness.
* @alias module:vendordfshipping_v2021_12_28/ApiClient
* @class
*/
export class ApiClient {
    /**
      * Enumeration of collection format separator strategies.
      * @enum {String}
      * @readonly
      */
    static readonly CollectionFormatEnum: {
        /**
             * Comma-separated values. Value: <code>csv</code>
             * @const
             */
        CSV: string;
        /**
             * Space-separated values. Value: <code>ssv</code>
             * @const
             */
        SSV: string;
        /**
             * Tab-separated values. Value: <code>tsv</code>
             * @const
             */
        TSV: string;
        /**
             * Pipe(|)-separated values. Value: <code>pipes</code>
             * @const
             */
        PIPES: string;
        /**
             * Native array. Value: <code>multi</code>
             * @const
             */
        MULTI: string;
    };
    /**
      * Parses an ISO-8601 string representation of a date value.
      * @param {String} str The date value as a string.
      * @returns {Date} The parsed date object.
      */
    static parseDate(str: string): Date;
    /**
      * Converts a value to the specified type.
      * @param {(String|Object)} data The data to convert, as a string or object.
      * @param {(String|Array<String>|Object<String, Object>|Function)} type The type to return. Pass a string for simple types
      * or the constructor function for a complex type. Pass an array containing the type name to return an array of that type. To
      * return an object, pass an object with one property whose name is the key type and whose value is the corresponding value type:
      * all properties on <code>data<code> will be converted to this type.
      * @returns An instance of the specified type or null or undefined if data is null or undefined.
      */
    static convertToType(data: (string | any), type: (string | Array<string> | any | Function)): any;
    /**
      * Constructs a new map or array model from REST data.
      * @param data {Object|Array} The REST data.
      * @param obj {Object|Array} The target object or array.
      */
    static constructFromObject(data: any | any[], obj: any | any[], itemType: any): void;
    /**
      * Constructs a new ApiClient.
      * @param {String} baseUrl Base URL of endpoint ex. "https://sellingpartnerapi-na.amazon.com"
      */
    constructor(baseUrl: string);
    /**
         * The base URL against which to resolve every API call's (relative) path.
         * @type {String}
         * @default https://sellingpartnerapi-na.amazon.com
         */
    basePath: string;
    /**
         * The authentication methods to be included for all API calls.
         * @type {Array<String>}
         */
    authentications: Array<string>;
    /**
         * The default HTTP headers to be included for all API calls.
         * @type {Array<String>}
         * @default {}
         */
    defaultHeaders: Array<string>;
    /**
         * The default HTTP timeout for all API calls.
         * @type {Number}
         * @default 60000
         */
    timeout: number;
    /**
         * If set to false an additional timestamp parameter is added to all API GET calls to
         * prevent browser caching
         * @type {Boolean}
         * @default true
         */
    cache: boolean;
    /**
         * If set to true, the client will save the cookies from each server
         * response, and return them in the next request.
         * @default false
         */
    enableCookies: boolean;
    agent: any;
    requestAgent: any;
    /**
      * Set customized rate limiter for one operation
      * For operations that customized rate limiter are not set
      * Will use default rate limiter
      * @param {String} operationName
      * @param {RateLimitConfiguration} config
      */
    setCustomizedRateLimiterForOperation(operationName: string, config: RateLimitConfiguration): void;
    /**
      * Disable customized rate limiter for one operation
      * Fall back to default rate limiter
      * @param {String} operationName
      */
    disableCustomizedRatelimiterForOperation(operationName: string): void;
    /**
      * Clear customized rate limiter for all operations
      * All operations will fall back to default rate limiter
      * @param {String} operationName
      */
    disableCustomizedRatelimiterForAll(): void;
    /**
      * Disable both default and customized rate limiter for all operations
      */
    disableRateLimiter(): void;
    /**
      * Enable default or customized rate limiter for all operations
      */
    enableRateLimiter(): void;
    /**
      * Returns this ApiClient so that you can chain the methods.
      * @param {String} clientId LWA client ID.
      * @param {String} clientSecret LWA client secret.
      * @param {String} refreshToken LWA refresh token.
      * @param {Array<String>} dataElementsOption specify PII information to get from "buyerInfo", "shippingAddress" and "buyerTaxInformation".
      * @returns {ApiClient} This ApiClient, which is going to use give accessToken for all API calls.
      */
    enableAutoRetrievalRestrictedDataToken(clientId: string, clientSecret: string, refreshToken: string, dataElementsOption: Array<string>): ApiClient;
    /**
      * Returns this ApiClient so that you can chain the methods.
      * @param {String} clientId LWA client ID.
      * @param {String} clientSecret LWA client secret.
      * @param {String|null} refreshToken LWA refresh token.
      * @param {String|null} scope LWA scope(s) for grantless operations.
      * @returns {ApiClient} This ApiClient, which is going to use give accessToken for all API calls.
      */
    enableAutoRetrievalAccessToken(clientId: string, clientSecret: string, refreshToken?: string | null, scope?: string | null): ApiClient;
    /**
       * Clear Token Cache
       */
    clearAccessTokenCache(): void;
    /**
      * Returns this ApiClient so that you can chain the methods.
      * @param {String} restrictedDataToken RDT token to use for SP-API call.
      * @returns {ApiClient} This ApiClient, which is going to use give RDT for all API calls.
      */
    applyRestrictedDataToken(restrictedDataToken: string): ApiClient;
    /**
      * Applies authentication headers to the request.
      * @param {String} accessOrRdtToken Either Access Token or Restricted Data Token to add as 'x-amz-access-token'.
      * @returns {ApiClient} This ApiClient, which is going to use give RDT for all API calls.
      */
    applyXAmzAccessTokenToRequest(accessOrRdtToken: string): ApiClient;
    /**
      * Returns a string representation for an actual parameter.
      * @param param The actual parameter.
      * @returns {String} The string representation of <code>param</code>.
      */
    paramToString(param: any): string;
    /**
      * Builds full URL by appending the given path to the base URL and replacing path parameter place-holders with parameter values.
      * NOTE: query parameters are not handled here.
      * @param {String} path The path to append to the base URL.
      * @param {Object} pathParams The parameter values to append.
      * @returns {String} The encoded path with parameter values substituted.
      */
    buildUrl(path: string, pathParams: any): string;
    /**
      * Checks whether the given content type represents JSON.<br>
      * JSON content type examples:<br>
      * <ul>
      * <li>application/json</li>
      * <li>application/json; charset=UTF8</li>
      * <li>APPLICATION/JSON</li>
      * </ul>
      * @param {String} contentType The MIME content type to check.
      * @returns {Boolean} <code>true</code> if <code>contentType</code> represents JSON, otherwise <code>false</code>.
      */
    isJsonMime(contentType: string): boolean;
    /**
      * Chooses a content type from the given array, with JSON preferred; i.e. return JSON if included, otherwise return the first.
      * @param {Array<String>} contentTypes
      * @returns {String} The chosen content type, preferring JSON.
      */
    jsonPreferredMime(contentTypes: Array<string>): string;
    /**
      * Checks whether the given parameter value represents file-like content.
      * @param param The parameter to check.
      * @returns {Boolean} <code>true</code> if <code>param</code> represents a file.
      */
    isFileParam(param: any): boolean;
    /**
      * Normalizes parameter values:
      * <ul>
      * <li>remove nils</li>
      * <li>keep files and arrays</li>
      * <li>format to string with `paramToString` for other cases</li>
      * </ul>
      * @param {Object<String, Object>} params The parameters as object properties.
      * @returns {Object<String, Object>} normalized parameters.
      */
    normalizeParams(params: any): any;
    /**
      * Builds a string representation of an array-type actual parameter, according to the given collection format.
      * @param {Array} param An array parameter.
      * @param {module:vendordfshipping_v2021_12_28/ApiClient.CollectionFormatEnum} collectionFormat The array element separator strategy.
      * @returns {String|Array} A string representation of the supplied collection, using the specified delimiter. Returns
      * <code>param</code> as is if <code>collectionFormat</code> is <code>multi</code>.
      */
    buildCollectionParam(param: any[], collectionFormat: any): string | any[];
    /**
      * Deserializes an HTTP response body into a value of the specified type.
      * @param {Object} response A SuperAgent response object.
      * @param {(String|Array<String>|Object<String, Object>|Function)} returnType The type to return. Pass a string for simple types
      * or the constructor function for a complex type. Pass an array containing the type name to return an array of that type. To
      * return an object, pass an object with one property whose name is the key type and whose value is the corresponding value type:
      * all properties on <code>data<code> will be converted to this type.
      * @returns A value of the specified type.
      */
    deserialize(response: any, returnType: (string | Array<string> | any | Function)): any;
    /**
      * Invokes the REST service using the supplied settings and parameters.
      * @param {String} operation operation name.
      * @param {String} path The base URL to invoke.
      * @param {String} httpMethod The HTTP method to use.
      * @param {Object<String, String>} pathParams A map of path parameters and their values.
      * @param {Object<String, Object>} queryParams A map of query parameters and their values.
      * @param {Object<String, Object>} headerParams A map of header parameters and their values.
      * @param {Object<String, Object>} formParams A map of form parameters and their values.
      * @param {Object} bodyParam The value to pass as the request body.
      * @param {Array<String>} contentTypes An array of request MIME types.
      * @param {Array<String>} accepts An array of acceptable response MIME types.
      * @param {(String|Array|ObjectFunction)} returnType The required type to return; can be a string for simple types or the
      * constructor for a complex type.
      * @param {SuperagentRateLimiter} defaultRateLimiter The default rate limiter.
      * @returns {Promise} A {@link https://www.promisejs.org/|Promise} object.
      */
    callApi(operation: string, path: string, httpMethod: string, pathParams: any, queryParams: any, headerParams: any, formParams: any, bodyParam: any, contentTypes: Array<string>, accepts: Array<string>, returnType: (string | any[] | ObjectFunction), defaultRateLimiter: SuperagentRateLimiter): Promise<any>;
    #private;
}
export namespace ApiClient {
    let instance: any;
}
import { RateLimitConfiguration } from '../../helper/RateLimitConfiguration.mjs';
import { SuperagentRateLimiter } from '../../helper/SuperagentRateLimiter.mjs';
//# sourceMappingURL=ApiClient.d.ts.map