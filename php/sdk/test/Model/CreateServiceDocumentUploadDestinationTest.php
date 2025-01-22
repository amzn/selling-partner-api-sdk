<?php
/**
 * CreateServiceDocumentUploadDestinationTest
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
use OpenAPI\Client\Model\services\CreateServiceDocumentUploadDestination;

/**
 * CreateServiceDocumentUploadDestinationTest Class Doc Comment
 *
 * @category    Class
 * @description The response schema for the &#x60;createServiceDocumentUploadDestination&#x60; operation.
 * @package     OpenAPI\Client
 */
class CreateServiceDocumentUploadDestinationTest extends TestCase
{

    private CreateServiceDocumentUploadDestination $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new CreateServiceDocumentUploadDestination();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "CreateServiceDocumentUploadDestination"
     */
    public function testCreateServiceDocumentUploadDestination()
    {
        $this->assertInstanceOf(CreateServiceDocumentUploadDestination::class, $this->model);
    }

    /**
     * Test attribute "payload"
     */
    public function testPropertyPayload()
    {
        
        $testValue = new \OpenAPI\Client\Model\services\ServiceDocumentUploadDestination();
        
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
