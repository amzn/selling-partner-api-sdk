<?php
/**
 * CreateInventoryItemResponseTest
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
use OpenAPI\Client\Model\fba\inventory\v1\CreateInventoryItemResponse;

/**
 * CreateInventoryItemResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response schema for the CreateInventoryItem operation.
 * @package     OpenAPI\Client
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
