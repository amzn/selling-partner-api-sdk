<?php
/**
 * OptionalFulfillmentProgramTest
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
use OpenAPI\Client\Model\productFees\OptionalFulfillmentProgram;

/**
 * OptionalFulfillmentProgramTest Class Doc Comment
 *
 * @category    Class
 * @description An optional enrollment program to return the estimated fees when the offer is fulfilled by Amazon (IsAmazonFulfilled is set to true).
 * @package     OpenAPI\Client
 */
class OptionalFulfillmentProgramTest extends TestCase
{

    private OptionalFulfillmentProgram $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new OptionalFulfillmentProgram();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "OptionalFulfillmentProgram"
     */
    public function testOptionalFulfillmentProgram()
    {
        $this->assertInstanceOf(OptionalFulfillmentProgram::class, $this->model);
    }
}
