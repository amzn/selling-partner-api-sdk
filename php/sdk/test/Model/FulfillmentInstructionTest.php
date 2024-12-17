<?php
/**
 * FulfillmentInstructionTest
 *
 * PHP version 7.4
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\orders\FulfillmentInstruction;

/**
 * FulfillmentInstructionTest Class Doc Comment
 *
 * @category    Class
 * @description Contains the instructions about the fulfillment, such as the location from where you want the order filled.
 * @package     OpenAPI\Client
 */
class FulfillmentInstructionTest extends TestCase
{

    private FulfillmentInstruction $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new FulfillmentInstruction();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "FulfillmentInstruction"
     */
    public function testFulfillmentInstruction()
    {
        $this->assertInstanceOf(FulfillmentInstruction::class, $this->model);
    }

    /**
     * Test attribute "fulfillment_supply_source_id"
     */
    public function testPropertyFulfillmentSupplySourceId()
    {
        $testValue = 'test';
        
        $this->model->setFulfillmentSupplySourceId($testValue);
        $this->assertEquals($testValue, $this->model->getFulfillmentSupplySourceId());
    }
}
