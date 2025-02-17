<?php
/**
 * ShipperInstructionTest
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
use SpApi\Model\shipping\v2\ShipperInstruction;

/**
 * ShipperInstructionTest Class Doc Comment
 *
 * @category    Class
 * @description The shipper instruction.
 * @package     SpApi
 */
class ShipperInstructionTest extends TestCase
{

    private ShipperInstruction $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ShipperInstruction();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ShipperInstruction"
     */
    public function testShipperInstruction()
    {
        $this->assertInstanceOf(ShipperInstruction::class, $this->model);
    }

    /**
     * Test attribute "delivery_notes"
     */
    public function testPropertyDeliveryNotes()
    {
        $testValue = 'test';
        
        $this->model->setDeliveryNotes($testValue);
        $this->assertEquals($testValue, $this->model->getDeliveryNotes());
    }
}
