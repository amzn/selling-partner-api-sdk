<?php
/**
 * AplusPaginatedResponseTest
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
use OpenAPI\Client\Model\aplusContent\AplusPaginatedResponse;

/**
 * AplusPaginatedResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The base response data for paginated A+ Content operations. Individual operations may extend this with additional data. If nextPageToken is not returned, there are no more pages to return.
 * @package     OpenAPI\Client
 */
class AplusPaginatedResponseTest extends TestCase
{

    private AplusPaginatedResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new AplusPaginatedResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "AplusPaginatedResponse"
     */
    public function testAplusPaginatedResponse()
    {
        $this->assertInstanceOf(AplusPaginatedResponse::class, $this->model);
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
}
