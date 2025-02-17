<?php
/**
 * GetFulfillmentPreviewResultTest
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
use SpApi\Model\fulfillment\outbound\v2020_07_01\GetFulfillmentPreviewResult;

/**
 * GetFulfillmentPreviewResultTest Class Doc Comment
 *
 * @category    Class
 * @description A list of fulfillment order previews, including estimated shipping weights, estimated shipping fees, and estimated ship dates and arrival dates.
 * @package     SpApi
 */
class GetFulfillmentPreviewResultTest extends TestCase
{

    private GetFulfillmentPreviewResult $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetFulfillmentPreviewResult();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetFulfillmentPreviewResult"
     */
    public function testGetFulfillmentPreviewResult()
    {
        $this->assertInstanceOf(GetFulfillmentPreviewResult::class, $this->model);
    }

    /**
     * Test attribute "fulfillment_previews"
     */
    public function testPropertyFulfillmentPreviews()
    {
        $testValue = [];
        
        $this->model->setFulfillmentPreviews($testValue);
        $this->assertEquals($testValue, $this->model->getFulfillmentPreviews());
    }
}
