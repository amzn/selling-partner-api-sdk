<?php
/**
 * InvalidItemReasonTest
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
use SpApi\Model\fulfillment\outbound\v2020_07_01\InvalidItemReason;

/**
 * InvalidItemReasonTest Class Doc Comment
 *
 * @category    Class
 * @description The reason that the item is invalid for return.
 * @package     SpApi
 */
class InvalidItemReasonTest extends TestCase
{

    private InvalidItemReason $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new InvalidItemReason();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "InvalidItemReason"
     */
    public function testInvalidItemReason()
    {
        $this->assertInstanceOf(InvalidItemReason::class, $this->model);
    }

    /**
     * Test attribute "invalid_item_reason_code"
     */
    public function testPropertyInvalidItemReasonCode()
    {
        $enumInstance = new \SpApi\Model\fulfillment\outbound\v2020_07_01\InvalidItemReasonCode();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setInvalidItemReasonCode($testValue);
        $this->assertEquals($testValue, $this->model->getInvalidItemReasonCode());
    }

    /**
     * Test attribute "description"
     */
    public function testPropertyDescription()
    {
        $testValue = 'test';
        
        $this->model->setDescription($testValue);
        $this->assertEquals($testValue, $this->model->getDescription());
    }
}
