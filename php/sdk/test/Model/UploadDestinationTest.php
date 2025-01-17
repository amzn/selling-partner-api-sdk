<?php
/**
 * UploadDestinationTest
 *
 * PHP version 7.4
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\uploads\UploadDestination;

/**
 * UploadDestinationTest Class Doc Comment
 *
 * @category    Class
 * @description Information about an upload destination.
 * @package     OpenAPI\Client
 */
class UploadDestinationTest extends TestCase
{

    private UploadDestination $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new UploadDestination();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "UploadDestination"
     */
    public function testUploadDestination()
    {
        $this->assertInstanceOf(UploadDestination::class, $this->model);
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
     * Test attribute "headers"
     */
    public function testPropertyHeaders()
    {
        
        $testValue = new object();
        
        $this->model->setHeaders($testValue);
        $this->assertEquals($testValue, $this->model->getHeaders());
    }
}
