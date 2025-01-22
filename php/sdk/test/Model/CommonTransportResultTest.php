<?php
/**
 * CommonTransportResultTest
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
use OpenAPI\Client\Model\fulfillment\inbound\v0\CommonTransportResult;

/**
 * CommonTransportResultTest Class Doc Comment
 *
 * @category    Class
 * @description Common container for transport result
 * @package     OpenAPI\Client
 */
class CommonTransportResultTest extends TestCase
{

    private CommonTransportResult $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new CommonTransportResult();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "CommonTransportResult"
     */
    public function testCommonTransportResult()
    {
        $this->assertInstanceOf(CommonTransportResult::class, $this->model);
    }

    /**
     * Test attribute "transport_result"
     */
    public function testPropertyTransportResult()
    {
        
        $testValue = new \OpenAPI\Client\Model\fulfillment\inbound\v0\TransportResult();
        
        $this->model->setTransportResult($testValue);
        $this->assertEquals($testValue, $this->model->getTransportResult());
    }
}
