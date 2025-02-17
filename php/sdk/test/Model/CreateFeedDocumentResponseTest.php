<?php
/**
 * CreateFeedDocumentResponseTest
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
use SpApi\Model\feeds\v2021_06_30\CreateFeedDocumentResponse;

/**
 * CreateFeedDocumentResponseTest Class Doc Comment
 *
 * @category    Class
 * @description Information required to upload a feed document&#39;s contents.
 * @package     SpApi
 */
class CreateFeedDocumentResponseTest extends TestCase
{

    private CreateFeedDocumentResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new CreateFeedDocumentResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "CreateFeedDocumentResponse"
     */
    public function testCreateFeedDocumentResponse()
    {
        $this->assertInstanceOf(CreateFeedDocumentResponse::class, $this->model);
    }

    /**
     * Test attribute "feed_document_id"
     */
    public function testPropertyFeedDocumentId()
    {
        $testValue = 'test';
        
        $this->model->setFeedDocumentId($testValue);
        $this->assertEquals($testValue, $this->model->getFeedDocumentId());
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
}
