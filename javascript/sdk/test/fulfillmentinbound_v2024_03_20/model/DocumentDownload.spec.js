/**
 * The Selling Partner API for FBA inbound operations.
 * The Selling Partner API for Fulfillment By Amazon (FBA) Inbound. The FBA Inbound API enables building inbound workflows to create, manage, and send shipments into Amazon's fulfillment network. The API has interoperability with the Send-to-Amazon user interface.
 *
 * The version of the OpenAPI document: 2024-03-20
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import expect from 'expect.js';
import { join } from 'path';

const modulePath = join(process.cwd(), 'src', 'fulfillmentinbound_v2024_03_20', 'index.js');
const TheSellingPartnerApiForFbaInboundOperations = await import(modulePath);

let instance;

beforeEach(() => {
  try {
    instance = new TheSellingPartnerApiForFbaInboundOperations.DocumentDownload();
  } catch (e) {
    //Handle the cases when this model extends another model by using Model.call(this);
    instance = Object.create(TheSellingPartnerApiForFbaInboundOperations.DocumentDownload.prototype);
  }
});

afterEach(() => {
  instance = null;
});

describe('DocumentDownload', () => {
  it('should create an instance of DocumentDownload', () => {
    expect(instance).to.be.a(TheSellingPartnerApiForFbaInboundOperations.DocumentDownload);
  });

  it('should have the property downloadType', () => {
    // verify property exists
    expect(instance).to.have.property('downloadType');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.downloadType = expectedValue;
    expect(instance.downloadType).to.equal(expectedValue);
  });

  it('should have the property expiration', () => {
    // verify property exists
    expect(instance).to.have.property('expiration');

    // set and verify value
    const expectedValue = generateMockData('Date');
    instance.expiration = expectedValue;
    expect(instance.expiration).to.equal(expectedValue);
  });

  it('should have the property uri', () => {
    // verify property exists
    expect(instance).to.have.property('uri');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.uri = expectedValue;
    expect(instance.uri).to.equal(expectedValue);
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
        const ModelClass = TheSellingPartnerApiForFbaInboundOperations[dataType];
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
