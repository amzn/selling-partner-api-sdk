/**
 * Selling Partner API for Replenishment
 * The Selling Partner API for Replenishment (Replenishment API) provides programmatic access to replenishment program metrics and offers. These programs provide recurring delivery of any replenishable item at a frequency chosen by the customer.  The Replenishment API is available worldwide wherever Amazon Subscribe & Save is available or is supported. The API is available to vendors and FBA selling partners.
 *
 * The version of the OpenAPI document: 2022-11-07
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import expect from 'expect.js';
import { join } from 'path';

const modulePath = join(process.cwd(), 'src', 'replenishment_v2022_11_07', 'index.js');
const SellingPartnerApiForReplenishment = await import(modulePath);

let instance;

beforeEach(() => {
  try {
    instance = new SellingPartnerApiForReplenishment.GetSellingPartnerMetricsResponseMetric();
  } catch (e) {
    //Handle the cases when this model extends another model by using Model.call(this);
    instance = Object.create(SellingPartnerApiForReplenishment.GetSellingPartnerMetricsResponseMetric.prototype);
  }
});

afterEach(() => {
  instance = null;
});

describe('GetSellingPartnerMetricsResponseMetric', () => {
  it('should create an instance of GetSellingPartnerMetricsResponseMetric', () => {
    expect(instance).to.be.a(SellingPartnerApiForReplenishment.GetSellingPartnerMetricsResponseMetric);
  });

  it('should have the property notDeliveredDueToOOS', () => {
    // verify property exists
    expect(instance).to.have.property('notDeliveredDueToOOS');

    // set and verify value
    const expectedValue = generateMockData('Number');
    instance.notDeliveredDueToOOS = expectedValue;
    expect(instance.notDeliveredDueToOOS).to.equal(expectedValue);
  });

  it('should have the property totalSubscriptionsRevenue', () => {
    // verify property exists
    expect(instance).to.have.property('totalSubscriptionsRevenue');

    // set and verify value
    const expectedValue = generateMockData('Number');
    instance.totalSubscriptionsRevenue = expectedValue;
    expect(instance.totalSubscriptionsRevenue).to.equal(expectedValue);
  });

  it('should have the property shippedSubscriptionUnits', () => {
    // verify property exists
    expect(instance).to.have.property('shippedSubscriptionUnits');

    // set and verify value
    const expectedValue = generateMockData('Number');
    instance.shippedSubscriptionUnits = expectedValue;
    expect(instance.shippedSubscriptionUnits).to.equal(expectedValue);
  });

  it('should have the property activeSubscriptions', () => {
    // verify property exists
    expect(instance).to.have.property('activeSubscriptions');

    // set and verify value
    const expectedValue = generateMockData('Number');
    instance.activeSubscriptions = expectedValue;
    expect(instance.activeSubscriptions).to.equal(expectedValue);
  });

  it('should have the property subscriberAverageRevenue', () => {
    // verify property exists
    expect(instance).to.have.property('subscriberAverageRevenue');

    // set and verify value
    const expectedValue = generateMockData('Number');
    instance.subscriberAverageRevenue = expectedValue;
    expect(instance.subscriberAverageRevenue).to.equal(expectedValue);
  });

  it('should have the property nonSubscriberAverageRevenue', () => {
    // verify property exists
    expect(instance).to.have.property('nonSubscriberAverageRevenue');

    // set and verify value
    const expectedValue = generateMockData('Number');
    instance.nonSubscriberAverageRevenue = expectedValue;
    expect(instance.nonSubscriberAverageRevenue).to.equal(expectedValue);
  });

  it('should have the property lostRevenueDueToOOS', () => {
    // verify property exists
    expect(instance).to.have.property('lostRevenueDueToOOS');

    // set and verify value
    const expectedValue = generateMockData('Number');
    instance.lostRevenueDueToOOS = expectedValue;
    expect(instance.lostRevenueDueToOOS).to.equal(expectedValue);
  });

  it('should have the property subscriberAverageReorders', () => {
    // verify property exists
    expect(instance).to.have.property('subscriberAverageReorders');

    // set and verify value
    const expectedValue = generateMockData('Number');
    instance.subscriberAverageReorders = expectedValue;
    expect(instance.subscriberAverageReorders).to.equal(expectedValue);
  });

  it('should have the property nonSubscriberAverageReorders', () => {
    // verify property exists
    expect(instance).to.have.property('nonSubscriberAverageReorders');

    // set and verify value
    const expectedValue = generateMockData('Number');
    instance.nonSubscriberAverageReorders = expectedValue;
    expect(instance.nonSubscriberAverageReorders).to.equal(expectedValue);
  });

  it('should have the property couponsRevenuePenetration', () => {
    // verify property exists
    expect(instance).to.have.property('couponsRevenuePenetration');

    // set and verify value
    const expectedValue = generateMockData('Number');
    instance.couponsRevenuePenetration = expectedValue;
    expect(instance.couponsRevenuePenetration).to.equal(expectedValue);
  });

  it('should have the property revenueFromSubscriptionsWithMultipleDeliveries', () => {
    // verify property exists
    expect(instance).to.have.property('revenueFromSubscriptionsWithMultipleDeliveries');

    // set and verify value
    const expectedValue = generateMockData('Number');
    instance.revenueFromSubscriptionsWithMultipleDeliveries = expectedValue;
    expect(instance.revenueFromSubscriptionsWithMultipleDeliveries).to.equal(expectedValue);
  });

  it('should have the property revenueFromActiveSubscriptionsWithSingleDelivery', () => {
    // verify property exists
    expect(instance).to.have.property('revenueFromActiveSubscriptionsWithSingleDelivery');

    // set and verify value
    const expectedValue = generateMockData('Number');
    instance.revenueFromActiveSubscriptionsWithSingleDelivery = expectedValue;
    expect(instance.revenueFromActiveSubscriptionsWithSingleDelivery).to.equal(expectedValue);
  });

  it('should have the property revenueFromCancelledSubscriptionsAfterSingleDelivery', () => {
    // verify property exists
    expect(instance).to.have.property('revenueFromCancelledSubscriptionsAfterSingleDelivery');

    // set and verify value
    const expectedValue = generateMockData('Number');
    instance.revenueFromCancelledSubscriptionsAfterSingleDelivery = expectedValue;
    expect(instance.revenueFromCancelledSubscriptionsAfterSingleDelivery).to.equal(expectedValue);
  });

  it('should have the property subscriberRetentionFor30Days', () => {
    // verify property exists
    expect(instance).to.have.property('subscriberRetentionFor30Days');

    // set and verify value
    const expectedValue = generateMockData('Number');
    instance.subscriberRetentionFor30Days = expectedValue;
    expect(instance.subscriberRetentionFor30Days).to.equal(expectedValue);
  });

  it('should have the property subscriberRetentionFor90Days', () => {
    // verify property exists
    expect(instance).to.have.property('subscriberRetentionFor90Days');

    // set and verify value
    const expectedValue = generateMockData('Number');
    instance.subscriberRetentionFor90Days = expectedValue;
    expect(instance.subscriberRetentionFor90Days).to.equal(expectedValue);
  });

  it('should have the property revenuePenetrationFor0PercentSellerFunding', () => {
    // verify property exists
    expect(instance).to.have.property('revenuePenetrationFor0PercentSellerFunding');

    // set and verify value
    const expectedValue = generateMockData('Number');
    instance.revenuePenetrationFor0PercentSellerFunding = expectedValue;
    expect(instance.revenuePenetrationFor0PercentSellerFunding).to.equal(expectedValue);
  });

  it('should have the property revenuePenetrationFor5PercentSellerFunding', () => {
    // verify property exists
    expect(instance).to.have.property('revenuePenetrationFor5PercentSellerFunding');

    // set and verify value
    const expectedValue = generateMockData('Number');
    instance.revenuePenetrationFor5PercentSellerFunding = expectedValue;
    expect(instance.revenuePenetrationFor5PercentSellerFunding).to.equal(expectedValue);
  });

  it('should have the property revenuePenetrationFor10PercentSellerFunding', () => {
    // verify property exists
    expect(instance).to.have.property('revenuePenetrationFor10PercentSellerFunding');

    // set and verify value
    const expectedValue = generateMockData('Number');
    instance.revenuePenetrationFor10PercentSellerFunding = expectedValue;
    expect(instance.revenuePenetrationFor10PercentSellerFunding).to.equal(expectedValue);
  });

  it('should have the property revenuePenetrationFor5PlusPercentSellerFunding', () => {
    // verify property exists
    expect(instance).to.have.property('revenuePenetrationFor5PlusPercentSellerFunding');

    // set and verify value
    const expectedValue = generateMockData('Number');
    instance.revenuePenetrationFor5PlusPercentSellerFunding = expectedValue;
    expect(instance.revenuePenetrationFor5PlusPercentSellerFunding).to.equal(expectedValue);
  });

  it('should have the property shareOfCouponSubscriptions', () => {
    // verify property exists
    expect(instance).to.have.property('shareOfCouponSubscriptions');

    // set and verify value
    const expectedValue = generateMockData('Number');
    instance.shareOfCouponSubscriptions = expectedValue;
    expect(instance.shareOfCouponSubscriptions).to.equal(expectedValue);
  });

  it('should have the property timeInterval', () => {
    // verify property exists
    expect(instance).to.have.property('timeInterval');

    // set and verify value
    const expectedValue = generateMockData('TimeInterval');
    instance.timeInterval = expectedValue;
    expect(instance.timeInterval).to.equal(expectedValue);
  });

  it('should have the property currencyCode', () => {
    // verify property exists
    expect(instance).to.have.property('currencyCode');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.currencyCode = expectedValue;
    expect(instance.currencyCode).to.equal(expectedValue);
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
        const ModelClass = SellingPartnerApiForReplenishment[dataType];
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
