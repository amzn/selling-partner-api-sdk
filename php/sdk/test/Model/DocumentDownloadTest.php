<?php
/**
 * DocumentDownloadTest
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
use OpenAPI\Client\Model\fulfillment\inbound\v2024_03_20\DocumentDownload;

/**
 * DocumentDownloadTest Class Doc Comment
 *
 * @category    Class
 * @description Resource to download the requested document.
 * @package     OpenAPI\Client
 */
class DocumentDownloadTest extends TestCase
{

    private DocumentDownload $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new DocumentDownload();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "DocumentDownload"
     */
    public function testDocumentDownload()
    {
        $this->assertInstanceOf(DocumentDownload::class, $this->model);
    }

    /**
     * Test attribute "download_type"
     */
    public function testPropertyDownloadType()
    {
        $testValue = 'test';
        
        $this->model->setDownloadType($testValue);
        $this->assertEquals($testValue, $this->model->getDownloadType());
    }

    /**
     * Test attribute "expiration"
     */
    public function testPropertyExpiration()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setExpiration($testValue);
        $this->assertEquals($testValue, $this->model->getExpiration());
    }

    /**
     * Test attribute "uri"
     */
    public function testPropertyUri()
    {
        $testValue = 'test';
        
        $this->model->setUri($testValue);
        $this->assertEquals($testValue, $this->model->getUri());
    }
}
