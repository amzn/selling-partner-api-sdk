/**
* Enum class ShipmentInvoiceStatus.
* @enum {String}
* @readonly
*/
export class ShipmentInvoiceStatus {
    /**
      * Returns a <code>ShipmentInvoiceStatus</code> enum value from a Javascript object name.
      * @param {Object} data The plain JavaScript object containing the name of the enum value.
      * @return {ShipmentInvoiceStatus} The enum <code>ShipmentInvoiceStatus</code> value.
      */
    static constructFromObject(object: any): ShipmentInvoiceStatus;
    /**
           * value: "Processing"
           * @const
           */
    Processing: string;
    /**
           * value: "Accepted"
           * @const
           */
    Accepted: string;
    /**
           * value: "Errored"
           * @const
           */
    Errored: string;
    /**
           * value: "NotFound"
           * @const
           */
    NotFound: string;
}
//# sourceMappingURL=ShipmentInvoiceStatus.d.ts.map