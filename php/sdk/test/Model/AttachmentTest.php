<?php
/**
 * AttachmentTest
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
use OpenAPI\Client\Model\messaging\Attachment;

/**
 * AttachmentTest Class Doc Comment
 *
 * @category    Class
 * @description Represents a file uploaded to a destination that was created by the [createUploadDestinationForResource](doc:uploads-api-reference#post-uploads2020-11-01uploaddestinationsresource) operation of the Selling Partner API for Uploads.
 * @package     OpenAPI\Client
 */
class AttachmentTest extends TestCase
{

    private Attachment $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new Attachment();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "Attachment"
     */
    public function testAttachment()
    {
        $this->assertInstanceOf(Attachment::class, $this->model);
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
     * Test attribute "file_name"
     */
    public function testPropertyFileName()
    {
        $testValue = 'test';
        
        $this->model->setFileName($testValue);
        $this->assertEquals($testValue, $this->model->getFileName());
    }
}
