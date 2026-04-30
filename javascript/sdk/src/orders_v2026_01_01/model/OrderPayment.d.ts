/**
 * The OrderPayment model module.
 * @module orders_v2026_01_01/model/OrderPayment
 * @version 2026-01-01
 */
export class OrderPayment {
    /**
     * Constructs a <code>OrderPayment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {OrderPayment} obj Optional instance to populate.
     * @return {OrderPayment} The populated <code>OrderPayment</code> instance.
     */
    static constructFromObject(data: Object, obj: OrderPayment): OrderPayment;
    /**
     * A list of payment executions for the order.
     * @member {PaymentExecution[]} paymentExecutions
     * @type {PaymentExecution[]}
     */
    paymentExecutions: PaymentExecution[];
}
import { PaymentExecution } from './PaymentExecution.js';
//# sourceMappingURL=OrderPayment.d.ts.map