<?php
/**
 * ServiceDocumentUploadDestinationTest
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
use SpApi\Model\services\v1\ServiceDocumentUploadDestination;

/**
 * ServiceDocumentUploadDestinationTest Class Doc Comment
 *
 * @category    Class
 * @description Information about an upload destination.
 * @package     SpApi
 */
class ServiceDocumentUploadDestinationTest extends TestCase
{

    private ServiceDocumentUploadDestination $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ServiceDocumentUploadDestination();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ServiceDocumentUploadDestination"
     */
    public function testServiceDocumentUploadDestination()
    {
        $this->assertInstanceOf(ServiceDocumentUploadDestination::class, $this->model);
    }

    /**
     * Test attribute "upload_destination_id"
     */
    public function testPropertyUploadDestinationId()
    {
        $testValue = 'test';
        
        $this->model->setUploadDestinationId($testValue);
        $this->assertEquals($testValue, $this->model->getUploadDestinationId());
    }

    /**
     * Test attribute "url"
     */
    public function testPropertyUrl()
    {
        $testValue = 'test';
        
        $this->model->setUrl($testValue);
        $this->assertEquals($testValue, $this->model->getUrl());
    }

    /**
     * Test attribute "encryption_details"
     */
    public function testPropertyEncryptionDetails()
    {
        
        $testValue = new \SpApi\Model\services\v1\EncryptionDetails();
        
        $this->model->setEncryptionDetails($testValue);
        $this->assertEquals($testValue, $this->model->getEncryptionDetails());
    }

    /**
     * Test attribute "headers"
     */
    public function testPropertyHeaders()
    {
        
        $testValue = new object();
        
        $this->model->setHeaders($testValue);
        $this->assertEquals($testValue, $this->model->getHeaders());
    }
}
