/**
 * The GetFulfillmentOrderResult model module.
 * @module fulfillmentoutbound_v2020_07_01/model/GetFulfillmentOrderResult
 * @version 2020-07-01
 */
export class GetFulfillmentOrderResult {
    /**
     * Constructs a <code>GetFulfillmentOrderResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetFulfillmentOrderResult} obj Optional instance to populate.
     * @return {GetFulfillmentOrderResult} The populated <code>GetFulfillmentOrderResult</code> instance.
     */
    static constructFromObject(data: any, obj: GetFulfillmentOrderResult): GetFulfillmentOrderResult;
    /**
     * Constructs a new <code>GetFulfillmentOrderResult</code>.
     * The request for the &#x60;getFulfillmentOrder&#x60; operation.
     * @alias module:fulfillmentoutbound_v2020_07_01/model/GetFulfillmentOrderResult
     * @class
     * @param fulfillmentOrder {FulfillmentOrder}
     * @param fulfillmentOrderItems {[FulfillmentOrderItem]} An array of fulfillment order item information.
     * @param returnItems {[ReturnItem]} An array of items that Amazon accepted for return. Returns empty if no items were accepted for return.
     * @param returnAuthorizations {[ReturnAuthorization]} An array of return authorization information.
     */
    constructor(fulfillmentOrder: FulfillmentOrder, fulfillmentOrderItems: [FulfillmentOrderItem], returnItems: [ReturnItem], returnAuthorizations: [ReturnAuthorization]);
    fulfillmentOrder: FulfillmentOrder;
    fulfillmentOrderItems: [FulfillmentOrderItem];
    returnItems: [ReturnItem];
    returnAuthorizations: [ReturnAuthorization];
    /**
     * An array of fulfillment shipment information.
     * @member {[FulfillmentShipment]} fulfillmentShipments
     * @type {[FulfillmentShipment]}
     */
    fulfillmentShipments: [FulfillmentShipment];
    /**
     * An array of various payment attributes related to this fulfillment order.
     * @member {[PaymentInformation]} paymentInformation
     * @type {[PaymentInformation]}
     */
    paymentInformation: [PaymentInformation];
}
import { FulfillmentOrder } from './FulfillmentOrder.js';
import { FulfillmentOrderItem } from './FulfillmentOrderItem.js';
import { ReturnItem } from './ReturnItem.js';
import { ReturnAuthorization } from './ReturnAuthorization.js';
import { FulfillmentShipment } from './FulfillmentShipment.js';
import { PaymentInformation } from './PaymentInformation.js';
//# sourceMappingURL=GetFulfillmentOrderResult.d.ts.map