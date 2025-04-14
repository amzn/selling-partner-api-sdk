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
    instance = new SellingPartnerApiForServices.ScopeOfWork();
  } catch (e) {
    //Handle the cases when this model extends another model by using Model.call(this);
    instance = Object.create(SellingPartnerApiForServices.ScopeOfWork.prototype);
  }
});

afterEach(() => {
  instance = null;
});

describe('ScopeOfWork', () => {
  it('should create an instance of ScopeOfWork', () => {
    expect(instance).to.be.a(SellingPartnerApiForServices.ScopeOfWork);
  });

  it('should have the property asin', () => {
    // verify property exists
    expect(instance).to.have.property('asin');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.asin = expectedValue;
    expect(instance.asin).to.equal(expectedValue);
  });

  it('should have the property title', () => {
    // verify property exists
    expect(instance).to.have.property('title');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.title = expectedValue;
    expect(instance.title).to.equal(expectedValue);
  });

  it('should have the property quantity', () => {
    // verify property exists
    expect(instance).to.have.property('quantity');

    // set and verify value
    const expectedValue = generateMockData('Number');
    instance.quantity = expectedValue;
    expect(instance.quantity).to.equal(expectedValue);
  });

  it('should have the property requiredSkills', () => {
    // verify property exists
    expect(instance).to.have.property('requiredSkills');

    // set and verify value
    const expectedValue = generateMockData('String', true);
    instance.requiredSkills = expectedValue;
    expect(instance.requiredSkills).to.equal(expectedValue);
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
