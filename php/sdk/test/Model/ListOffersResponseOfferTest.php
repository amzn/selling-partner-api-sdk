<?php
/**
 * ListOffersResponseOfferTest
 *
 * PHP version 7.4
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\replenishment\ListOffersResponseOffer;

/**
 * ListOffersResponseOfferTest Class Doc Comment
 *
 * @category    Class
 * @description An object which contains details about an offer.
 * @package     OpenAPI\Client
 */
class ListOffersResponseOfferTest extends TestCase
{

    private ListOffersResponseOffer $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ListOffersResponseOffer();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ListOffersResponseOffer"
     */
    public function testListOffersResponseOffer()
    {
        $this->assertInstanceOf(ListOffersResponseOffer::class, $this->model);
    }

    /**
     * Test attribute "sku"
     */
    public function testPropertySku()
    {
        $testValue = 'test';
        
        $this->model->setSku($testValue);
        $this->assertEquals($testValue, $this->model->getSku());
    }

    /**
     * Test attribute "asin"
     */
    public function testPropertyAsin()
    {
        $testValue = 'test';
        
        $this->model->setAsin($testValue);
        $this->assertEquals($testValue, $this->model->getAsin());
    }

    /**
     * Test attribute "marketplace_id"
     */
    public function testPropertyMarketplaceId()
    {
        $testValue = 'test';
        
        $this->model->setMarketplaceId($testValue);
        $this->assertEquals($testValue, $this->model->getMarketplaceId());
    }

    /**
     * Test attribute "eligibility"
     */
    public function testPropertyEligibility()
    {
        $enumInstance = new \OpenAPI\Client\Model\replenishment\EligibilityStatus();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setEligibility($testValue);
        $this->assertEquals($testValue, $this->model->getEligibility());
    }

    /**
     * Test attribute "offer_program_configuration"
     */
    public function testPropertyOfferProgramConfiguration()
    {
        
        $testValue = new \OpenAPI\Client\Model\replenishment\OfferProgramConfiguration();
        
        $this->model->setOfferProgramConfiguration($testValue);
        $this->assertEquals($testValue, $this->model->getOfferProgramConfiguration());
    }

    /**
     * Test attribute "program_type"
     */
    public function testPropertyProgramType()
    {
        $enumInstance = new \OpenAPI\Client\Model\replenishment\ProgramType();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setProgramType($testValue);
        $this->assertEquals($testValue, $this->model->getProgramType());
    }

    /**
     * Test attribute "vendor_codes"
     */
    public function testPropertyVendorCodes()
    {
        $testValue = [];
        
        $this->model->setVendorCodes($testValue);
        $this->assertEquals($testValue, $this->model->getVendorCodes());
    }
}
