<?php
/**
 * SearchContentPublishRecordsResponseTest
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\aplusContent\v2020_11_01\SearchContentPublishRecordsResponse;

/**
 * SearchContentPublishRecordsResponseTest Class Doc Comment
 *
 * @category    Class
 * @description SearchContentPublishRecordsResponse
 * @package     OpenAPI\Client
 */
class SearchContentPublishRecordsResponseTest extends TestCase
{

    private SearchContentPublishRecordsResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new SearchContentPublishRecordsResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "SearchContentPublishRecordsResponse"
     */
    public function testSearchContentPublishRecordsResponse()
    {
        $this->assertInstanceOf(SearchContentPublishRecordsResponse::class, $this->model);
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
     * Test attribute "publish_record_list"
     */
    public function testPropertyPublishRecordList()
    {
        $testValue = [];
        
        $this->model->setPublishRecordList($testValue);
        $this->assertEquals($testValue, $this->model->getPublishRecordList());
    }
}
