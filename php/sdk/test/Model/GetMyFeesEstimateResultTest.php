<?php
/**
 * GetMyFeesEstimateResultTest
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
use OpenAPI\Client\Model\productFees\v0\GetMyFeesEstimateResult;

/**
 * GetMyFeesEstimateResultTest Class Doc Comment
 *
 * @category    Class
 * @description Response schema.
 * @package     OpenAPI\Client
 */
class GetMyFeesEstimateResultTest extends TestCase
{

    private GetMyFeesEstimateResult $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetMyFeesEstimateResult();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetMyFeesEstimateResult"
     */
    public function testGetMyFeesEstimateResult()
    {
        $this->assertInstanceOf(GetMyFeesEstimateResult::class, $this->model);
    }

    /**
     * Test attribute "fees_estimate_result"
     */
    public function testPropertyFeesEstimateResult()
    {
        
        $testValue = new \OpenAPI\Client\Model\productFees\v0\FeesEstimateResult();
        
        $this->model->setFeesEstimateResult($testValue);
        $this->assertEquals($testValue, $this->model->getFeesEstimateResult());
    }
}
