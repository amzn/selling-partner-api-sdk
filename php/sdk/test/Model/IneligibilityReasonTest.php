<?php
/**
 * IneligibilityReasonTest
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
use SpApi\Model\shipping\v2\IneligibilityReason;

/**
 * IneligibilityReasonTest Class Doc Comment
 *
 * @category    Class
 * @description The reason why a shipping service offering is ineligible.
 * @package     SpApi
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
        $enumInstance = new \SpApi\Model\shipping\v2\IneligibilityReasonCode();
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
