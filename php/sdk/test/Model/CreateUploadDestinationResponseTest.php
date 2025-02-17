<?php
/**
 * CreateUploadDestinationResponseTest
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
use SpApi\Model\uploads\v2020_11_01\CreateUploadDestinationResponse;

/**
 * CreateUploadDestinationResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response schema for the createUploadDestination operation.
 * @package     SpApi
 */
class CreateUploadDestinationResponseTest extends TestCase
{

    private CreateUploadDestinationResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new CreateUploadDestinationResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "CreateUploadDestinationResponse"
     */
    public function testCreateUploadDestinationResponse()
    {
        $this->assertInstanceOf(CreateUploadDestinationResponse::class, $this->model);
    }

    /**
     * Test attribute "payload"
     */
    public function testPropertyPayload()
    {
        
        $testValue = new \SpApi\Model\uploads\v2020_11_01\UploadDestination();
        
        $this->model->setPayload($testValue);
        $this->assertEquals($testValue, $this->model->getPayload());
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
