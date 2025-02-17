<?php
/**
 * BuyerTaxInfoTest
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
use SpApi\Model\orders\v0\BuyerTaxInfo;

/**
 * BuyerTaxInfoTest Class Doc Comment
 *
 * @category    Class
 * @description Tax information about the buyer.
 * @package     SpApi
 */
class BuyerTaxInfoTest extends TestCase
{

    private BuyerTaxInfo $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new BuyerTaxInfo();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "BuyerTaxInfo"
     */
    public function testBuyerTaxInfo()
    {
        $this->assertInstanceOf(BuyerTaxInfo::class, $this->model);
    }

    /**
     * Test attribute "company_legal_name"
     */
    public function testPropertyCompanyLegalName()
    {
        $testValue = 'test';
        
        $this->model->setCompanyLegalName($testValue);
        $this->assertEquals($testValue, $this->model->getCompanyLegalName());
    }

    /**
     * Test attribute "taxing_region"
     */
    public function testPropertyTaxingRegion()
    {
        $testValue = 'test';
        
        $this->model->setTaxingRegion($testValue);
        $this->assertEquals($testValue, $this->model->getTaxingRegion());
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
