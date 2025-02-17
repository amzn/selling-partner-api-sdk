<?php
/**
 * SearchContentDocumentsResponseTest
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
use SpApi\Model\aplusContent\v2020_11_01\SearchContentDocumentsResponse;

/**
 * SearchContentDocumentsResponseTest Class Doc Comment
 *
 * @category    Class
 * @description SearchContentDocumentsResponse
 * @package     SpApi
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
