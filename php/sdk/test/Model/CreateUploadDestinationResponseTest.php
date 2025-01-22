<?php
/**
 * CreateUploadDestinationResponseTest
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
use OpenAPI\Client\Model\uploads\CreateUploadDestinationResponse;

/**
 * CreateUploadDestinationResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response schema for the createUploadDestination operation.
 * @package     OpenAPI\Client
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
        
        $testValue = new \OpenAPI\Client\Model\uploads\UploadDestination();
        
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
