<?php
/**
 * AddInventoryRequestTest
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
use OpenAPI\Client\Model\fbaInventory\AddInventoryRequest;

/**
 * AddInventoryRequestTest Class Doc Comment
 *
 * @category    Class
 * @description The object with the list of Inventory to be added
 * @package     OpenAPI\Client
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
