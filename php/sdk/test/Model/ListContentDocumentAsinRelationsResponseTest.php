<?php
/**
 * ListContentDocumentAsinRelationsResponseTest
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
use SpApi\Model\aplusContent\v2020_11_01\ListContentDocumentAsinRelationsResponse;

/**
 * ListContentDocumentAsinRelationsResponseTest Class Doc Comment
 *
 * @category    Class
 * @description ListContentDocumentAsinRelationsResponse
 * @package     SpApi
 */
class ListContentDocumentAsinRelationsResponseTest extends TestCase
{

    private ListContentDocumentAsinRelationsResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ListContentDocumentAsinRelationsResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ListContentDocumentAsinRelationsResponse"
     */
    public function testListContentDocumentAsinRelationsResponse()
    {
        $this->assertInstanceOf(ListContentDocumentAsinRelationsResponse::class, $this->model);
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
     * Test attribute "asin_metadata_set"
     */
    public function testPropertyAsinMetadataSet()
    {
        $testValue = [];
        
        $this->model->setAsinMetadataSet($testValue);
        $this->assertEquals($testValue, $this->model->getAsinMetadataSet());
    }
}
