<?php
/**
 * IneligibilityReasonTest
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
use OpenAPI\Client\Model\shipping\IneligibilityReason;

/**
 * IneligibilityReasonTest Class Doc Comment
 *
 * @category    Class
 * @description The reason why a shipping service offering is ineligible.
 * @package     OpenAPI\Client
 */
class IneligibilityReasonTest extends TestCase
{

    private IneligibilityReason $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new IneligibilityReason();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "IneligibilityReason"
     */
    public function testIneligibilityReason()
    {
        $this->assertInstanceOf(IneligibilityReason::class, $this->model);
    }

    /**
     * Test attribute "code"
     */
    public function testPropertyCode()
    {
        $enumInstance = new \OpenAPI\Client\Model\shipping\IneligibilityReasonCode();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setCode($testValue);
        $this->assertEquals($testValue, $this->model->getCode());
    }

    /**
     * Test attribute "message"
     */
    public function testPropertyMessage()
    {
        $testValue = 'test';
        
        $this->model->setMessage($testValue);
        $this->assertEquals($testValue, $this->model->getMessage());
    }
}
