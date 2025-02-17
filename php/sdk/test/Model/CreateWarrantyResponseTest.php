<?php
/**
 * CreateWarrantyResponseTest
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
use SpApi\Model\messaging\v1\CreateWarrantyResponse;

/**
 * CreateWarrantyResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response schema for the createWarranty operation.
 * @package     SpApi
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
