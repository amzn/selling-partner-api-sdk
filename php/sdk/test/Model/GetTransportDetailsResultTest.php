<?php
/**
 * GetTransportDetailsResultTest
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
use OpenAPI\Client\Model\fulfillment\inbound\v0\GetTransportDetailsResult;

/**
 * GetTransportDetailsResultTest Class Doc Comment
 *
 * @category    Class
 * @description Result for the get transport details operation
 * @package     OpenAPI\Client
 */
class GetTransportDetailsResultTest extends TestCase
{

    private GetTransportDetailsResult $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetTransportDetailsResult();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetTransportDetailsResult"
     */
    public function testGetTransportDetailsResult()
    {
        $this->assertInstanceOf(GetTransportDetailsResult::class, $this->model);
    }

    /**
     * Test attribute "transport_content"
     */
    public function testPropertyTransportContent()
    {
        
        $testValue = new \OpenAPI\Client\Model\fulfillment\inbound\v0\TransportContent();
        
        $this->model->setTransportContent($testValue);
        $this->assertEquals($testValue, $this->model->getTransportContent());
    }
}
