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

import expect from 'expect.js';
import { join } from 'path';

const modulePath = join(process.cwd(), 'src', 'apluscontent_v2020_11_01', 'index.js');
const SellingPartnerApiForAContentManagement = await import(modulePath);

let instance;

beforeEach(() => {
  try {
    instance = new SellingPartnerApiForAContentManagement.StandardImageSidebarModule();
  } catch (e) {
    //Handle the cases when this model extends another model by using Model.call(this);
    instance = Object.create(SellingPartnerApiForAContentManagement.StandardImageSidebarModule.prototype);
  }
});

afterEach(() => {
  instance = null;
});

describe('StandardImageSidebarModule', () => {
  it('should create an instance of StandardImageSidebarModule', () => {
    expect(instance).to.be.a(SellingPartnerApiForAContentManagement.StandardImageSidebarModule);
  });

  it('should have the property headline', () => {
    // verify property exists
    expect(instance).to.have.property('headline');

    // set and verify value
    const expectedValue = generateMockData('TextComponent');
    instance.headline = expectedValue;
    expect(instance.headline).to.equal(expectedValue);
  });

  it('should have the property imageCaptionBlock', () => {
    // verify property exists
    expect(instance).to.have.property('imageCaptionBlock');

    // set and verify value
    const expectedValue = generateMockData('StandardImageCaptionBlock');
    instance.imageCaptionBlock = expectedValue;
    expect(instance.imageCaptionBlock).to.equal(expectedValue);
  });

  it('should have the property descriptionTextBlock', () => {
    // verify property exists
    expect(instance).to.have.property('descriptionTextBlock');

    // set and verify value
    const expectedValue = generateMockData('StandardTextBlock');
    instance.descriptionTextBlock = expectedValue;
    expect(instance.descriptionTextBlock).to.equal(expectedValue);
  });

  it('should have the property descriptionListBlock', () => {
    // verify property exists
    expect(instance).to.have.property('descriptionListBlock');

    // set and verify value
    const expectedValue = generateMockData('StandardTextListBlock');
    instance.descriptionListBlock = expectedValue;
    expect(instance.descriptionListBlock).to.equal(expectedValue);
  });

  it('should have the property sidebarImageTextBlock', () => {
    // verify property exists
    expect(instance).to.have.property('sidebarImageTextBlock');

    // set and verify value
    const expectedValue = generateMockData('StandardImageTextBlock');
    instance.sidebarImageTextBlock = expectedValue;
    expect(instance.sidebarImageTextBlock).to.equal(expectedValue);
  });

  it('should have the property sidebarListBlock', () => {
    // verify property exists
    expect(instance).to.have.property('sidebarListBlock');

    // set and verify value
    const expectedValue = generateMockData('StandardTextListBlock');
    instance.sidebarListBlock = expectedValue;
    expect(instance.sidebarListBlock).to.equal(expectedValue);
  });

});

// Helper function to generate random test data
function generateMockData(dataType, isArray = false) {
  if (!dataType) return {};

  // Handle array types
  if (isArray) {
    return [generateMockData(dataType), generateMockData(dataType)];
  }

  switch(dataType) {
    case 'String':
      return 'mock-' + Math.random().toString(36).substring(2, 10);
    case 'Number':
      return Math.floor(Math.random() * 1000);
    case 'Boolean':
      return Math.random() > 0.5;
    case 'Date':
      return new Date().toISOString();
    default:
      try {
        const ModelClass = SellingPartnerApiForAContentManagement[dataType];
        if (ModelClass) {
          const instance = Object.create(ModelClass.prototype);
          return instance;
        }
      } catch (e) {
        console.error("Error creating instance of", dataType);
        return {};
      }
      return {};
  }
}
