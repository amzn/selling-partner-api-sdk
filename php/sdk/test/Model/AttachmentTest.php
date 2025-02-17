<?php
/**
 * AttachmentTest
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
use SpApi\Model\messaging\v1\Attachment;

/**
 * AttachmentTest Class Doc Comment
 *
 * @category    Class
 * @description Represents a file that was uploaded to a destination that was created by the Uploads API [&#x60;createUploadDestinationForResource&#x60;](https://developer-docs.amazon.com/sp-api/docs/uploads-api-reference#post-uploads2020-11-01uploaddestinationsresource) operation.
 * @package     SpApi
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
