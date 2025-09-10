/**
* Enum class ElectronicInvoiceStatus.
* @enum {String}
* @readonly
*/
export class ElectronicInvoiceStatus {
    /**
      * Returns a <code>ElectronicInvoiceStatus</code> enum value from a Javascript object name.
      * @param {Object} data The plain JavaScript object containing the name of the enum value.
      * @return {ElectronicInvoiceStatus} The enum <code>ElectronicInvoiceStatus</code> value.
      */
    static constructFromObject(object: any): ElectronicInvoiceStatus;
    /**
           * value: "NotRequired"
           * @const
           */
    NotRequired: string;
    /**
           * value: "NotFound"
           * @const
           */
    NotFound: string;
    /**
           * value: "Processing"
           * @const
           */
    Processing: string;
    /**
           * value: "Errored"
           * @const
           */
    Errored: string;
    /**
           * value: "Accepted"
           * @const
           */
    Accepted: string;
}
//# sourceMappingURL=ElectronicInvoiceStatus.d.ts.map