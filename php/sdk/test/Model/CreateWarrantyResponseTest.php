<?php
/**
 * CreateWarrantyResponseTest
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
use OpenAPI\Client\Model\messaging\CreateWarrantyResponse;

/**
 * CreateWarrantyResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response schema for the createWarranty operation.
 * @package     OpenAPI\Client
 */
class CreateWarrantyResponseTest extends TestCase
{

    private CreateWarrantyResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new CreateWarrantyResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "CreateWarrantyResponse"
     */
    public function testCreateWarrantyResponse()
    {
        $this->assertInstanceOf(CreateWarrantyResponse::class, $this->model);
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
