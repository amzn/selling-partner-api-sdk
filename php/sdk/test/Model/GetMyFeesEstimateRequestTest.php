<?php
/**
 * GetMyFeesEstimateRequestTest
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
use SpApi\Model\productFees\v0\GetMyFeesEstimateRequest;

/**
 * GetMyFeesEstimateRequestTest Class Doc Comment
 *
 * @category    Class
 * @description Request schema.
 * @package     SpApi
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
        
        $testValue = new \SpApi\Model\productFees\v0\FeesEstimateRequest();
        
        $this->model->setFeesEstimateRequest($testValue);
        $this->assertEquals($testValue, $this->model->getFeesEstimateRequest());
    }
}
