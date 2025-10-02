/**
* Enum class PackageStatus.
* @enum {String}
* @readonly
*/
export class PackageStatus {
    /**
      * Returns a <code>PackageStatus</code> enum value from a Javascript object name.
      * @param {Object} data The plain JavaScript object containing the name of the enum value.
      * @return {PackageStatus} The enum <code>PackageStatus</code> value.
      */
    static constructFromObject(object: any): PackageStatus;
    /**
           * value: "CREATED"
           * @const
           */
    CREATED: string;
    /**
           * value: "PICKUP_SLOT_RETRIEVED"
           * @const
           */
    PICKUP_SLOT_RETRIEVED: string;
    /**
           * value: "INVOICE_GENERATED"
           * @const
           */
    INVOICE_GENERATED: string;
    /**
           * value: "SHIPLABEL_GENERATED"
           * @const
           */
    SHIPLABEL_GENERATED: string;
    /**
           * value: "SHIPPED"
           * @const
           */
    SHIPPED: string;
    /**
           * value: "DELIVERED"
           * @const
           */
    DELIVERED: string;
}
//# sourceMappingURL=PackageStatus.d.ts.map