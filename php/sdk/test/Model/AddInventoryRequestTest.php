<?php
/**
 * AddInventoryRequestTest
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
use SpApi\Model\fba\inventory\v1\AddInventoryRequest;

/**
 * AddInventoryRequestTest Class Doc Comment
 *
 * @category    Class
 * @description The object with the list of Inventory to be added
 * @package     SpApi
 */
class AddInventoryRequestTest extends TestCase
{

    private AddInventoryRequest $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new AddInventoryRequest();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "AddInventoryRequest"
     */
    public function testAddInventoryRequest()
    {
        $this->assertInstanceOf(AddInventoryRequest::class, $this->model);
    }

    /**
     * Test attribute "inventory_items"
     */
    public function testPropertyInventoryItems()
    {
        $testValue = [];
        
        $this->model->setInventoryItems($testValue);
        $this->assertEquals($testValue, $this->model->getInventoryItems());
    }
}
