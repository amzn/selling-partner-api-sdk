/**
 * Selling Partner API for Pricing
 * The Selling Partner API for Pricing helps you programmatically retrieve product pricing and offer information for Amazon Marketplace products.
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import expect from 'expect.js';
import { join } from 'path';

const modulePath = join(process.cwd(), 'src', 'pricing_v0', 'index.js');
const SellingPartnerApiForPricing = await import(modulePath);

let instance;

beforeEach(() => {
  try {
    instance = new SellingPartnerApiForPricing.OfferDetail();
  } catch (e) {
    //Handle the cases when this model extends another model by using Model.call(this);
    instance = Object.create(SellingPartnerApiForPricing.OfferDetail.prototype);
  }
});

afterEach(() => {
  instance = null;
});

describe('OfferDetail', () => {
  it('should create an instance of OfferDetail', () => {
    expect(instance).to.be.a(SellingPartnerApiForPricing.OfferDetail);
  });

  it('should have the property myOffer', () => {
    // verify property exists
    expect(instance).to.have.property('myOffer');

    // set and verify value
    const expectedValue = generateMockData('Boolean');
    instance.myOffer = expectedValue;
    expect(instance.myOffer).to.equal(expectedValue);
  });

  it('should have the property offerType', () => {
    // verify property exists
    expect(instance).to.have.property('offerType');

    // set and verify value
    const expectedValue = generateMockData('OfferCustomerType');
    instance.offerType = expectedValue;
    expect(instance.offerType).to.equal(expectedValue);
  });

  it('should have the property subCondition', () => {
    // verify property exists
    expect(instance).to.have.property('subCondition');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.subCondition = expectedValue;
    expect(instance.subCondition).to.equal(expectedValue);
  });

  it('should have the property sellerId', () => {
    // verify property exists
    expect(instance).to.have.property('sellerId');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.sellerId = expectedValue;
    expect(instance.sellerId).to.equal(expectedValue);
  });

  it('should have the property conditionNotes', () => {
    // verify property exists
    expect(instance).to.have.property('conditionNotes');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.conditionNotes = expectedValue;
    expect(instance.conditionNotes).to.equal(expectedValue);
  });

  it('should have the property sellerFeedbackRating', () => {
    // verify property exists
    expect(instance).to.have.property('sellerFeedbackRating');

    // set and verify value
    const expectedValue = generateMockData('SellerFeedbackType');
    instance.sellerFeedbackRating = expectedValue;
    expect(instance.sellerFeedbackRating).to.equal(expectedValue);
  });

  it('should have the property shippingTime', () => {
    // verify property exists
    expect(instance).to.have.property('shippingTime');

    // set and verify value
    const expectedValue = generateMockData('DetailedShippingTimeType');
    instance.shippingTime = expectedValue;
    expect(instance.shippingTime).to.equal(expectedValue);
  });

  it('should have the property listingPrice', () => {
    // verify property exists
    expect(instance).to.have.property('listingPrice');

    // set and verify value
    const expectedValue = generateMockData('MoneyType');
    instance.listingPrice = expectedValue;
    expect(instance.listingPrice).to.equal(expectedValue);
  });

  it('should have the property quantityDiscountPrices', () => {
    // verify property exists
    expect(instance).to.have.property('quantityDiscountPrices');

    // set and verify value
    const expectedValue = generateMockData('QuantityDiscountPriceType', true);
    instance.quantityDiscountPrices = expectedValue;
    expect(instance.quantityDiscountPrices).to.equal(expectedValue);
  });

  it('should have the property points', () => {
    // verify property exists
    expect(instance).to.have.property('points');

    // set and verify value
    const expectedValue = generateMockData('Points');
    instance.points = expectedValue;
    expect(instance.points).to.equal(expectedValue);
  });

  it('should have the property shipping', () => {
    // verify property exists
    expect(instance).to.have.property('shipping');

    // set and verify value
    const expectedValue = generateMockData('MoneyType');
    instance.shipping = expectedValue;
    expect(instance.shipping).to.equal(expectedValue);
  });

  it('should have the property shipsFrom', () => {
    // verify property exists
    expect(instance).to.have.property('shipsFrom');

    // set and verify value
    const expectedValue = generateMockData('ShipsFromType');
    instance.shipsFrom = expectedValue;
    expect(instance.shipsFrom).to.equal(expectedValue);
  });

  it('should have the property isFulfilledByAmazon', () => {
    // verify property exists
    expect(instance).to.have.property('isFulfilledByAmazon');

    // set and verify value
    const expectedValue = generateMockData('Boolean');
    instance.isFulfilledByAmazon = expectedValue;
    expect(instance.isFulfilledByAmazon).to.equal(expectedValue);
  });

  it('should have the property primeInformation', () => {
    // verify property exists
    expect(instance).to.have.property('primeInformation');

    // set and verify value
    const expectedValue = generateMockData('PrimeInformationType');
    instance.primeInformation = expectedValue;
    expect(instance.primeInformation).to.equal(expectedValue);
  });

  it('should have the property isBuyBoxWinner', () => {
    // verify property exists
    expect(instance).to.have.property('isBuyBoxWinner');

    // set and verify value
    const expectedValue = generateMockData('Boolean');
    instance.isBuyBoxWinner = expectedValue;
    expect(instance.isBuyBoxWinner).to.equal(expectedValue);
  });

  it('should have the property isFeaturedMerchant', () => {
    // verify property exists
    expect(instance).to.have.property('isFeaturedMerchant');

    // set and verify value
    const expectedValue = generateMockData('Boolean');
    instance.isFeaturedMerchant = expectedValue;
    expect(instance.isFeaturedMerchant).to.equal(expectedValue);
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
        const ModelClass = SellingPartnerApiForPricing[dataType];
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
