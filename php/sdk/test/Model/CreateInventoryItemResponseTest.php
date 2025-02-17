<?php
/**
 * CreateInventoryItemResponseTest
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
use SpApi\Model\fba\inventory\v1\CreateInventoryItemResponse;

/**
 * CreateInventoryItemResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response schema for the CreateInventoryItem operation.
 * @package     SpApi
 */
class CreateInventoryItemResponseTest extends TestCase
{

    private CreateInventoryItemResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new CreateInventoryItemResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "CreateInventoryItemResponse"
     */
    public function testCreateInventoryItemResponse()
    {
        $this->assertInstanceOf(CreateInventoryItemResponse::class, $this->model);
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
