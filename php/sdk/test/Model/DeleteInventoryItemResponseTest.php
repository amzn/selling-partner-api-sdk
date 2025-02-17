<?php
/**
 * DeleteInventoryItemResponseTest
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
use SpApi\Model\fba\inventory\v1\DeleteInventoryItemResponse;

/**
 * DeleteInventoryItemResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response schema for the DeleteInventoryItem operation.
 * @package     SpApi
 */
class DeleteInventoryItemResponseTest extends TestCase
{

    private DeleteInventoryItemResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new DeleteInventoryItemResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "DeleteInventoryItemResponse"
     */
    public function testDeleteInventoryItemResponse()
    {
        $this->assertInstanceOf(DeleteInventoryItemResponse::class, $this->model);
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
