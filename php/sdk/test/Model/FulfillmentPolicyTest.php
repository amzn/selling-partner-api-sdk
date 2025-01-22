<?php
/**
 * FulfillmentPolicyTest
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
use OpenAPI\Client\Model\fulfillment\outbound\FulfillmentPolicy;

/**
 * FulfillmentPolicyTest Class Doc Comment
 *
 * @category    Class
 * @description The &#x60;FulfillmentPolicy&#x60; value specified when you submitted the &#x60;createFulfillmentOrder&#x60; operation.
 * @package     OpenAPI\Client
 */
class FulfillmentPolicyTest extends TestCase
{

    private FulfillmentPolicy $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new FulfillmentPolicy();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "FulfillmentPolicy"
     */
    public function testFulfillmentPolicy()
    {
        $this->assertInstanceOf(FulfillmentPolicy::class, $this->model);
    }
}
