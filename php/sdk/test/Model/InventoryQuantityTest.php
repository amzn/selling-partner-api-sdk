<?php
/**
 * InventoryQuantityTest
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
use OpenAPI\Client\Model\awd\InventoryQuantity;

/**
 * InventoryQuantityTest Class Doc Comment
 *
 * @category    Class
 * @description Quantity of inventory with an associated measurement unit context.
 * @package     OpenAPI\Client
 */
class InventoryQuantityTest extends TestCase
{

    private InventoryQuantity $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new InventoryQuantity();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "InventoryQuantity"
     */
    public function testInventoryQuantity()
    {
        $this->assertInstanceOf(InventoryQuantity::class, $this->model);
    }

    /**
     * Test attribute "quantity"
     */
    public function testPropertyQuantity()
    {
        $testValue = 1;
        
        $this->model->setQuantity($testValue);
        $this->assertEquals($testValue, $this->model->getQuantity());
    }

    /**
     * Test attribute "unit_of_measurement"
     */
    public function testPropertyUnitOfMeasurement()
    {
        $enumInstance = new \OpenAPI\Client\Model\awd\InventoryUnitOfMeasurement();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setUnitOfMeasurement($testValue);
        $this->assertEquals($testValue, $this->model->getUnitOfMeasurement());
    }
}
