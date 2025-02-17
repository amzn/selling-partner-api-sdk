<?php
/**
 * FulfillmentDocumentTest
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
use SpApi\Model\services\v1\FulfillmentDocument;

/**
 * FulfillmentDocumentTest Class Doc Comment
 *
 * @category    Class
 * @description Document that captured during service appointment fulfillment that portrays proof of completion
 * @package     SpApi
 */
class FulfillmentDocumentTest extends TestCase
{

    private FulfillmentDocument $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new FulfillmentDocument();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "FulfillmentDocument"
     */
    public function testFulfillmentDocument()
    {
        $this->assertInstanceOf(FulfillmentDocument::class, $this->model);
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
     * Test attribute "content_sha256"
     */
    public function testPropertyContentSha256()
    {
        $testValue = 'test';
        
        $this->model->setContentSha256($testValue);
        $this->assertEquals($testValue, $this->model->getContentSha256());
    }
}
