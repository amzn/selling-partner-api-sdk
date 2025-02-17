<?php
/**
 * GetCollectionFormHistoryResponseTest
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
use SpApi\Model\shipping\v2\GetCollectionFormHistoryResponse;

/**
 * GetCollectionFormHistoryResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The Response  for the GetCollectionFormHistoryResponse operation.
 * @package     SpApi
 */
class GetCollectionFormHistoryResponseTest extends TestCase
{

    private GetCollectionFormHistoryResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetCollectionFormHistoryResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetCollectionFormHistoryResponse"
     */
    public function testGetCollectionFormHistoryResponse()
    {
        $this->assertInstanceOf(GetCollectionFormHistoryResponse::class, $this->model);
    }

    /**
     * Test attribute "collection_forms_history_record_list"
     */
    public function testPropertyCollectionFormsHistoryRecordList()
    {
        $testValue = [];
        
        $this->model->setCollectionFormsHistoryRecordList($testValue);
        $this->assertEquals($testValue, $this->model->getCollectionFormsHistoryRecordList());
    }

    /**
     * Test attribute "last_refreshed_date"
     */
    public function testPropertyLastRefreshedDate()
    {
        $testValue = 'test';
        
        $this->model->setLastRefreshedDate($testValue);
        $this->assertEquals($testValue, $this->model->getLastRefreshedDate());
    }
}
