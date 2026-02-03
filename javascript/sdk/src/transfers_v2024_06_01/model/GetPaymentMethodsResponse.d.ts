/**
 * The GetPaymentMethodsResponse model module.
 * @module transfers_v2024_06_01/model/GetPaymentMethodsResponse
 * @version 2024-06-01
 */
export class GetPaymentMethodsResponse {
    /**
     * Constructs a <code>GetPaymentMethodsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetPaymentMethodsResponse} obj Optional instance to populate.
     * @return {GetPaymentMethodsResponse} The populated <code>GetPaymentMethodsResponse</code> instance.
     */
    static constructFromObject(data: any, obj: GetPaymentMethodsResponse): GetPaymentMethodsResponse;
    /**
     * The list of payment methods with payment method details.
     * @member {Array[]} paymentMethods
     * @type {Array[]}
     */
    paymentMethods: any[][];
}
//# sourceMappingURL=GetPaymentMethodsResponse.d.ts.map