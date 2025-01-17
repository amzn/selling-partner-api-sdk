<?php
/**
 * CollectionsFormDocumentTest
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
use OpenAPI\Client\Model\shipping\CollectionsFormDocument;

/**
 * CollectionsFormDocumentTest Class Doc Comment
 *
 * @category    Class
 * @description Collection Form Document Details
 * @package     OpenAPI\Client
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
