#!/bin/bash

jq '(.paths[][] | select(type=="object")) += {"tags":["financesV0"]}' "./selling-partner-api-models/models/finances-api-model/financesV0.json" > temp && mv temp "./selling-partner-api-models/models/finances-api-model/financesV0.json"
jq '(.paths[][] | select(type=="object")) += {"tags":["financesV2024"]}' "./selling-partner-api-models/models/finances-api-model/finances_2024-06-19.json" > temp && mv temp "./selling-partner-api-models/models/finances-api-model/finances_2024-06-19.json"
jq '(.paths[][] | select(type=="object")) += {"tags":["transfers"]}' "./selling-partner-api-models/models/finances-api-model/transfers_2024-06-01.json" > temp && mv temp "./selling-partner-api-models/models/finances-api-model/transfers_2024-06-01.json"
jq '(.paths[][] | select(type=="object")) += {"tags":["vendorDfOrders"]}' "./selling-partner-api-models/models/vendor-direct-fulfillment-orders-api-model/vendorDirectFulfillmentOrders_2021-12-28.json" > temp && mv temp "./selling-partner-api-models/models/vendor-direct-fulfillment-orders-api-model/vendorDirectFulfillmentOrders_2021-12-28.json"
jq '(.paths[][] | select(type=="object")) += {"tags":["replenishment"]}' "./selling-partner-api-models/models/replenishment-api-model/replenishment-2022-11-07.json" > temp && mv temp "./selling-partner-api-models/models/replenishment-api-model/replenishment-2022-11-07.json"
