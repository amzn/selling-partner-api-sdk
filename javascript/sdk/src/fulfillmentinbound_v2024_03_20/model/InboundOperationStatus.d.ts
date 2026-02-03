/**
 * The InboundOperationStatus model module.
 * @module fulfillmentinbound_v2024_03_20/model/InboundOperationStatus
 * @version 2024-03-20
 */
export class InboundOperationStatus {
    /**
     * Constructs a <code>InboundOperationStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {InboundOperationStatus} obj Optional instance to populate.
     * @return {InboundOperationStatus} The populated <code>InboundOperationStatus</code> instance.
     */
    static constructFromObject(data: any, obj: InboundOperationStatus): InboundOperationStatus;
    /**
     * Constructs a new <code>InboundOperationStatus</code>.
     * GetInboundOperationStatus response.
     * @alias module:fulfillmentinbound_v2024_03_20/model/InboundOperationStatus
     * @class
     * @param operation {String} The name of the operation in the asynchronous API call.
     * @param operationId {String} The operation ID returned by the asynchronous API call.
     * @param operationProblems {Array[]} The problems in the processing of the asynchronous operation.
     * @param operationStatus {OperationStatus}
     */
    constructor(operation: string, operationId: string, operationProblems: any[][], operationStatus: OperationStatus);
    operation: string;
    operationId: string;
    operationProblems: any[][];
    operationStatus: OperationStatus;
}
import { OperationStatus } from './OperationStatus.js';
//# sourceMappingURL=InboundOperationStatus.d.ts.map