/**
 * Selling Partner API for Services
 * With the Services API, you can build applications that help service providers get and modify their service orders and manage their resources.
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient.js';
import {EncryptionDetails} from './EncryptionDetails.js';

/**
 * The ServiceDocumentUploadDestination model module.
 * @module services_v1/model/ServiceDocumentUploadDestination
 * @version v1
 */
export class ServiceDocumentUploadDestination {
  /**
   * Constructs a new <code>ServiceDocumentUploadDestination</code>.
   * Information about an upload destination.
   * @alias module:services_v1/model/ServiceDocumentUploadDestination
   * @class
   * @param uploadDestinationId {String} The unique identifier to be used by APIs that reference the upload destination.
   * @param url {String} The URL to which to upload the file.
   * @param encryptionDetails {module:services_v1/model/EncryptionDetails} 
   */
  constructor(uploadDestinationId, url, encryptionDetails) {
    this.uploadDestinationId = uploadDestinationId;
    this.url = url;
    this.encryptionDetails = encryptionDetails;
  }

  /**
   * Constructs a <code>ServiceDocumentUploadDestination</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:services_v1/model/ServiceDocumentUploadDestination} obj Optional instance to populate.
   * @return {module:services_v1/model/ServiceDocumentUploadDestination} The populated <code>ServiceDocumentUploadDestination</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      switch(typeof data) {
        case 'string':
          obj = String(data);
          break;
        case 'number':
          obj = Number(data);
          break;
        case 'boolean':
          obj = Boolean(data);
          break;
      }
      obj = obj || new ServiceDocumentUploadDestination();
      if (data.hasOwnProperty('uploadDestinationId'))
        obj.uploadDestinationId = ApiClient.convertToType(data['uploadDestinationId'], 'String');
      if (data.hasOwnProperty('url'))
        obj.url = ApiClient.convertToType(data['url'], 'String');
      if (data.hasOwnProperty('encryptionDetails'))
        obj.encryptionDetails = EncryptionDetails.constructFromObject(data['encryptionDetails']);
      if (data.hasOwnProperty('headers'))
        obj.headers = ApiClient.convertToType(data['headers'], Object);
    }
    return obj;
  }
}

/**
 * The unique identifier to be used by APIs that reference the upload destination.
 * @member {String} uploadDestinationId
 */
ServiceDocumentUploadDestination.prototype.uploadDestinationId = undefined;

/**
 * The URL to which to upload the file.
 * @member {String} url
 */
ServiceDocumentUploadDestination.prototype.url = undefined;

/**
 * @member {module:services_v1/model/EncryptionDetails} encryptionDetails
 */
ServiceDocumentUploadDestination.prototype.encryptionDetails = undefined;

/**
 * The headers to include in the upload request.
 * @member {Object} headers
 */
ServiceDocumentUploadDestination.prototype.headers = undefined;


