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
    instance = new SellingPartnerApiForServices.Buyer();
  } catch (e) {
    //Handle the cases when this model extends another model by using Model.call(this);
    instance = Object.create(SellingPartnerApiForServices.Buyer.prototype);
  }
});

afterEach(() => {
  instance = null;
});

describe('Buyer', () => {
  it('should create an instance of Buyer', () => {
    expect(instance).to.be.a(SellingPartnerApiForServices.Buyer);
  });

  it('should have the property buyerId', () => {
    // verify property exists
    expect(instance).to.have.property('buyerId');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.buyerId = expectedValue;
    expect(instance.buyerId).to.equal(expectedValue);
  });

  it('should have the property name', () => {
    // verify property exists
    expect(instance).to.have.property('name');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.name = expectedValue;
    expect(instance.name).to.equal(expectedValue);
  });

  it('should have the property phone', () => {
    // verify property exists
    expect(instance).to.have.property('phone');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.phone = expectedValue;
    expect(instance.phone).to.equal(expectedValue);
  });

  it('should have the property isPrimeMember', () => {
    // verify property exists
    expect(instance).to.have.property('isPrimeMember');

    // set and verify value
    const expectedValue = generateMockData('Boolean');
    instance.isPrimeMember = expectedValue;
    expect(instance.isPrimeMember).to.equal(expectedValue);
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
