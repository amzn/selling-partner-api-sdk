<?php
/**
 * GetFeatureInventoryResponseTest
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
use OpenAPI\Client\Model\fulfillment\outbound\v2020_07_01\GetFeatureInventoryResponse;

/**
 * GetFeatureInventoryResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The breakdown of eligibility inventory by feature.
 * @package     OpenAPI\Client
 */
class GetFeatureInventoryResponseTest extends TestCase
{

    private GetFeatureInventoryResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetFeatureInventoryResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetFeatureInventoryResponse"
     */
    public function testGetFeatureInventoryResponse()
    {
        $this->assertInstanceOf(GetFeatureInventoryResponse::class, $this->model);
    }

    /**
     * Test attribute "payload"
     */
    public function testPropertyPayload()
    {
        
        $testValue = new \OpenAPI\Client\Model\fulfillment\outbound\v2020_07_01\GetFeatureInventoryResult();
        
        $this->model->setPayload($testValue);
        $this->assertEquals($testValue, $this->model->getPayload());
    }

    /**
     * Test attribute "errors"
     */
    public function testPropertyErrors()
    {
        $testValue = [];
        
        $this->model->setErrors($testValue);
        $this->assertEquals($testValue, $this->model->getErrors());
    }
}
