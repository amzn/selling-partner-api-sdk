/**
 * The DeleteTransferSchedule model module.
 * @module sellerWallet_2024_03_01/model/DeleteTransferSchedule
 * @version 2024-03-01
 */
export class DeleteTransferSchedule {
    /**
     * Constructs a <code>DeleteTransferSchedule</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {DeleteTransferSchedule} obj Optional instance to populate.
     * @return {DeleteTransferSchedule} The populated <code>DeleteTransferSchedule</code> instance.
     */
    static constructFromObject(data: any, obj: DeleteTransferSchedule): DeleteTransferSchedule;
    /**
     * Constructs a new <code>DeleteTransferSchedule</code>.
     * Response returned when the schedule transfer&#39;s delete request is successful.
     * @alias module:sellerWallet_2024_03_01/model/DeleteTransferSchedule
     * @class
     * @param code {String} A success code that specifies the delete operation was successful. eg:HTTP 200.
     * @param message {String} A message that describes the success condition of the delete schedule transaction.
     */
    constructor(code: string, message: string);
    code: string;
    message: string;
    /**
     * Additional details that can help the caller understand the operation execution.
     * @member {String} details
     * @type {String}
     */
    details: string;
}
//# sourceMappingURL=DeleteTransferSchedule.d.ts.map