<?php
/**
 * CollectionsFormDocumentTest
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
use SpApi\Model\shipping\v2\CollectionsFormDocument;

/**
 * CollectionsFormDocumentTest Class Doc Comment
 *
 * @category    Class
 * @description Collection Form Document Details
 * @package     SpApi
 */
class CollectionsFormDocumentTest extends TestCase
{

    private CollectionsFormDocument $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new CollectionsFormDocument();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "CollectionsFormDocument"
     */
    public function testCollectionsFormDocument()
    {
        $this->assertInstanceOf(CollectionsFormDocument::class, $this->model);
    }

    /**
     * Test attribute "base64_encoded_content"
     */
    public function testPropertyBase64EncodedContent()
    {
        $testValue = 'test';
        
        $this->model->setBase64EncodedContent($testValue);
        $this->assertEquals($testValue, $this->model->getBase64EncodedContent());
    }

    /**
     * Test attribute "document_format"
     */
    public function testPropertyDocumentFormat()
    {
        $testValue = 'test';
        
        $this->model->setDocumentFormat($testValue);
        $this->assertEquals($testValue, $this->model->getDocumentFormat());
    }
}
