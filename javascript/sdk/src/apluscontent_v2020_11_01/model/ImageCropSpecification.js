/**
 * Selling Partner API for A+ Content Management
 * Use the A+ Content API to build applications that help selling partners add rich marketing content to their Amazon product detail pages. Selling partners can use A+ content to share their brand and product story, which helps buyers make informed purchasing decisions. Selling partners use content modules to add images and text.
 *
 * The version of the OpenAPI document: 2020-11-01
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient.js';
import {ImageDimensions} from './ImageDimensions.js';
import {ImageOffsets} from './ImageOffsets.js';

/**
 * The ImageCropSpecification model module.
 * @module apluscontent_v2020_11_01/model/ImageCropSpecification
 * @version 2020-11-01
 */
export class ImageCropSpecification {
  /**
   * Constructs a new <code>ImageCropSpecification</code>.
   * The instructions for optionally cropping an image. If you don&#39;t want to crop the image, set the dimensions to the original image size. If the image is cropped and you don&#39;t include offset values, the coordinates of the top left corner of the cropped image are set to (0,0) by default.
   * @alias module:apluscontent_v2020_11_01/model/ImageCropSpecification
   * @class
   * @param size {module:apluscontent_v2020_11_01/model/ImageDimensions} 
   */
  constructor(size) {
    this.size = size;
  }

  /**
   * Constructs a <code>ImageCropSpecification</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:apluscontent_v2020_11_01/model/ImageCropSpecification} obj Optional instance to populate.
   * @return {module:apluscontent_v2020_11_01/model/ImageCropSpecification} The populated <code>ImageCropSpecification</code> instance.
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
      obj = obj || new ImageCropSpecification();
      if (data.hasOwnProperty('size'))
        obj.size = ImageDimensions.constructFromObject(data['size']);
      if (data.hasOwnProperty('offset'))
        obj.offset = ImageOffsets.constructFromObject(data['offset']);
    }
    return obj;
  }
}

/**
 * @member {module:apluscontent_v2020_11_01/model/ImageDimensions} size
 */
ImageCropSpecification.prototype.size = undefined;

/**
 * @member {module:apluscontent_v2020_11_01/model/ImageOffsets} offset
 */
ImageCropSpecification.prototype.offset = undefined;


