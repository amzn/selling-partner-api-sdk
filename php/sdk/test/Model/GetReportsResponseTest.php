<?php
/**
 * GetReportsResponseTest
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
use OpenAPI\Client\Model\reports\GetReportsResponse;

/**
 * GetReportsResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response for the &#x60;getReports&#x60; operation.
 * @package     OpenAPI\Client
 */
class GetReportsResponseTest extends TestCase
{

    private GetReportsResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetReportsResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetReportsResponse"
     */
    public function testGetReportsResponse()
    {
        $this->assertInstanceOf(GetReportsResponse::class, $this->model);
    }

    /**
     * Test attribute "reports"
     */
    public function testPropertyReports()
    {
        $testValue = [];
        
        $this->model->setReports($testValue);
        $this->assertEquals($testValue, $this->model->getReports());
    }

    /**
     * Test attribute "next_token"
     */
    public function testPropertyNextToken()
    {
        $testValue = 'test';
        
        $this->model->setNextToken($testValue);
        $this->assertEquals($testValue, $this->model->getNextToken());
    }
}
