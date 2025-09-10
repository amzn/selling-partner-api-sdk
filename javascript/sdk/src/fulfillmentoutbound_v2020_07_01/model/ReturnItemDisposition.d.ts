/**
* Enum class ReturnItemDisposition.
* @enum {String}
* @readonly
*/
export class ReturnItemDisposition {
    /**
      * Returns a <code>ReturnItemDisposition</code> enum value from a Javascript object name.
      * @param {Object} data The plain JavaScript object containing the name of the enum value.
      * @return {ReturnItemDisposition} The enum <code>ReturnItemDisposition</code> value.
      */
    static constructFromObject(object: any): ReturnItemDisposition;
    /**
           * value: "Sellable"
           * @const
           */
    Sellable: string;
    /**
           * value: "Defective"
           * @const
           */
    Defective: string;
    /**
           * value: "CustomerDamaged"
           * @const
           */
    CustomerDamaged: string;
    /**
           * value: "CarrierDamaged"
           * @const
           */
    CarrierDamaged: string;
    /**
           * value: "FulfillerDamaged"
           * @const
           */
    FulfillerDamaged: string;
}
//# sourceMappingURL=ReturnItemDisposition.d.ts.map