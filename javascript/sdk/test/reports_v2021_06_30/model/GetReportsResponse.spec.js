/**
 * Selling Partner API for Reports
 * The Selling Partner API for Reports lets you retrieve and manage a variety of reports that can help selling partners manage their businesses.
 *
 * The version of the OpenAPI document: 2021-06-30
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import expect from 'expect.js';
import { join } from 'path';

const modulePath = join(process.cwd(), 'src', 'reports_v2021_06_30', 'index.js');
const SellingPartnerApiForReports = await import(modulePath);

let instance;

beforeEach(() => {
  try {
    instance = new SellingPartnerApiForReports.GetReportsResponse();
  } catch (e) {
    //Handle the cases when this model extends another model by using Model.call(this);
    instance = Object.create(SellingPartnerApiForReports.GetReportsResponse.prototype);
  }
});

afterEach(() => {
  instance = null;
});

describe('GetReportsResponse', () => {
  it('should create an instance of GetReportsResponse', () => {
    expect(instance).to.be.a(SellingPartnerApiForReports.GetReportsResponse);
  });

  it('should have the property reports', () => {
    // verify property exists
    expect(instance).to.have.property('reports');

    // set and verify value
    const expectedValue = generateMockData('Report', true);
    instance.reports = expectedValue;
    expect(instance.reports).to.equal(expectedValue);
  });

  it('should have the property nextToken', () => {
    // verify property exists
    expect(instance).to.have.property('nextToken');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.nextToken = expectedValue;
    expect(instance.nextToken).to.equal(expectedValue);
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
        const ModelClass = SellingPartnerApiForReports[dataType];
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
