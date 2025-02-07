<?php
/**
 * BenefitsTest
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
use OpenAPI\Client\Model\merchantFulfillment\v0\Benefits;

/**
 * BenefitsTest Class Doc Comment
 *
 * @category    Class
 * @description Benefits that are included and excluded for each shipping offer. Benefits represents services provided by Amazon (for example, &#x60;CLAIMS_PROTECTED&#x60;) when sellers purchase shipping through Amazon. Benefit details are made available for any shipment placed on or after January 1st 2024 00:00 UTC.
 * @package     OpenAPI\Client
 */
class BenefitsTest extends TestCase
{

    private Benefits $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new Benefits();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "Benefits"
     */
    public function testBenefits()
    {
        $this->assertInstanceOf(Benefits::class, $this->model);
    }

    /**
     * Test attribute "included_benefits"
     */
    public function testPropertyIncludedBenefits()
    {
        $testValue = [];
        
        $this->model->setIncludedBenefits($testValue);
        $this->assertEquals($testValue, $this->model->getIncludedBenefits());
    }

    /**
     * Test attribute "excluded_benefits"
     */
    public function testPropertyExcludedBenefits()
    {
        $testValue = [];
        
        $this->model->setExcludedBenefits($testValue);
        $this->assertEquals($testValue, $this->model->getExcludedBenefits());
    }
}
