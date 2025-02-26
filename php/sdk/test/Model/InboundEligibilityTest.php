<?php
/**
 * InboundEligibilityTest
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
use SpApi\Model\awd\v2024_05_09\InboundEligibility;

/**
 * InboundEligibilityTest Class Doc Comment
 *
 * @category    Class
 * @description Represents the eligibility status of the inbound packages.
 * @package     SpApi
 */
class InboundEligibilityTest extends TestCase
{

    private InboundEligibility $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new InboundEligibility();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "InboundEligibility"
     */
    public function testInboundEligibility()
    {
        $this->assertInstanceOf(InboundEligibility::class, $this->model);
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
     * Test attribute "packages_to_inbound"
     */
    public function testPropertyPackagesToInbound()
    {
        $testValue = [];
        
        $this->model->setPackagesToInbound($testValue);
        $this->assertEquals($testValue, $this->model->getPackagesToInbound());
    }

    /**
     * Test attribute "previewed_at"
     */
    public function testPropertyPreviewedAt()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setPreviewedAt($testValue);
        $this->assertEquals($testValue, $this->model->getPreviewedAt());
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
