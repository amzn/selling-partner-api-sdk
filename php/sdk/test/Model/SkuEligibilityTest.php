<?php
/**
 * SkuEligibilityTest
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
use SpApi\Model\awd\v2024_05_09\SkuEligibility;

/**
 * SkuEligibilityTest Class Doc Comment
 *
 * @category    Class
 * @description Represents eligibility of one SKU.
 * @package     SpApi
 */
class SkuEligibilityTest extends TestCase
{

    private SkuEligibility $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new SkuEligibility();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "SkuEligibility"
     */
    public function testSkuEligibility()
    {
        $this->assertInstanceOf(SkuEligibility::class, $this->model);
    }

    /**
     * Test attribute "ineligibility_reasons"
     */
    public function testPropertyIneligibilityReasons()
    {
        $testValue = [];
        
        $this->model->setIneligibilityReasons($testValue);
        $this->assertEquals($testValue, $this->model->getIneligibilityReasons());
    }

    /**
     * Test attribute "package_quantity"
     */
    public function testPropertyPackageQuantity()
    {
        
        $testValue = new \SpApi\Model\awd\v2024_05_09\DistributionPackageQuantity();
        
        $this->model->setPackageQuantity($testValue);
        $this->assertEquals($testValue, $this->model->getPackageQuantity());
    }

    /**
     * Test attribute "status"
     */
    public function testPropertyStatus()
    {
        $enumInstance = new \SpApi\Model\awd\v2024_05_09\InboundEligibilityStatus();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setStatus($testValue);
        $this->assertEquals($testValue, $this->model->getStatus());
    }
}
