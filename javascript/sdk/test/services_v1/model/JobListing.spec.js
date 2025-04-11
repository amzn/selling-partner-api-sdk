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

import expect from 'expect.js';
import { join } from 'path';

const modulePath = join(process.cwd(), 'src', 'services_v1', 'index.js');
const SellingPartnerApiForServices = await import(modulePath);

let instance;

beforeEach(() => {
  try {
    instance = new SellingPartnerApiForServices.JobListing();
  } catch (e) {
    //Handle the cases when this model extends another model by using Model.call(this);
    instance = Object.create(SellingPartnerApiForServices.JobListing.prototype);
  }
});

afterEach(() => {
  instance = null;
});

describe('JobListing', () => {
  it('should create an instance of JobListing', () => {
    expect(instance).to.be.a(SellingPartnerApiForServices.JobListing);
  });

  it('should have the property totalResultSize', () => {
    // verify property exists
    expect(instance).to.have.property('totalResultSize');

    // set and verify value
    const expectedValue = generateMockData('Number');
    instance.totalResultSize = expectedValue;
    expect(instance.totalResultSize).to.equal(expectedValue);
  });

  it('should have the property nextPageToken', () => {
    // verify property exists
    expect(instance).to.have.property('nextPageToken');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.nextPageToken = expectedValue;
    expect(instance.nextPageToken).to.equal(expectedValue);
  });

  it('should have the property previousPageToken', () => {
    // verify property exists
    expect(instance).to.have.property('previousPageToken');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.previousPageToken = expectedValue;
    expect(instance.previousPageToken).to.equal(expectedValue);
  });

  it('should have the property jobs', () => {
    // verify property exists
    expect(instance).to.have.property('jobs');

    // set and verify value
    const expectedValue = generateMockData('ServiceJob', true);
    instance.jobs = expectedValue;
    expect(instance.jobs).to.equal(expectedValue);
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
        const ModelClass = SellingPartnerApiForServices[dataType];
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
