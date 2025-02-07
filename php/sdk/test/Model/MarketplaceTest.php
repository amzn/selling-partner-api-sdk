<?php
/**
 * MarketplaceTest
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\sellers\v1\Marketplace;

/**
 * MarketplaceTest Class Doc Comment
 *
 * @category    Class
 * @description Detailed information about an Amazon market where a seller can list items for sale and customers can view and purchase items.
 * @package     OpenAPI\Client
 */
class MarketplaceTest extends TestCase
{

    private Marketplace $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new Marketplace();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "Marketplace"
     */
    public function testMarketplace()
    {
        $this->assertInstanceOf(Marketplace::class, $this->model);
    }

    /**
     * Test attribute "id"
     */
    public function testPropertyId()
    {
        $testValue = 'test';
        
        $this->model->setId($testValue);
        $this->assertEquals($testValue, $this->model->getId());
    }

    /**
     * Test attribute "name"
     */
    public function testPropertyName()
    {
        $testValue = 'test';
        
        $this->model->setName($testValue);
        $this->assertEquals($testValue, $this->model->getName());
    }

    /**
     * Test attribute "country_code"
     */
    public function testPropertyCountryCode()
    {
        $testValue = 'test';
        
        $this->model->setCountryCode($testValue);
        $this->assertEquals($testValue, $this->model->getCountryCode());
    }

    /**
     * Test attribute "default_currency_code"
     */
    public function testPropertyDefaultCurrencyCode()
    {
        $testValue = 'test';
        
        $this->model->setDefaultCurrencyCode($testValue);
        $this->assertEquals($testValue, $this->model->getDefaultCurrencyCode());
    }

    /**
     * Test attribute "default_language_code"
     */
    public function testPropertyDefaultLanguageCode()
    {
        $testValue = 'test';
        
        $this->model->setDefaultLanguageCode($testValue);
        $this->assertEquals($testValue, $this->model->getDefaultLanguageCode());
    }

    /**
     * Test attribute "domain_name"
     */
    public function testPropertyDomainName()
    {
        $testValue = 'test';
        
        $this->model->setDomainName($testValue);
        $this->assertEquals($testValue, $this->model->getDomainName());
    }
}
