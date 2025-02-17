<?php
/**
 * FeedDocumentTest
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
use SpApi\Model\feeds\v2021_06_30\FeedDocument;

/**
 * FeedDocumentTest Class Doc Comment
 *
 * @category    Class
 * @description Information required for the feed document.
 * @package     SpApi
 */
class FeedDocumentTest extends TestCase
{

    private FeedDocument $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new FeedDocument();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "FeedDocument"
     */
    public function testFeedDocument()
    {
        $this->assertInstanceOf(FeedDocument::class, $this->model);
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

    /**
     * Test attribute "compression_algorithm"
     */
    public function testPropertyCompressionAlgorithm()
    {
        $enumInstance = new FeedDocument();
        $allowedValues = $enumInstance->getCompressionAlgorithmAllowableValues();
        $testValue = reset($allowedValues);
        $this->model->setCompressionAlgorithm($testValue);
        $this->assertEquals($testValue, $this->model->getCompressionAlgorithm());
    }
}
