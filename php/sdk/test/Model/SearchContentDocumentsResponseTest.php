<?php
/**
 * SearchContentDocumentsResponseTest
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
use OpenAPI\Client\Model\apluscontent\SearchContentDocumentsResponse;

/**
 * SearchContentDocumentsResponseTest Class Doc Comment
 *
 * @category    Class
 * @description SearchContentDocumentsResponse
 * @package     OpenAPI\Client
 */
class SearchContentDocumentsResponseTest extends TestCase
{

    private SearchContentDocumentsResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new SearchContentDocumentsResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "SearchContentDocumentsResponse"
     */
    public function testSearchContentDocumentsResponse()
    {
        $this->assertInstanceOf(SearchContentDocumentsResponse::class, $this->model);
    }

    /**
     * Test attribute "warnings"
     */
    public function testPropertyWarnings()
    {
        $testValue = [];
        
        $this->model->setWarnings($testValue);
        $this->assertEquals($testValue, $this->model->getWarnings());
    }

    /**
     * Test attribute "next_page_token"
     */
    public function testPropertyNextPageToken()
    {
        $testValue = 'test';
        
        $this->model->setNextPageToken($testValue);
        $this->assertEquals($testValue, $this->model->getNextPageToken());
    }

    /**
     * Test attribute "content_metadata_records"
     */
    public function testPropertyContentMetadataRecords()
    {
        $testValue = [];
        
        $this->model->setContentMetadataRecords($testValue);
        $this->assertEquals($testValue, $this->model->getContentMetadataRecords());
    }
}
