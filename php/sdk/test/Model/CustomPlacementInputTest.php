<?php
/**
 * CustomPlacementInputTest
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
use SpApi\Model\fulfillment\inbound\v2024_03_20\CustomPlacementInput;

/**
 * CustomPlacementInputTest Class Doc Comment
 *
 * @category    Class
 * @description Provide units going to the warehouse.
 * @package     SpApi
 */
class CustomPlacementInputTest extends TestCase
{

    private CustomPlacementInput $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new CustomPlacementInput();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "CustomPlacementInput"
     */
    public function testCustomPlacementInput()
    {
        $this->assertInstanceOf(CustomPlacementInput::class, $this->model);
    }

    /**
     * Test attribute "items"
     */
    public function testPropertyItems()
    {
        $testValue = [];
        
        $this->model->setItems($testValue);
        $this->assertEquals($testValue, $this->model->getItems());
    }

    /**
     * Test attribute "warehouse_id"
     */
    public function testPropertyWarehouseId()
    {
        $testValue = 'test';
        
        $this->model->setWarehouseId($testValue);
        $this->assertEquals($testValue, $this->model->getWarehouseId());
    }
}
