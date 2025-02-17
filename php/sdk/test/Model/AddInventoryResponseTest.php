<?php
/**
 * AddInventoryResponseTest
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
use SpApi\Model\fba\inventory\v1\AddInventoryResponse;

/**
 * AddInventoryResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response schema for the AddInventory operation.
 * @package     SpApi
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
