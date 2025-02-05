import fs from 'node:fs'

const models = [
    "../../selling-partner-api-models/models/amazon-warehousing-and-distribution-model/awd_2024-05-09.json",
    "../../selling-partner-api-models/models/aplus-content-api-model/aplusContent_2020-11-01.json",
    "../../selling-partner-api-models/models/application-integrations-api-model/appIntegrations-2024-04-01.json",
    "../../selling-partner-api-models/models/application-management-api-model/application_2023-11-30.json",
    "../../selling-partner-api-models/models/catalog-items-api-model/catalogItems_2022-04-01.json",
    "../../selling-partner-api-models/models/data-kiosk-api-model/dataKiosk_2023-11-15.json",
    "../../selling-partner-api-models/models/easy-ship-model/easyShip_2022-03-23.json",
    "../../selling-partner-api-models/models/fba-inbound-eligibility-api-model/fbaInbound.json",
    "../../selling-partner-api-models/models/fba-inventory-api-model/fbaInventory.json",
    "../../selling-partner-api-models/models/feeds-api-model/feeds_2021-06-30.json",
    "../../selling-partner-api-models/models/finances-api-model/financesV0.json",
    "../../selling-partner-api-models/models/finances-api-model/transfers_2024-06-01.json",
    "../../selling-partner-api-models/models/finances-api-model/finances_2024-06-19.json",
    "../../selling-partner-api-models/models/fulfillment-inbound-api-model/fulfillmentInboundV0.json",
    "../../selling-partner-api-models/models/fulfillment-inbound-api-model/fulfillmentInbound_2024-03-20.json",
    "../../selling-partner-api-models/models/fulfillment-outbound-api-model/fulfillmentOutbound_2020-07-01.json",
    "../../selling-partner-api-models/models/invoices-api-model/InvoicesApiModel_2024-06-19.json",
    "../../selling-partner-api-models/models/listings-items-api-model/listingsItems_2021-08-01.json",
    "../../selling-partner-api-models/models/listings-restrictions-api-model/listingsRestrictions_2021-08-01.json",
    "../../selling-partner-api-models/models/merchant-fulfillment-api-model/merchantFulfillmentV0.json",
    "../../selling-partner-api-models/models/messaging-api-model/messaging.json",
    "../../selling-partner-api-models/models/notifications-api-model/notifications.json",
    "../../selling-partner-api-models/models/orders-api-model/ordersV0.json",
    "../../selling-partner-api-models/models/product-fees-api-model/productFeesV0.json",
    "../../selling-partner-api-models/models/product-pricing-api-model/productPricingV0.json",
    "../../selling-partner-api-models/models/product-pricing-api-model/productPricing_2022-05-01.json",
    "../../selling-partner-api-models/models/product-type-definitions-api-model/definitionsProductTypes_2020-09-01.json",
    "../../selling-partner-api-models/models/replenishment-api-model/replenishment-2022-11-07.json",
    "../../selling-partner-api-models/models/reports-api-model/reports_2021-06-30.json",
    "../../selling-partner-api-models/models/sales-api-model/sales.json",
    "../../selling-partner-api-models/models/sellers-api-model/sellers.json",
    "../../selling-partner-api-models/models/services-api-model/services.json",
    "../../selling-partner-api-models/models/shipment-invoicing-api-model/shipmentInvoicingV0.json",
    "../../selling-partner-api-models/models/shipping-api-model/shippingV2.json",
    "../../selling-partner-api-models/models/solicitations-api-model/solicitations.json",
    "../../selling-partner-api-models/models/supply-sources-api-model/supplySources_2020-07-01.json",
    "../../selling-partner-api-models/models/tokens-api-model/tokens_2021-03-01.json",
    "../../selling-partner-api-models/models/uploads-api-model/uploads_2020-11-01.json",
    "../../selling-partner-api-models/models/vendor-direct-fulfillment-inventory-api-model/vendorDirectFulfillmentInventoryV1.json",
    "../../selling-partner-api-models/models/vendor-direct-fulfillment-orders-api-model/vendorDirectFulfillmentOrders_2021-12-28.json",
    "../../selling-partner-api-models/models/vendor-direct-fulfillment-payments-api-model/vendorDirectFulfillmentPaymentsV1.json",
    "../../selling-partner-api-models/models/vendor-direct-fulfillment-shipping-api-model/vendorDirectFulfillmentShipping_2021-12-28.json",
    "../../selling-partner-api-models/models/vendor-direct-fulfillment-transactions-api-model/vendorDirectFulfillmentTransactions_2021-12-28.json",
    "../../selling-partner-api-models/models/vendor-invoices-api-model/vendorInvoices.json",
    "../../selling-partner-api-models/models/vendor-orders-api-model/vendorOrders.json",
    "../../selling-partner-api-models/models/vendor-shipments-api-model/vendorShipments.json",
    "../../selling-partner-api-models/models/vendor-transaction-status-api-model/vendorTransactionStatus.json"
]

for (const path of models) {
    console.log(path)
    const serializedContent = fs.readFileSync(path)
    const content = JSON.parse(serializedContent, 'utf8')
    const operations = ["get", "put", "post", "delete", "patch"]

    // Responses
    Object.values(content.paths)
        .flatMap((path) =>
            Object.entries(path)
                .filter((operation) => operations.includes(operation[0]))
                .map((operation) => operation[1])
        ).forEach((operation) => {
        const operationId = operation.operationId.replace(/^./, operation.operationId[0].toLowerCase())
        try {
            const successStatus = ["200", "201", "202"]
            const successObjects = Object.keys(operation['responses']).filter((key) => successStatus.includes(key))
            if (Array.isArray(successObjects) && successObjects.length > 0) {
                const response = JSON.stringify(operation['responses'][successObjects[0]]['x-amzn-api-sandbox']['static'][0]['response'])
                fs.writeFileSync(`res/responses/${operationId}Response.json`, response)
            }
        } catch (e) {
            console.log(`Unable to write response file for operation ${operationId}`)
        }
    })

    // Requests
    Object.values(content.paths)
        .flatMap((path) =>
            Object.entries(path)
                .filter((operation) => operations.includes(operation[0]))
                .map((operation) => operation[1])
        ).forEach((operation) => {
        const operationId = operation.operationId.replace(/^./, operation.operationId[0].toLowerCase())
        try {
            const successStatus = ["200", "201", "202", "204"]
            const successObjects = Object.keys(operation['responses']).filter((key) => successStatus.includes(key))
            if (Array.isArray(successObjects) && successObjects.length > 0) {
                const request = JSON.stringify(operation['responses'][successObjects[0]]['x-amzn-api-sandbox']['static'][0]['request']['parameters']['body']['value'])
                fs.writeFileSync(`res/requests/${operationId}Request.json`, request)
            }
        } catch (e) {
            console.log(`Unable to write request file for operation ${operationId}`)
        }
    })
}