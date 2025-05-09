/**
 * Selling Partner API for Easy Ship
 * Use the Selling Partner API for Easy Ship to build applications for sellers to manage and ship Amazon Easy Ship orders. With this API, you can get available time slots, schedule and reschedule Easy Ship orders, and print shipping labels, invoices, and warranties. To review the differences in Easy Ship operations by marketplace, refer to [Marketplace support](https://developer-docs.amazon.com/sp-api/docs/easyship-api-v2022-03-23-use-case-guide#marketplace-support).
 *
 * The version of the OpenAPI document: 2022-03-23
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import { ApiClient } from './ApiClient.js'
import { Code } from './model/Code.js'
import { CreateScheduledPackageRequest } from './model/CreateScheduledPackageRequest.js'
import { CreateScheduledPackagesRequest } from './model/CreateScheduledPackagesRequest.js'
import { CreateScheduledPackagesResponse } from './model/CreateScheduledPackagesResponse.js'
import { Dimensions } from './model/Dimensions.js'
import { Error } from './model/Error.js'
import { ErrorList } from './model/ErrorList.js'
import { HandoverMethod } from './model/HandoverMethod.js'
import { InvoiceData } from './model/InvoiceData.js'
import { Item } from './model/Item.js'
import { LabelFormat } from './model/LabelFormat.js'
import { ListHandoverSlotsRequest } from './model/ListHandoverSlotsRequest.js'
import { ListHandoverSlotsResponse } from './model/ListHandoverSlotsResponse.js'
import { OrderScheduleDetails } from './model/OrderScheduleDetails.js'
import { Package } from './model/Package.js'
import { PackageDetails } from './model/PackageDetails.js'
import { PackageStatus } from './model/PackageStatus.js'
import { Packages } from './model/Packages.js'
import { RejectedOrder } from './model/RejectedOrder.js'
import { ScheduledPackageId } from './model/ScheduledPackageId.js'
import { TimeSlot } from './model/TimeSlot.js'
import { TrackingDetails } from './model/TrackingDetails.js'
import { UnitOfLength } from './model/UnitOfLength.js'
import { UnitOfWeight } from './model/UnitOfWeight.js'
import { UpdatePackageDetails } from './model/UpdatePackageDetails.js'
import { UpdateScheduledPackagesRequest } from './model/UpdateScheduledPackagesRequest.js'
import { Weight } from './model/Weight.js'
import { EasyShipApi } from './api/EasyShipApi.js'

/**
* Use the Selling Partner API for Easy Ship to build applications for sellers to manage and ship Amazon Easy Ship orders. With this API, you can get available time slots, schedule and reschedule Easy Ship orders, and print shipping labels, invoices, and warranties. To review the differences in Easy Ship operations by marketplace, refer to [Marketplace support](https://developer-docs.amazon.com/sp-api/docs/easyship-api-v2022-03-23-use-case-guide#marketplace-support)..<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* @module easyship_v2022_03_23/index
* @version 2022-03-23
*/
export {
  /**
     * The ApiClient constructor.
     * @property {module:easyship_v2022_03_23/ApiClient}
     */
  ApiClient,

  /**
     * The Code model constructor.
     * @property {module:easyship_v2022_03_23/model/Code}
     */
  Code,

  /**
     * The CreateScheduledPackageRequest model constructor.
     * @property {module:easyship_v2022_03_23/model/CreateScheduledPackageRequest}
     */
  CreateScheduledPackageRequest,

  /**
     * The CreateScheduledPackagesRequest model constructor.
     * @property {module:easyship_v2022_03_23/model/CreateScheduledPackagesRequest}
     */
  CreateScheduledPackagesRequest,

  /**
     * The CreateScheduledPackagesResponse model constructor.
     * @property {module:easyship_v2022_03_23/model/CreateScheduledPackagesResponse}
     */
  CreateScheduledPackagesResponse,

  /**
     * The Dimensions model constructor.
     * @property {module:easyship_v2022_03_23/model/Dimensions}
     */
  Dimensions,

  /**
     * The Error model constructor.
     * @property {module:easyship_v2022_03_23/model/Error}
     */
  Error,

  /**
     * The ErrorList model constructor.
     * @property {module:easyship_v2022_03_23/model/ErrorList}
     */
  ErrorList,

  /**
     * The HandoverMethod model constructor.
     * @property {module:easyship_v2022_03_23/model/HandoverMethod}
     */
  HandoverMethod,

  /**
     * The InvoiceData model constructor.
     * @property {module:easyship_v2022_03_23/model/InvoiceData}
     */
  InvoiceData,

  /**
     * The Item model constructor.
     * @property {module:easyship_v2022_03_23/model/Item}
     */
  Item,

  /**
     * The LabelFormat model constructor.
     * @property {module:easyship_v2022_03_23/model/LabelFormat}
     */
  LabelFormat,

  /**
     * The ListHandoverSlotsRequest model constructor.
     * @property {module:easyship_v2022_03_23/model/ListHandoverSlotsRequest}
     */
  ListHandoverSlotsRequest,

  /**
     * The ListHandoverSlotsResponse model constructor.
     * @property {module:easyship_v2022_03_23/model/ListHandoverSlotsResponse}
     */
  ListHandoverSlotsResponse,

  /**
     * The OrderScheduleDetails model constructor.
     * @property {module:easyship_v2022_03_23/model/OrderScheduleDetails}
     */
  OrderScheduleDetails,

  /**
     * The Package model constructor.
     * @property {module:easyship_v2022_03_23/model/Package}
     */
  Package,

  /**
     * The PackageDetails model constructor.
     * @property {module:easyship_v2022_03_23/model/PackageDetails}
     */
  PackageDetails,

  /**
     * The PackageStatus model constructor.
     * @property {module:easyship_v2022_03_23/model/PackageStatus}
     */
  PackageStatus,

  /**
     * The Packages model constructor.
     * @property {module:easyship_v2022_03_23/model/Packages}
     */
  Packages,

  /**
     * The RejectedOrder model constructor.
     * @property {module:easyship_v2022_03_23/model/RejectedOrder}
     */
  RejectedOrder,

  /**
     * The ScheduledPackageId model constructor.
     * @property {module:easyship_v2022_03_23/model/ScheduledPackageId}
     */
  ScheduledPackageId,

  /**
     * The TimeSlot model constructor.
     * @property {module:easyship_v2022_03_23/model/TimeSlot}
     */
  TimeSlot,

  /**
     * The TrackingDetails model constructor.
     * @property {module:easyship_v2022_03_23/model/TrackingDetails}
     */
  TrackingDetails,

  /**
     * The UnitOfLength model constructor.
     * @property {module:easyship_v2022_03_23/model/UnitOfLength}
     */
  UnitOfLength,

  /**
     * The UnitOfWeight model constructor.
     * @property {module:easyship_v2022_03_23/model/UnitOfWeight}
     */
  UnitOfWeight,

  /**
     * The UpdatePackageDetails model constructor.
     * @property {module:easyship_v2022_03_23/model/UpdatePackageDetails}
     */
  UpdatePackageDetails,

  /**
     * The UpdateScheduledPackagesRequest model constructor.
     * @property {module:easyship_v2022_03_23/model/UpdateScheduledPackagesRequest}
     */
  UpdateScheduledPackagesRequest,

  /**
     * The Weight model constructor.
     * @property {module:easyship_v2022_03_23/model/Weight}
     */
  Weight,

  /**
    * The EasyShipApi service constructor.
    * @property {module:easyship_v2022_03_23/api/EasyShipApi}
    */
  EasyShipApi
}
