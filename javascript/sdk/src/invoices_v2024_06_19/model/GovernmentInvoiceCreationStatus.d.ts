/**
* Enum class GovernmentInvoiceCreationStatus.
* @enum {String}
* @readonly
*/
export class GovernmentInvoiceCreationStatus {
    /**
      * Returns a <code>GovernmentInvoiceCreationStatus</code> enum value from a Javascript object name.
      * @param {Object} data The plain JavaScript object containing the name of the enum value.
      * @return {GovernmentInvoiceCreationStatus} The enum <code>GovernmentInvoiceCreationStatus</code> value.
      */
    static constructFromObject(object: any): GovernmentInvoiceCreationStatus;
    /**
           * value: "PROCESSING"
           * @const
           */
    PROCESSING: string;
    /**
           * value: "SUCCESS"
           * @const
           */
    SUCCESS: string;
    /**
           * value: "ERROR"
           * @const
           */
    ERROR: string;
}
//# sourceMappingURL=GovernmentInvoiceCreationStatus.d.ts.map