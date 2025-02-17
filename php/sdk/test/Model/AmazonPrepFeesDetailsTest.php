<?php
/**
 * AmazonPrepFeesDetailsTest
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
use SpApi\Model\fulfillment\inbound\v0\AmazonPrepFeesDetails;

/**
 * AmazonPrepFeesDetailsTest Class Doc Comment
 *
 * @category    Class
 * @description The fees for Amazon to prep goods for shipment.
 * @package     SpApi
 */
class AmazonPrepFeesDetailsTest extends TestCase
{

    private AmazonPrepFeesDetails $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new AmazonPrepFeesDetails();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "AmazonPrepFeesDetails"
     */
    public function testAmazonPrepFeesDetails()
    {
        $this->assertInstanceOf(AmazonPrepFeesDetails::class, $this->model);
    }

    /**
     * Test attribute "prep_instruction"
     */
    public function testPropertyPrepInstruction()
    {
        $enumInstance = new \SpApi\Model\fulfillment\inbound\v0\PrepInstruction();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setPrepInstruction($testValue);
        $this->assertEquals($testValue, $this->model->getPrepInstruction());
    }

    /**
     * Test attribute "fee_per_unit"
     */
    public function testPropertyFeePerUnit()
    {
        
        $testValue = new \SpApi\Model\fulfillment\inbound\v0\Amount();
        
        $this->model->setFeePerUnit($testValue);
        $this->assertEquals($testValue, $this->model->getFeePerUnit());
    }
}
