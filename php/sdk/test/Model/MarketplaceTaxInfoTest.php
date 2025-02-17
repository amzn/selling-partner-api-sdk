<?php
/**
 * MarketplaceTaxInfoTest
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  SpApi
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace SpApi\Test\Model;

use PHPUnit\Framework\TestCase;
use SpApi\Model\orders\v0\MarketplaceTaxInfo;

/**
 * MarketplaceTaxInfoTest Class Doc Comment
 *
 * @category    Class
 * @description Tax information about the marketplace.
 * @package     SpApi
 */
class MarketplaceTaxInfoTest extends TestCase
{

    private MarketplaceTaxInfo $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new MarketplaceTaxInfo();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "MarketplaceTaxInfo"
     */
    public function testMarketplaceTaxInfo()
    {
        $this->assertInstanceOf(MarketplaceTaxInfo::class, $this->model);
    }

    /**
     * Test attribute "tax_classifications"
     */
    public function testPropertyTaxClassifications()
    {
        $testValue = [];
        
        $this->model->setTaxClassifications($testValue);
        $this->assertEquals($testValue, $this->model->getTaxClassifications());
    }
}
