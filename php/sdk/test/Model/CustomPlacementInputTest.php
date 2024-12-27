<?php
/**
 * CustomPlacementInputTest
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
use OpenAPI\Client\Model\fulfillmentinbound\CustomPlacementInput;

/**
 * CustomPlacementInputTest Class Doc Comment
 *
 * @category    Class
 * @description Provide units going to the warehouse.
 * @package     OpenAPI\Client
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
