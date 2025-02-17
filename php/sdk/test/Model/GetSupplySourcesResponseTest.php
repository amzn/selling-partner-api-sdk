<?php
/**
 * GetSupplySourcesResponseTest
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
use SpApi\Model\supplySources\v2020_07_01\GetSupplySourcesResponse;

/**
 * GetSupplySourcesResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The paginated list of supply sources.
 * @package     SpApi
 */
class GetSupplySourcesResponseTest extends TestCase
{

    private GetSupplySourcesResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetSupplySourcesResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetSupplySourcesResponse"
     */
    public function testGetSupplySourcesResponse()
    {
        $this->assertInstanceOf(GetSupplySourcesResponse::class, $this->model);
    }

    /**
     * Test attribute "supply_sources"
     */
    public function testPropertySupplySources()
    {
        $testValue = [];
        
        $this->model->setSupplySources($testValue);
        $this->assertEquals($testValue, $this->model->getSupplySources());
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
