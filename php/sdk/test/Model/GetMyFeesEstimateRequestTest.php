<?php
/**
 * GetMyFeesEstimateRequestTest
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
use OpenAPI\Client\Model\productFees\GetMyFeesEstimateRequest;

/**
 * GetMyFeesEstimateRequestTest Class Doc Comment
 *
 * @category    Class
 * @description Request schema.
 * @package     OpenAPI\Client
 */
class GetMyFeesEstimateRequestTest extends TestCase
{

    private GetMyFeesEstimateRequest $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetMyFeesEstimateRequest();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetMyFeesEstimateRequest"
     */
    public function testGetMyFeesEstimateRequest()
    {
        $this->assertInstanceOf(GetMyFeesEstimateRequest::class, $this->model);
    }

    /**
     * Test attribute "fees_estimate_request"
     */
    public function testPropertyFeesEstimateRequest()
    {
        
        $testValue = new \OpenAPI\Client\Model\productFees\FeesEstimateRequest();
        
        $this->model->setFeesEstimateRequest($testValue);
        $this->assertEquals($testValue, $this->model->getFeesEstimateRequest());
    }
}
