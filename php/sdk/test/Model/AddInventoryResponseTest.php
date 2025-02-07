<?php
/**
 * AddInventoryResponseTest
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
use OpenAPI\Client\Model\fba\inventory\v1\AddInventoryResponse;

/**
 * AddInventoryResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response schema for the AddInventory operation.
 * @package     OpenAPI\Client
 */
class AddInventoryResponseTest extends TestCase
{

    private AddInventoryResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new AddInventoryResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "AddInventoryResponse"
     */
    public function testAddInventoryResponse()
    {
        $this->assertInstanceOf(AddInventoryResponse::class, $this->model);
    }

    /**
     * Test attribute "errors"
     */
    public function testPropertyErrors()
    {
        $testValue = [];
        
        $this->model->setErrors($testValue);
        $this->assertEquals($testValue, $this->model->getErrors());
    }
}
