/**
* Enum class HttpMethod.
* @enum {String}
* @readonly
*/
export class HttpMethod {
    /**
      * Returns a <code>HttpMethod</code> enum value from a Javascript object name.
      * @param {Object} data The plain JavaScript object containing the name of the enum value.
      * @return {HttpMethod} The enum <code>HttpMethod</code> value.
      */
    static constructFromObject(object: any): HttpMethod;
    /**
           * value: "GET"
           * @const
           */
    GET: string;
    /**
           * value: "PUT"
           * @const
           */
    PUT: string;
    /**
           * value: "PATCH"
           * @const
           */
    PATCH: string;
    /**
           * value: "DELETE"
           * @const
           */
    DELETE: string;
    /**
           * value: "POST"
           * @const
           */
    POST: string;
}
//# sourceMappingURL=HttpMethod.d.ts.map