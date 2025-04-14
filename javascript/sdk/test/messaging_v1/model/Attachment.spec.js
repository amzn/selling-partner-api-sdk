/**
 * Selling Partner API for Messaging
 * With the Messaging API you can build applications that send messages to buyers. You can get a list of message types that are available for an order that you specify, then call an operation that sends a message to the buyer for that order. The Messaging API returns responses that are formed according to the <a href=https://tools.ietf.org/html/draft-kelly-json-hal-08>JSON Hypertext Application Language</a> (HAL) standard.
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

const modulePath = join(process.cwd(), 'src', 'messaging_v1', 'index.js');
const SellingPartnerApiForMessaging = await import(modulePath);

let instance;

beforeEach(() => {
  try {
    instance = new SellingPartnerApiForMessaging.Attachment();
  } catch (e) {
    //Handle the cases when this model extends another model by using Model.call(this);
    instance = Object.create(SellingPartnerApiForMessaging.Attachment.prototype);
  }
});

afterEach(() => {
  instance = null;
});

describe('Attachment', () => {
  it('should create an instance of Attachment', () => {
    expect(instance).to.be.a(SellingPartnerApiForMessaging.Attachment);
  });

  it('should have the property uploadDestinationId', () => {
    // verify property exists
    expect(instance).to.have.property('uploadDestinationId');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.uploadDestinationId = expectedValue;
    expect(instance.uploadDestinationId).to.equal(expectedValue);
  });

  it('should have the property fileName', () => {
    // verify property exists
    expect(instance).to.have.property('fileName');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.fileName = expectedValue;
    expect(instance.fileName).to.equal(expectedValue);
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
        const ModelClass = SellingPartnerApiForMessaging[dataType];
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
