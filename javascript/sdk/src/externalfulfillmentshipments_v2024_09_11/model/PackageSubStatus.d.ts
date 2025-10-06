/**
* Enum class PackageSubStatus.
* @enum {String}
* @readonly
*/
export class PackageSubStatus {
    /**
      * Returns a <code>PackageSubStatus</code> enum value from a Javascript object name.
      * @param {Object} data The plain JavaScript object containing the name of the enum value.
      * @return {PackageSubStatus} The enum <code>PackageSubStatus</code> value.
      */
    static constructFromObject(object: any): PackageSubStatus;
    /**
           * value: "OUT_FOR_DELIVERY"
           * @const
           */
    OUT_FOR_DELIVERY: string;
    /**
           * value: "DELIVERED"
           * @const
           */
    DELIVERED: string;
    /**
           * value: "NOT_DELIVERED"
           * @const
           */
    NOT_DELIVERED: string;
    /**
           * value: "UNDELIVERABLE"
           * @const
           */
    UNDELIVERABLE: string;
}
//# sourceMappingURL=PackageSubStatus.d.ts.map